import { connect } from "../store.js";
import html from "../utils.js";
import TodoItem from "./TodoItem.js";

const TodoList = function({todos, currentFilter, filters}){
  return html`
    <section class="main">
      <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox" 
        onchange="dispatch({type: 'toggleAll', payload: this.checked})"
        
        ${todos.every(todo => !!todo.completed) && 'checked'}
      >
      <label for="toggle-all" >Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(filters[currentFilter]())
          .map((todo, index) => TodoItem(todo, index))}
      </ul>
    </section>
  `
}

export default connect()(TodoList);