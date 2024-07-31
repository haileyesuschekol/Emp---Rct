import { useDispatch, useSelector } from "react-redux"
import { addSong } from "../rtk/store2"

const Rtk = () => {
  const dispatch = useDispatch()

  const set = []
  const handleChange = (event) => {
    const input = event.target.value
    return set.push(input)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(addSong(set[set.length - 1]))
  }

  const selector = useSelector((state) => {
    return state.songs
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Add song</button>
      </form>
      {selector &&
        selector.map((slice) => {
          return <h2 key={Math.random()}>{slice}</h2>
        })}
    </div>
  )
}

export default Rtk
