import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Exper from "./Page/Exper";
import { Navbar } from "./components";
import Kontak from "./Page/Kontak";
import Projek from "./Page/Projek";
const App = () => {
  return (
    <Router>
       <Navbar />
      {/* <GlobalStyle />
      <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<Home />} />
        <Route path='/work' element={<Exper />} />
        <Route path='/contact' element={<Kontak />} />
         <Route path='/project' element={<Projek />} />
        {/* <Route path='/p/:name/:sort' element={<SearchImages />} />
        <Route path='/p/:name/:sort/:orientation' element={<SearchImages />} />
        <Route path='/c/:name' element={<SearchCollections />} />
        <Route path='/c/:id/:name' element={<Collection />} />
        <Route path='/u/:name' element={<SearchUsers />} />
        <Route path='/t/:slug' element={<Topic />} />

        <Route path='/:username' element={<User />} /> */}
      </Routes>
    
      {/* <Modal isFilterModal={modalProps.type === "filterModal"} /> */}
    </Router>
  );
}

export default App;
