function addTodo (todo) {
    return {
        type: 'ADD_TODO',
        payloud: todo
    }
}
function deleteTodo (id) {
    return {
        type: 'DELETE_TODO',
        payloud: id

    }
}
function editTodo (todo) {
    return {
        type: 'EDIT_TODO',
        payloud: todo
        //обект todo внутри obj action
    }
}
export {addTodo, deleteTodo, editTodo}