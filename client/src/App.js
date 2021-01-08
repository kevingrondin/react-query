import { Routes, Route, HashRouter } from "react-router-dom";
import BookList from "./pages/BookList";
import CreateBook from "./pages/CreateBook";
import UpdateBook from "./pages/UpdateBook";
import NavBar from "./components/NavBar";

const App = () => (
  <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/update-book/:id" element={<UpdateBook />} />
      <Route path="/create-book" element={<CreateBook />} />
      <Route path="/" element={<BookList />} />
    </Routes>
  </HashRouter>
);

export default App;
