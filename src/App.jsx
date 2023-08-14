import Navbar from "./component/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Index from "./component/layout/Index";
import Lyrics from "./component/tracks/Lyrics";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lyrics/track/:id" element={<Lyrics />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
