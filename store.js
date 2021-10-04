import createStore from "./createStore.js";
import reducerTodos from "./reducers/reducerTodos.js";


const {attach, connect, dispatch} = createStore(reducerTodos);
window.dispatch = dispatch;
export {
  attach,
  connect
}