// src/components/theme/index.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';

import { selectTheme, set } from './slice';
import styles from './theme.module.scss';

const Theme: React.FC = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => dispatch(set(theme === 'dark' ? 'light' : 'dark'));

  return (
    <div
      className={cn(styles.root, theme === 'dark' ? styles.dark : styles.light)}
      onClick={handleChange}
    />
  );
};

export default Theme;
