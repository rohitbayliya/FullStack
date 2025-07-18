
import React, {useState} from "react";

let initialState = [{
    id : 0,
    taskTitle : 'Sample task',
    taskPrioity : 'low',
    taskStatus : 'pending' //complete - when task is done
},]

var ID = 1;

function TaskManager() {

    const [Tasks, setTasks] = useState(initialState);
    const [inputTitle, setInputTitle] = useState('');
    const [prioity, setPrioity] = useState('low');
    


    function addTask() {
        setTasks([...Tasks, {id: ID++, taskTitle: inputTitle, taskPrioity: prioity, taskStatus:'pending'}])
        setInputTitle('')
    }

    function changeStatus(e, index) {
        let newTasks = [...Tasks]
        newTasks[index].taskStatus = (e.target.checked)?'complete':'pending'
        setTasks(newTasks)
    }

    return (
        <div>
            <h2>Task Manager</h2>
            <input type="text" onChange={(e)=> setInputTitle(e.target.value)} value={inputTitle}/>
            <select id="priority" name="Priority" onChange={(e)=>setPrioity(e.target.value)} value={prioity}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onClick={addTask}>Save task</button>

            <ul>
                {Tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            {/* ID: {task.id} <br />
                            Title: {task.taskTitle} <br />
                            Priority: {task.taskPrioity} <br />
                            Status: {task.taskStatus} <br /> 
                            <input type="checkbox" onChange={(e)=> changeStatus(e, index)} /><hr /> */}

                            <div className="task-card">
                            <div className="task-header">
                                <input type="checkbox" id="task-0" className="task-checkbox" onChange={(e)=> changeStatus(e, index)}/>
                                <label for="task-0" className="task-title">{task.taskTitle}</label>
                            </div>
                            <div className="task-meta">
                                <span className="task-id">ID: {task.id}</span>  
                                {/* <span className="priority" style={{background-color:prioity=='high'?'red':'green'}} >Priority: {task.taskPrioity}</span> */}
                                <span
                                    className="priority"
                                    style={{
                                        backgroundColor:
                                            task.taskPrioity === 'high'
                                            ? 'red'
                                            : task.taskPrioity === 'low'
                                            ? 'green'
                                            : 'orange',
                                        }}

                                    >
                                    Priority: {task.taskPrioity}
                                </span>

                                <span className="status pending" id="status-0">Status: {task.taskStatus}</span>
                            </div>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskManager;