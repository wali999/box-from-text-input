import React, { useState } from 'react'

function CreateBox() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index);
        setTasks(updatedTasks);

    }


    return(
        <div className="create-box">

            <div className="in">

            <h1>Create a box</h1>

            <div>
                <input
                type="text"
                placeholder="Enter something..."
                value={newTask}
                onChange={handleInputChange}/>

                <button
                className="add-button"
                onClick={addTask}>
                Create
                </button>
            </div>
            </div>

            <ol>
                {tasks.map((task, index)=>
                  <li key={index}>
                    <div className="text">{task}</div>
                    <button
                       className="delete-button"
                       onClick={() => deleteTask(index)}>
                       Delete

                    </button>
                

                  </li>
                )}
            </ol>

        </div>
    );

}
export default CreateBox