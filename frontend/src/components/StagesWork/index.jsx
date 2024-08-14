import React from 'react';
import './stagesWork.scss';

const blocks = [
  {
    title: 'Свяжитесь со мной',
    description: 'Используйте любой удобным вам мессенджер или позвоните по телефону',
  },
  {
    title: 'Дождитесь подтверждения',
    description: 'Дождитесь подтверждения даты, времени и формы консультации',
  },
  {
    title: 'Оплата и встреча',
    description: 'Вы заранее оплачиваете консультацию удобным вам способом и приходите на встречу в назначенное время',
  },
];

export default function StagesWork() {
  const baseClass = 'stagesWork';

  return (
    <div className={baseClass} id='stagesWork'>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__title montserrat`}>Этапы работы</div>
        <div className={`${baseClass}__block`}>
          {blocks.map(({title, description}, index) => (
            <div key={index} className={`${baseClass}__block--container`}>
              <div className={`${baseClass}__block--label`}>{index + 1}</div>
              <div className={`${baseClass}__block--title`}>{title}</div>
              <div className={`${baseClass}__block--desc`}>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
