import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';

import Navbar from "./shared/components/Navbar";
import Footer from "shared/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

