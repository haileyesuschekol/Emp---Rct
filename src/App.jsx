import { useFetch } from "./hook/useFetch"
function App() {
  const fData = useFetch(1)
  const { id, name } = fData
  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
