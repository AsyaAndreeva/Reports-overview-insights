import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScreenA } from "./components/screens/ScreenA";
import { ScreenB } from "./components/screens/ScreenB";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ScreenA />} />
        <Route path="/insights" element={<ScreenB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
