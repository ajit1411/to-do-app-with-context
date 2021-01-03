import React, {createContext, useState, useEffect} from 'react'

export const ToDoContext = createContext()

const ToDoContextProvider = (props) => {
    const [taskList, setTaskList] = useState([
        {
            'taskId': 'task-001',
            'taskName': 'Task 1',
            'taskDetails': 'My first task'
        },
        {
            'taskId': 'task-002',
            'taskName': 'Task 2',
            'taskDetails': 'My second task'
        },
        {
            'taskId': 'task-003',
            'taskName': 'Task 3',
            'taskDetails': 'My third task'
        },
        {
            'taskId': 'task-004',
            'taskName': 'Task 4',
            'taskDetails': 'My fourth task'
        },
        {
            'taskId': 'task-005',
            'taskName': 'Task 5',
            'taskDetails': 'My fifth task'
        }
    ])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <ToDoContext.Provider value={{taskList, setTaskList, isLoggedIn, setIsLoggedIn}}>
            {
                props.children
            }
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider