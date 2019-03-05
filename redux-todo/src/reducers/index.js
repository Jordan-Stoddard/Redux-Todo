const initialState = {
    todos: [
        {task: 'Do laundry', completed: false, id: Date.now()},
        {task: 'Find a friend', completed: false, id: Date.now() + 1},
        {task: 'Write a book', completed: false, id: Date.now() + 2}
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        const newTodo = {task: action.payload, completed: false, id: Date.now()}
        return {...state, todos: [...state.todos, newTodo]}
        default:
        return state;
    }
}