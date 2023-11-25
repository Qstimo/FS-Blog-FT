import { Outlet } from 'react-router-dom';
import s from './firstPage.module.scss'
import { ParticlesContainer } from '../../Ui/ParticlesContainer/ParticlesContainer';



const MainLayout: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <div className="content_center"> <Outlet /></div>
        </div>
    );
};

export default MainLayout;
