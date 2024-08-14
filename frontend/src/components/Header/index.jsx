import React, { useEffect, useRef, useState } from 'react';
import { IconCloseComponent, IconMenuComponent } from '../../icons';
import './header.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const baseClass = 'header';
  const [show, setShow] = useState(false);
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
        <div className={`${baseClass}__logo`} onClick={scrollToTop}>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={`${baseClass}__sidebar`}>
          <div>
            <a href={'/#about'}>Обо мне</a>
          </div>
          <div>
            <a href={'/#requests'}>С кем работаю</a>
          </div>
          <div>
            <a href={'/#pricing'}>Стоимость</a>
          </div>
          <div>
            <a href={'/#paymentMethod'}>Способ оплаты</a>
          </div>
          <div>
            <Link to={'/offerta'}>Публичный договор</Link>
          </div>
        </div>
        <div className={`${baseClass}__menu`} onClick={!show ? handleShow : handleClose}>
          {!show ? <IconMenuComponent /> : <IconCloseComponent />}
          {show && (
            <div className={`${baseClass}__modal`} ref={containerRef}>
              <div className={`${baseClass}__modal--container`}>
                <div>
                  <a href={'/#about'}>Обо мне</a>
                </div>
                <div>
                  <a href={'/#requests'}>С кем работаю</a>
                </div>
                <div>
                  <a href={'/#pricing'}>Стоимость</a>
                </div>
                <div>
                  <a href={'/#paymentMethod'}>Способ оплаты</a>
                </div>
                <div>
                  <Link to={'/offerta'}>Публичный договор</Link>
                </div>
                <div>
                  <Link to={'/privacy'}>Политика конфиденциальности</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
