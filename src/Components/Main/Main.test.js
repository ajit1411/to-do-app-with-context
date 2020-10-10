import React from 'react'
import ReactDOM from 'react-dom'
import Main, {Task} from './Main'

test('Renders task', () => {
    const taskDiv = document.createElement('div')
    ReactDOM.render(<Task task={{'taskName': 'Test'}} key='task_1' index='1'></Task>, taskDiv)
})