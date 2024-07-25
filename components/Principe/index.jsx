import './principle.scss';
import { montserrat } from '../../constants';

const principles = [
  {title: 'Безопастность', description: 'Я за бережные изменения, которые будут проходить с комфортом для вас'},
  {title: 'Комфорт', description: 'Индивидуальный подход к каждому и использование комплексных методов'},
  {title: 'Удобство', description: 'Консультации в удобное для вас время и в подходящем формате'},
];

export default function Principle() {
  const baseClass = 'principle';

  return (
    <div className={baseClass} id='principle'>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__title ${montserrat.className}`}>Мой принцип работы</div>
        <div className={`${baseClass}__principles`}>
          {principles.map(({title, description}, index) => (
            <div key={index} className={`${baseClass}__block`}>
              <div className={`${baseClass}__block--title`}>{title}</div>
              <div className={`${baseClass}__block--desc`}>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
