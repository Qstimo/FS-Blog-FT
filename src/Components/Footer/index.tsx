import React from 'react';
import s from './footer.module.scss';
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return <div className={s.root}>
    <div className={s.footer}>
      <ul className={s.navbar}>
        <li>

        </li>
        <li>

        </li>

      </ul>
      <p className={s.text}>ООО “Запрещённая организация” 2023. Все права никогда не соблюдались</p>
    </div>
  </div>;
}

export default Footer;
