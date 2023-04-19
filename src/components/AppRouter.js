import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404'
import About from '../pages/About'
import Location from '../pages/Location'

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location/:id" element={<Location/>} />
    </Routes>
  );
}

export default AppRouter;
