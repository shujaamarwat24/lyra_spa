# Lyra_spa

 A mockup SPA editor created using React

#### Design

For the design of the SPA editor, I chose to follow the mockup provided as closely as possible. I created a Toolbar component on the left side of the screen with six buttons, and an Editor component on the right side of the screen. The Editor component contains the polygon shapes, and the Closest Point Tool functionality.

#### What I like about my solution

I like that the code is structured in a way that is easy to read and understand. The components are modular and reusable, and the code follows best practices for React development. I also like that the functionality of the editor matches the requirements set out in the mockup.

#### What I do not like about my solution

One area for improvement is the Closest Point Tool functionality. It currently only works for non-self-intersecting polygons, which is a limitation that could be addressed in future iterations. Additionally, the current implementation uses SVG for rendering the shapes, which may not be the most performant approach for very large or complex shapes.

#### Technologies or approaches that were new to me

None of the technologies or approaches used in this project were new to me. However, I did learn more about SVG rendering and polygon geometry in the process of implementing the editor.

## Setup

```
npm start
```

```
npm test
```
