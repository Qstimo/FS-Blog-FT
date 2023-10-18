import React from 'react';
import s from './valodationErrors.module.scss';
import { Link } from 'react-router-dom'
import Avatar from '../../Img/avatar';

type ValidationErrorType = {
  array: String[];
}

const ValidationErorrs: React.FC<ValidationErrorType> = ({ array }) => {
  return <>
    <ul className={s.error}>
      {array && array.map((error, i) =>
      (<li key={i}>
        {error}
      </li>)
      )}
    </ul>
  </>

};

export default ValidationErorrs;
