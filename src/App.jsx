import { useFetch } from "./hook/useFetch"
function App() {
  const fData = useFetch(1)
  const { id, name } = fData
  return (
    <>
      <h1>
        {id}, {name}
      </h1>
      <h1>Fetch</h1>
    </>
  )
}

export default App
