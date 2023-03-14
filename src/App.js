import { useState } from 'react';
import Editor from './components/Editor';
import Toolbar from './components/Toolbar';
import './App.css';

function App() {
  const [activeTool, setActiveTool] = useState("select");
  const handleToolSelect = (tool) => {
    setActiveTool(tool);
  };

  return (
    <div className="app">
      <Toolbar activeTool={activeTool} onToolClick={handleToolSelect} />
      <Editor activeTool={activeTool} />
    </div>
  );
}

export default App;
