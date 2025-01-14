import "./App.css";
import Title from "./components/title";
import InputSection from "./components/input";
import Task from "./components/task";
import { useState } from "react";
function App() {
  // here we will make the use of useState hook in react to
  // lively reload our data
  let [taskData, setTaskData] = useState([]);

  // now here we have to write a function to add the data into our array
  let addData = (value) => {
    // now we have to add data to the list
    if (value != "") {
      taskData.push(value);
      setTaskData([...taskData]);
    }
  };

  return (
    <div>
      <Title />
      <InputSection addData={addData} />
      <div className="task-main-container">
        {
          // now here we will write the map function
          taskData.map((item) => (
            <Task item={item} />
          ))
        }
      </div>
    </div>
  );
}

export default App;
