'use client';

import { IconCloseComponent, IconMenuComponent } from '../../public/icons';
import './header.scss';
import logo from '../../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Header() {
  const baseClass = 'header';
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  useEffect(() => {
    if (!show) return;
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        handleClose(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <header className={baseClass}>
      <div className={`${baseClass}__container`}>
        <div
          className={`${baseClass}__logo`}
          onClick={scrollToTop}
        >
          <Link href={'/'}>
            <Image
              src={logo}
              alt={'logo'}
              priority
            />
          </Link>
        </div>
        <div className={`${baseClass}__sidebar`}>
          <div>
            <Link href={'/#about'}>Обо мне</Link>
          </div>
          <div>
            <Link href={'/#requests'}>С кем работаю</Link>
          </div>
          <div>
            <Link href={'/#pricing'}>Стоимость</Link>
          </div>
          <div>
            <Link href={'/#paymentMethod'}>Способ оплаты</Link>
          </div>
          <div>
            <Link href={{ pathname: '/offerta' }}>Публичный договор</Link>
          </div>
        </div>
        <div
          className={`${baseClass}__menu`}
          onClick={!show ? handleShow : handleClose}
        >
          {!show ? <IconMenuComponent /> : <IconCloseComponent />}
          {show && (
            <div
              className={`${baseClass}__modal`}
              ref={containerRef}
            >
              <div className={`${baseClass}__modal--container`}>
                <div>
                  <Link href={'/#about'}>Обо мне</Link>
                </div>
                <div>
                  <Link href={'/#requests'}>С кем работаю</Link>
                </div>
                <div>
                  <Link href={'/#pricing'}>Стоимость</Link>
                </div>
                <div>
                  <Link href={'/#paymentMethod'}>Способ оплаты</Link>
                </div>
                <div>
                  <Link href={{ pathname: '/offerta' }}>Публичный договор</Link>
                </div>
                <div>
                  <Link href={{ pathname: '/privacy' }}>Политика конфедициальности</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
