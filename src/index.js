import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import Clicker from "./Clicker.jsx"
import "./style.css"

const root = createRoot(document.querySelector("#root"))

root.render(
    <>
        <App>
            <h1>Hello</h1>
            <h2>Fancy Sub</h2>
        </App>
    </>
)