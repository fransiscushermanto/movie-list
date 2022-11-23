import { Route, Routes } from "react-router-dom";
import { QueryProvider } from "./context/QueryContext";

import Home from "./routes/Home";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
