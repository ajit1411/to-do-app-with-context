import React, { useContext, useState } from 'react'
import './Main.css'
import { ToDoContext } from '../../Context/ToDoContext'
const Main = () => {
    const { taskList, setTaskList } = useContext(ToDoContext)
    const [taskName, setTaskName] = useState('')
    const [isEditing, setIsEditing] = useState(false)
    const [selectedTask, setSelectedTask] = useState(undefined)
    const createNewTask = () => {
        setTaskList([...taskList, {'taskId': `task-00${taskList.length + 1}`, 'taskName': taskName}])
        setTaskName('')
    }
    const removeTask = (taskToDelete) => {
        setTaskList(taskList.filter(task => {
            if(taskToDelete['taskId'] != task['taskId']){
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
        for(let i = 0; i < tempTasks.length; i++){
            if(tempTasks[i]['taskId'] == selectedTask['taskId']){
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
        if(isEditing){
            setSelectedTask({...selectedTask, 'taskName': event.target.value})
        }
        else{
            setTaskName(event.target.value)
        }
    }
    return (
        <React.Fragment>
            <div className='main__main-container'>
                <div className='main__task-container'>
                    <span className='title'>
                        To Do with Context
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
                                        taskList.map(task => (
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main