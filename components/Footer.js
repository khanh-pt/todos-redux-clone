import { connect } from "../store.js";
import html from "../utils.js";

const Footer = function(state){
  return html`
    <footer class="footer">
      <span class="todo-count">
        <strong>${state.todos.filter(todo => !todo.completed).length}</strong> item left
      </span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        ${ Object.keys(state.filters).map(filter => html`
          <li>
            <a class="${filter === state.currentFilter && 'selected'}" href="#" onclick="dispatch({type: 'switchFilter', payload: '${filter}'})">${filter[0].toUpperCase() + filter.slice(1)}</a>
          </li>
        `)}
      </ul>
      <button class="clear-completed" onclick="dispatch({type: 'clearCompleted'})">Clear completed</button>
    </footer>
  `
}
export default connect()(Footer);