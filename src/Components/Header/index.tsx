import React from 'react';
import s from './header.module.scss';
import { Link, useLocation } from 'react-router-dom'

import Theme from '../theme';
import UserBar from '../UserBar';
import { useDispatch, useSelector } from 'react-redux';
import { searchPosts, selectSearch } from '../../Slice/slices/filter/filterSlice';
import debounce from 'lodash.debounce'
import { useAppDispatch } from '../../Slice/store';
import { HomeSvg, SearchSvg } from '../../Img/svg';

const Header: React.FC = () => {
  const [searchOn, selectSearchOn] = React.useState(false)
  const [value, setValue] = React.useState('')
  const search = useSelector(selectSearch);
  const dispatch = useAppDispatch();
  React.useEffect(() => {

  }, [value])

  const changeSearchDebounce = React.useCallback((
    debounce((str: string) => {
      dispatch(searchPosts(str));
    }, 400)
  ), [])
  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ev = e.target.value;
    setValue(ev);
    changeSearchDebounce(ev);
  }
  const { pathname } = useLocation();



  return <div className={s.root}>
    <div className={s.header}>

      <ul className={s.navbar}>
        <li>
          <Theme />
        </li>
        <li>
          <Link to={'/'} className={s.homeIconContainer}>
            <span>Главная</span>
            <span><HomeSvg /></span>
          </Link>
        </li>

        {pathname === '/' &&
          <li className={s.searchContainer} >
            <div onClick={() => selectSearchOn(!searchOn)}> <span>
              Поиск
            </span>
              {!searchOn && <span className={s.searchSvg}><SearchSvg /></span>}
            </div>
            {searchOn && <input value={value} onChange={changeSearch} onBlur={() => selectSearchOn(false)} className={s.search} type="text" />}
          </li>}
      </ul>
      <UserBar />
    </div>
    {pathname === '/' &&
      <div className={s.searchMobile}>
        <li className={s.searchContainer} >
          <div onClick={() => selectSearchOn(!searchOn)}> <span>
            Поиск
          </span>
            {!searchOn && <span className={s.searchSvg}><SearchSvg /></span>}
          </div>
          {searchOn && <input value={value} onChange={changeSearch} onBlur={() => selectSearchOn(false)} className={s.search} type="text" />}
        </li>
      </div>}
  </div>
};

export default Header;
