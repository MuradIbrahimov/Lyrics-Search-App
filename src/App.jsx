import Navbar from "./component/layout/Navbar";
import { Route, Routes } from "react-router-dom";
import Index from "./component/layout/Index";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
