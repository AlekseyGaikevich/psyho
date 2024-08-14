import React from 'react';
import './about.scss';
import Button from '../ui/Button';
import personalSec from '../../assets/personalSec.png';
import { links } from '../../constants';

const { tel, tg, viber } = links;
const buttons = [
  { title: 'Telegram', link: tg, target: '_black' },
  { title: 'Viber', link: viber, target: '_self' },
  { title: 'Позвонить мне', link: `tel:${tel}`, target: '_self' },
];

export default function About() {
  const baseClass = 'about';

  return (
    <div className={baseClass} id='about'>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__title montserrat`}>Давайте познакомимся</div>
        <div className={`${baseClass}__block_about`}>
          <div className={`${baseClass}__block_img`}>
          <img
              src={personalSec}
              alt={'personFirst'}
              width={410}
            />
          </div>
          <div className={`${baseClass}__block_desc`}>
            <div className={`${baseClass}__block_desc--text`}>
              <span>Приветствую вас на моей страничке.</span>
              <span>Меня зовут Светлана. </span>
              <span>Я — дипломированный врач-психиатр-нарколог, психотерапевт.</span>
            </div>
            <div className={`${baseClass}__block_desc--desc`}>
              <span>
                Еще в студенческие годы влюбилась в психотерапию, поэтому выбрала ее, как основной вид своей дальнейшей деятельности.
  Занимаюсь частной психотерапевтической практикой. Консультирую онлайн и очно (г. Минск)
              </span>
            </div>
          </div>
        </div>
        <div className={`${baseClass}__block_list`}>
          <div className={`${baseClass}__block_list--title`}>Факты обо мне </div>
          <div className={`${baseClass}__block_list--list`}>
            <span>1. Окончила медико-психологический факультет ГрГМУ</span>
            <span>2. Являюсь действующим врачом - психотерапевтом</span>
            <span>3. За плечами огромное количество дополнительных образовательных курсов и семинаров</span>
            <span>4. Имею дополнительное последипломное образование с международной сертификацией
              (бодинамика, терапия травмы развития)</span>
            <span>5. Активно продолжаю обучение на сегодняшний день</span>
          </div>
        </div>
        <div className={`${baseClass}__blockBtn`}>
          {buttons.map(({ title, link, target }, index) => (
            <a key={index} href={link} target={target}>
              <Button position={'aboutBtn'}>
                {title}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
