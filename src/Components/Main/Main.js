import React, { useContext, useState } from 'react'
import './Main.css'
import { ToDoContext } from '../../Context/ToDoContext'

export const Task = ({task, index, editTask, removeTask}) => {
    return (
        <div className='task'>
            <div className='task-name'>
                {
                    task.taskName
                }
            </div>
            <div className='task-action'>
                <i className='fa fa-pencil' onClick={() => editTask(task)}></i>
            </div>
            <div className='task-action'>
                <i className='fa fa-trash' onClick={() => removeTask(task)}></i>
            </div>
        </div>
    )
}

const Main = () => {
    const { taskList, setTaskList, isLoggedIn, setIsLoggedIn } = useContext(ToDoContext)
    const [taskName, setTaskName] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [selectedTask, setSelectedTask] = useState(undefined)
    const [password, setPassword] = useState('')
    const [isPasswordWrong, setIsPasswordWrong] = useState(false)
    const createNewTask = () => {
        if (taskName === '') {
            alert('Enter valid task!')
            return
        }
        setTaskList([...taskList, { 'taskId': `task-00${taskList.length + 1}`, 'taskName': taskName }])
        setTaskName('')
    }
    const removeTask = (taskToDelete) => {
        setTaskList(taskList.filter(task => {
            if (taskToDelete['taskId'] != task['taskId']) {
                return task
            }
        }))
    }
    const editTask = (task) => {
        setSelectedTask(task)
        setIsEditing(true)
    }
    const updateTask = () => {
        let tempTasks = [...taskList]
        for (let i = 0; i < tempTasks.length; i++) {
            if (tempTasks[i]['taskId'] == selectedTask['taskId']) {
                tempTasks[i]['taskName'] = selectedTask['taskName']
                break
            }
        }
        setTaskList(tempTasks.map(task => task))
        setIsEditing(false)
        setSelectedTask(undefined)
        setTaskName('')
    }
    const changeHandler = (event) => {
        if (isEditing) {
            setSelectedTask({ ...selectedTask, 'taskName': event.target.value })
        }
        else {
            setTaskName(event.target.value)
        }
    }
    return (
        <React.Fragment>
            <div className='main__main-container'>
                <div className='main__task-container'>
                    {
                        isLoggedIn ? (
                            <React.Fragment>
                                <span className='title'>
                                    To Do App
                                </span>
                                <div className='main__user-form'>
                                    <div className='input'>
                                        <input placeholder='Enter task name' value={isEditing ? selectedTask['taskName'] : taskName} onChange={changeHandler} />
                                    </div>
                                    <div className='submit'>
                                        <button onClick={isEditing ? updateTask : createNewTask}>
                                            {
                                                isEditing ? 'Update' : 'Add'
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className='main__task-list'>
                                    {
                                        taskList && taskList.length > 0 ? (
                                            <React.Fragment>
                                                {
                                                    taskList.map((task, index) => (
                                                        <Task task={task} key={`task_${index}`} index={index} editTask={editTask} removeTask={removeTask} />
                                                    ))
                                                }
                                            </React.Fragment>
                                        ) : (
                                                <div className='task'>
                                                    <div className='task-name'>
                                                        No Tasks
                                                    </div>
                                                </div>
                                            )
                                    }
                                </div>
                                <div className='submit'>
                                    <button onClick={() => setIsLoggedIn(false)}>
                                        Log Out
                                    </button>
                                </div>
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <div className='main__logged-out'>
                                        <span className='title'>
                                            Logged Out
                                        </span>

                                        <div className='main__user-form'>
                                            <div className='input'>
                                                <input type='password' className={isPasswordWrong ? 'error' : ''} placeholder='Enter password: demoUser' value={password} onChange={(event) => setPassword(event.target.value)} />
                                            </div>
                                            <div className='submit'>
                                                <button onClick={() => {
                                                    if (password === 'demoUser') {
                                                        setIsLoggedIn(true)
                                                        setIsPasswordWrong(false)
                                                    }
                                                    else {
                                                        alert('Password wrong. Use `demoUser` to login')
                                                        setIsPasswordWrong(true)
                                                    }
                                                }}>
                                                    Log In
                                                </button>
                                            </div>
                                        </div>
                                        <div className='main__application-info'>
                                            <h3>
                                                Simple ToDo application
                                            </h3>
                                            <span>
                                                with
                                            </span>
                                            <h4>
                                                Context API
                                            </h4>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main