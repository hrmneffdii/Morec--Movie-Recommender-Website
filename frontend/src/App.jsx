import 'preline'
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import Selected from './pages/selected';
import NotFound from './pages/notFound';
import { Route, Routes, BrowserRouter } from "react-router-dom"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/me" element={<Home />} />
          <Route path="/selected/:title" element={<Selected />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>  
      </BrowserRouter>
  )
}