import Signup from "./Signup.jsx"
import Signin from "./Signin.jsx";
import Appbar from "./Appbar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddCourse from "./AddCourse.jsx";
function App() {

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee"
    }}
    >
      <Appbar></Appbar>
      <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addcourse" element={<AddCourse />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
