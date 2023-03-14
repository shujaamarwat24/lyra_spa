export function closestPointInPolygon(vertices, pointX, pointY) {
  let closestDistance = Infinity;
  let closestPoint = null;

  for (let i = 0; i < vertices.length; i++) {
    const currVertex = vertices[i];
    const nextVertex = vertices[(i + 1) % vertices.length];

    const [closestX, closestY] = closestPointOnLine(currVertex.x, currVertex.y, nextVertex.x, nextVertex.y, pointX, pointY);

    const distance = getDistance(pointX, pointY, closestX, closestY);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestPoint = { x: closestX, y: closestY };
    }
  }

  return closestPoint;
}

function closestPointOnLine(lineX1, lineY1, lineX2, lineY2, pointX, pointY) {
  const A = pointX - lineX1;
  const B = pointY - lineY1;
  const C = lineX2 - lineX1;
  const D = lineY2 - lineY1;

  const dot = A * C + B * D;
  const len_sq = C * C + D * D;
  let param = -1;

  if (len_sq != 0) // in case of zero length line
    param = dot / len_sq;

  let xx, yy;

  if (param < 0) {
    xx = lineX1;
    yy = lineY1;
  } else if (param > 1) {
    xx = lineX2;
    yy = lineY2;
  } else {
    xx = lineX1 + param * C;
    yy = lineY1 + param * D;
  }

  return [xx, yy];
}

function getDistance(x1, y1, x2, y2) {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}
