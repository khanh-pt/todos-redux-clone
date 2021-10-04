import { todosStorage } from "../utils.js";

let initState = {
  todos: todosStorage.get(),
  currentFilter: 'all',
  filters: {
  all(){
    return todo => todo
  }, 
  active(){
    return todo => !todo.completed
  }, 
  completed(){
    return todo => todo.completed
  }
}
}

const actions = {
  add({todos}, title){
    todos.unshift({title, completed: false});
    todosStorage.set(todos);
  },
  delete({todos}, indexDelete){
    todos.splice(indexDelete, 1);
    todosStorage.set(todos);
  },
  toggle({todos}, index){
    todos[index].completed = !todos[index].completed;
    todosStorage.set(todos);
  },
  toggleAll({todos}, value){
    todos.forEach(todo => todo.completed = value)
    todosStorage.set(todos);
  },
  switchFilter(state, value){
    state.currentFilter = value;
    todosStorage.set(state.todos);
  },
  clearCompleted(state){
    state.todos = state.todos.filter(todo => !todo.completed);
    todosStorage.set(state.todos);
  },
}

export default function reducerTodos(state = initState, action = {}){
  console.log('action', action);
  actions[action.type] && actions[action.type](state, action.payload);
  return state;
}