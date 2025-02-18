import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Anime from './pages/Anime';
import SignupComponent from './components/SignupComponent';

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white py-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">
            <Link to="/">AnimeWorld</Link>
          </h1>
          <ul className="flex gap-x-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/anime"
                className="hover:text-yellow-300 transition duration-300"
              >
                Anime
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-300 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="hover:text-yellow-300 transition duration-300"
              >
                Singup
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <div className="bg-gray-100 min-h-screen">
        <div className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/anime" element={<Anime />} />
            <Route path='/signup' element={<SignupComponent />}/>
          </Routes>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 AnimeWorld by jayson urquiola. All Rights Reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
