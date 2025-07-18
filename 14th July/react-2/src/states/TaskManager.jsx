
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
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editPriority, setEditPriority] = useState('low');


    function addTask() {
        setTasks([...Tasks, {id: ID++, taskTitle: inputTitle, taskPrioity: prioity, taskStatus:'pending'}])
        setInputTitle('')
    }

    function changeStatus(e, index) {
        let newTasks = [...Tasks]
        newTasks[index].taskStatus = (e.target.checked)?'complete':'pending'
        setTasks(newTasks)
    }

    function deleteTask(id) {
        let newTasks= [...Tasks]
        newTasks.splice(id,1)
        setTasks(newTasks)
    }

    function startEdit(task) {
        setEditingTaskId(task.id);
        setEditTitle(task.taskTitle);
        setEditPriority(task.taskPrioity);
    }

    function submitEdit() {
        setTasks(prev =>
            prev.map(task =>
            task.id === editingTaskId
                ? { ...task, taskTitle: editTitle, taskPrioity: editPriority }
                : task
            )
        );
        setEditingTaskId(null);
        setEditTitle('');
        setEditPriority('low');
    }

    function cancelEdit() {
        setEditingTaskId(null);
        setEditTitle('');
        setEditPriority('low');
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
                            {editingTaskId === task.id ? (
                                <div>
                                    <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    />
                                    <select
                                    value={editPriority}
                                    onChange={(e) => setEditPriority(e.target.value)}
                                    >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    </select>
                                    <button onClick={submitEdit}>Save</button>
                                    <button onClick={cancelEdit}>Cancel</button>
                                </div>
                                ) : (
                                <div>
                                    <div className="task-card">
                                    <div className="task-header">
                                        <input type="checkbox" id="task-0" className="task-checkbox" onChange={(e)=> changeStatus(e, index)} placeholder="Enter Task"/>
                                        <label htmlFor="task-0" className="task-title">{task.taskTitle}</label>
                                    </div>
                                    <div className="task-meta">
                                        <span className="task-id">ID: {task.id}</span>  
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
                                        <button onClick={()=>deleteTask(index)}>Delete</button>
                                        <button onClick={() => startEdit(task)}>Edit</button>
                                    </div>
                                    </div>
                                    
                                </div>
                                )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TaskManager;