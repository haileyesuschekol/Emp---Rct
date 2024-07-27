import { useReducer } from "react"

const App = () => {
  const initialCount = 0
  const reducer = (state, action) => {
    if (action.type === "increment") {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    if (action.type === "decrement") {
      return {
        ...state,
        count: state.count - 1,
      }
    }
  }

  const [state, despatch] = useReducer(reducer, {
    valueToAdd: 0,
    count: initialCount,
  })

  const increment = () => {
    despatch({
      type: "increment",
    })
  }
  const decrement = () => {
    despatch({
      type: "decrement",
    })
  }
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Decr</button>
    </div>
  )
}

export default App
