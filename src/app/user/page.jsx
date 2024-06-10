"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react';

export default function User() {
  const [appState, setAppState] = useState('');
  useEffect(() => {
    setAppState('10')
    
}, [setAppState]);
  return (
    <>
      <Link href="/">Глваная</Link>
      <div>{appState}</div>
    </>
  );
}