export default function createStore(reducer){
  let state = reducer();

  const roots = new Map();
  function render(){
    for(let [root, component] of roots){
      root.innerHTML = component();
    }
  }
  
  return {
    attach(component, root){
      roots.set(root, component);
      render();
    },
    connect(selector = state => state){
      // return function(component){
      //   return function(props, ...args){
      //     component(Object.assign({}, selector(state), props, args));
      //   }
      // }
      return component =>
        () => component(selector(state));
    },
    dispatch(action){
      state = reducer(state, action);
      render();
    }
  }
}