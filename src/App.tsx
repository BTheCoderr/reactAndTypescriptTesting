import { useState } from "react";
import Button from "./components/Button"; // Ensure case matches the file name
import Alert from "./components/Alert";   // Ensure case matches the file name
import "./App.css";

const App: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <Button onClick={handleClick}>Toggle Alert</Button>
      {showAlert && <Alert message="This is an alert!" />}
    </div>
  );
};

export default App;
