import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Help from "./Help"
import Home from "./Home"

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App
