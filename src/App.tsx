import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <h1>Material ui with ts</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
