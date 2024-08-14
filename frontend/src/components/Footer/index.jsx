import React from 'react';
import './footer.scss';
import logo from '../../assets/logo.png';
import { IconInstComponent, IconPhoneComponent, IconTgComponent, IconViberComponent } from '../../icons';
import { links } from '../../constants';

export default function Footer() {
  const baseClass = 'footer';
  const { tel, tg, viber, instagram } = links;

  return (
    <footer className={baseClass}>
      <div className={`${baseClass}__container`}>
      <div
          className={`${baseClass}__logo`}
        >
          <img
            src={logo}
            alt={'logo'}
          />
        </div>
        <div className={`${baseClass}__top`}>
          <div className={`${baseClass}__top--name`}>
            ИП ЧЕРНОБАЕВА СВЕТЛАНА СЕРГЕЕВНА
          </div>
          <div className={`${baseClass}__top--info`}>УНП:291822011<br />
            Текущий (расчетный) счет BY 71MTBK30130001093300079726 в BYN
            в ЗАО “МТБанк”
            БИК MTBKBY22<br />
            Назначение – оплата услуг (психологическая консультация) согласно
            публичного договора оферты
          </div>
        </div>
        <div className={`${baseClass}__bottom`}>
          <div className={`${baseClass}__icons`}>
            <a href={`tel:${tel}`}>
              <IconPhoneComponent />
            </a>
            <a href={instagram} target={'_blank'}>
              <IconInstComponent />
            </a>
            <a href={tg} target={'_blank'}>
              <IconTgComponent />
            </a>
            <a href={viber}>
              <IconViberComponent />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
