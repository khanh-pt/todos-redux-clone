export function add(){
  return {
    type: 'ADD',
    payload: 'Car'
  }
}

export function remove(){
  return {
    type: 'REMOVE'
  }
}

// action is a function
// description for reducer function how to handle its state