import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
// import { store } from "./app/store.js"
import { Provider } from "react-redux"
import { fileStore } from "./rtk/store2.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={fileStore}>
      <App />
    </Provider>
  </React.StrictMode>
)
