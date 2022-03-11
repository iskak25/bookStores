import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvider from "./context/AuthContext";
import ProductContextProvider from "./context/ProductContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
          </ProductContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
