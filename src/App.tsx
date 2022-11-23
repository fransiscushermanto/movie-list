import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { QueryProvider } from "./context/QueryContext";

import Home from "./routes/Home";

function App() {
  return (
    <QueryProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </QueryProvider>
  );
}

export default App;
