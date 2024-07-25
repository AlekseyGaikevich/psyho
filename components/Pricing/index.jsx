import './pricing.scss';
import { IconManComponent, IconWatchComponent } from '../../public/icons';
import Button from '../ui/Button';
import { links, montserrat } from '../../constants';

const blocks = [
  {
    title: 'Индивидуальная консультация',
    description: 'Индивидуальная сессия в удобном для вас месте (очно или онлайн)',
    duration: 'Продолжительность 60 минут',
    price: 'Стоимость 100 бел.руб.',
  },
  {
    title: 'Семейная (парная) консультация',
    description: 'Индивидуальная сессия в удобном для вас месте (очно или онлайн)',
    duration: 'Продолжительность 90 минут',
    price: 'Стоимость 150 бел.руб.',
  },
  {
    title: 'Групповая консультация',
    description: 'Функционирует при наборе достаточного количества участников',
    duration: 'Продолжительность 120 минут',
    price: 'Стоимость от 50 бел.руб.',
  },
];

export default function Pricing() {
  const baseClass = 'pricing';
  const { tg } = links;

  return (
    <div className={baseClass} id='pricing'>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__title ${montserrat.className}`}>Стоимость консультаций</div>
        <div className={`${baseClass}__block--container`}>
          {blocks.map(({ title, description, duration, price }, index) => (
            <div key={index} className={`${baseClass}__block`}>
              <div className={`${baseClass}__block--top`}>
                <div className={`${baseClass}__block--title`}>{title}</div>
                <div className={`${baseClass}__block--description`}>
                  <div className={`${baseClass}__block--icon`}>
                    <IconManComponent />
                  </div>
                  <div>{description}</div>
                </div>
                <div className={`${baseClass}__block--duration`}>
                  <div className={`${baseClass}__block--icon`}>
                    <IconWatchComponent />
                  </div>
                  <div>{duration}</div>
                </div>
                <div className={`${baseClass}__block--price`}>{price}</div>
              </div>
              <div className={`${baseClass}__block--bottom`}>
                <a href={tg} target={'_blank'}>
                  <Button key={index} position={'aboutBtn'}>
                    Записаться
                  </Button>
                </a>
              </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
}
