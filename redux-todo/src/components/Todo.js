import React from 'react'

export default function Todo(props) {
  return (
    <li>
        {props.todo.task}
    </li>
  )
}