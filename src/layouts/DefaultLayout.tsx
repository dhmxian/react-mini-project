import { Outlet } from "react-router-dom"; 
import Footer from "../components/Footer";   
import Navigation2 from '../components/Navigation2';

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Navigation2 />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-4 overflow-auto">
            <Outlet /> 
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;