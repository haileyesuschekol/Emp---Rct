// import { useState } from "react"
// import { useEffect } from "react"

// export const useFetch = (id) => {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     const controller = new AbortController()
//     const signal = controller.signal
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       signal,
//     })
//       .then((res) => {
//         if (!res) throw new Error("error happen")
//         return res.json()
//       })
//       .then((json) => setData(json))
//       .catch((error) => {
//         console.log(error)
//       })

//     return () => controller.abort()
//   }, [id])
//   return data
// }

// export default useFetch
