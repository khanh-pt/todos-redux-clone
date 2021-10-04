export function increase(){
  return {
    type: 'INCREMENT',
    payload: 5
  }
}

export function decrease(){
  return {
    type: 'DECREMENT',
    payload: 5
  }
}

// action is a function
// description for reducer function how to handle its state