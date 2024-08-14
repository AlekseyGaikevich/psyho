import React from 'react';
import './main.scss';
import personFirst from '../../assets/personFirst.png';
import Button from '../ui/Button';
import { links } from '../../constants';;

export default function Main() {
  const baseClass = 'main';
  const { tg } = links;


  return (
    <main className={`${baseClass} montserrat`}>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__container__desc`}>
          <div className={`${baseClass}__container__desc__head`}>
            Проффесиональная психотерапевтическая поддержка
          </div>
          <div className={`${baseClass}__container__desc__mid`}>
            Бережно, с уважением и эмпатией
          </div>
          <a href={tg} target={'_blank'}>
            <Button position={'call'}>
              Связаться со мной
            </Button>
          </a>
        </div>
        <div className={`${baseClass}__container__image`}>
          <img
            src={personFirst}
            alt={'personFirst'}
          />
        </div>
      </div>
    </main>
  );
}
