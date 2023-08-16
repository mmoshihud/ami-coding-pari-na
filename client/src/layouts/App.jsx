import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
