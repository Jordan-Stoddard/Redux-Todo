export const addTodo = (task) => {
    return {
        type: 'ADD_TODO',
        payload: task
    }
}