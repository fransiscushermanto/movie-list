import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { QueryProvider } from "./context/QueryContext";
import Detail from "./routes/Detail";

import Home from "./routes/Home";

function App() {
  return (
    <QueryProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:imdbID" element={<Detail />} />
        </Routes>
      </Layout>
    </QueryProvider>
  );
}

export default App;
