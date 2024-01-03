import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content_center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
