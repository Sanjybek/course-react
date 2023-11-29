import { createStore } from "redux"
import { initialState } from "./initialState";


const todoReducer =  (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
        return{
            ...state,
            todoList: [...state.todoList, action.payloud]
        }
        case 'DELETE_TODO':
        return {
            ...state,
            todoList: state.todoList.filter((i) => i.id !== action.payloud)
        }
        case 'EDIT_TODO':
        return {
            ...state,
            todoList: state.todoList.map((todo) => todo.id === action.payloud.id ? action.payloud  : todo)
        }
        default: 
            return state
    }
    
}



export const store = createStore(todoReducer)