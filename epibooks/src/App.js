import MainLayout from "./layouts/MainLayout";
import Welcome from "./compontens/welcome/Welcome";
import LatestRelease from "./compontens/lastestRelease/LatestRelease";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookDetail from "./pages/BookDetail";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/book/:bookId" element={<BookDetail/>}/>

              <Route path='*' element={<PageNotFound/>}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
