import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Error404 from '../pages/Error404'
import About from '../pages/About'

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRouter;
