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
        }
    ])
    return(
        <ToDoContext.Provider value={{taskList, setTaskList}}>
            {
                props.children
            }
        </ToDoContext.Provider>
    )
}

export default ToDoContextProvider