import { attach, connect } from "../store.js";
import html from "../utils.js";

const TodoItem = function(todo, index){
  return html`
    <li class="${todo.completed && 'completed'}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox" ${todo.completed && 'checked'}
        >
        <label onclick="dispatch({type: 'toggle', payload: ${index}})">${todo.title} ${undefined}</label>
        <button class="destroy" onclick="dispatch({type: 'delete', payload: ${index}})"></button>
      </div>
      <input class="edit" value="${todo.title}">
    </li>
  `
}

export default TodoItem;