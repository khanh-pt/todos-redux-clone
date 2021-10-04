import html from "../utils.js";


export default function Header(){
  return html`
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        onkeyup="
          (this.value.trim().length > 0 && event.keyCode === 13) 
          && dispatch({type: 'add', payload: this.value.trim()})
        "
      />
    </header>
  `
}