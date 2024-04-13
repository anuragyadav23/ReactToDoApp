import { useState } from "react";

import "./input.css";

function InputSection({ addData }) {
  // here we will write the handle change function
  let [inputValue, setInputValue] = useState("");
  let handleChange = (event) => {
    inputValue = event.target.value;
    setInputValue(inputValue);
  };

  // writing code to handle the change in the date by the user
  let [inputDate, setInputDate] = useState("");
  let handleDateChange = (event) => {
    inputDate = event.target.value;
    setInputDate(inputDate);
  };

  // here we will make the use of useState hook to change the value of our input
  let clearInput = () => {
    setInputValue("");
    setInputDate("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Task"
        value={inputValue}
        onChange={handleChange}
      ></input>

      <input type="date" onChange={handleDateChange} value={inputDate}></input>

      <button
        className="task-btn"
        onClick={() => {
          addData(inputValue, inputDate);
          clearInput();
        }}
      >
        Add Task
      </button>
    </div>
  );
}

export default InputSection;
