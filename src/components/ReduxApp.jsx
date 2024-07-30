import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../app/features/counter/counterSlice"

const ReduxApp = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrese</button>
    </div>
  )
}

export default ReduxApp
