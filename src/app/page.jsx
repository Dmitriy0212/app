"use client"
import React, { useEffect, useState } from 'react';
import UserAuth from './user/page'

export default function User() {
  const [shou, setShou] = useState(false);
  function clickHandlerClick() {
    if (shou === true) {
      setShou(false)
    }
    else {
      setShou(true)
    }
  }
  return (
    <>
      <button onClick={clickHandlerClick}>Войти</button>
      {shou === true ?
        <UserAuth func={clickHandlerClick} /> :
        <></>
      }
    </>
  );
}
