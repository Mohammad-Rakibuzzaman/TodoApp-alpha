import React, { useState } from "react";

const LocalStorageComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [savedValue, setSavedValue] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("myKey", inputValue);
  };

  const handleLoad = () => {
    const value = localStorage.getItem("myKey");
    setSavedValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSave}>Save to Local Storage</button>
      <button onClick={handleLoad}>Load from Local Storage</button>
      {savedValue && <p>Saved Value: {savedValue}</p>}
    </div>
  );
};

export default LocalStorageComponent;
