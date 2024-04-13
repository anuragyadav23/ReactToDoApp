import { useState } from "react";
import "./input.css";

function InputSection({ addData }) {
  // here we will write the handle change function
  let [inputValue, setInputValue] = useState("");
  let handleChange = (event) => {
    inputValue = event.target.value;
    setInputValue(inputValue);
  };

  // here we will make the use of useState hook to change the value of our input
  let clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Task"
        value={inputValue}
        onChange={handleChange}
      ></input>
      <button
        className="task-btn"
        onClick={() => {
          addData(inputValue);
          clearInput();
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default InputSection;
