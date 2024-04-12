import React, { useReducer } from 'react'

const initialValue = {
    count: 0
}

// 1st param is the value 2nd param is the action yacni + - reset
const reduser = (state,action) => {
  switch(action.type)
  {
    case 'increment' :
      return {count:state.count + 1}
    case 'decrement' :
      return {count:state.count - 1}
    case 'reset':
      return {count:0}
    default :
      return{state}

  }
}

function UseReducer() {
    const [state, despatch] = useReducer(reduser,initialValue)
   
  return (
    <div>
    value is : {state.count}
    <button  onClick={()=> despatch({type:'increment'})}>+</button>
    <button onClick={()=> despatch({type:'decrement'})}>-</button>
    <button onClick={()=> despatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default UseReducer

// useReducer: is used for complex state manipulations and state transitions
// const [state, dispatch ] = useReducer(reducer, initailValue)
