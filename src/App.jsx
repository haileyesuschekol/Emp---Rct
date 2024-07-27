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
    if (action.type === "change") {
      return {
        ...state,
        valueToAdd: action.payload,
      }
    }
    if (action.type === "addValue") {
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      }
    }

    return state
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

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    despatch({
      type: "change",
      payload: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    despatch({
      type: "addValue",
    })
  }
  return (
    <div>
      <p>{state.count}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Decr</button>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={state.valueToAdd || ""}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default App
