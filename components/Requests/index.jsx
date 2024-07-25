import './requests.scss';
import { montserrat } from '../../constants';

export default function Requests() {
  const baseClass = 'requests';
  const principles = [
    {title: '01', description: 'Самооценка, любовь к себе'},
    {title: '02', description: 'Отношения (С родителями, детьми, партнёром)'},
    {title: '03', description: 'Кризисные состояния (развод, потеря близкого, насилие)'},
    {title: '04', description: 'Панические атаки, тревожные состояния , страхи'},
    {title: '05', description: 'Эмоциональное выгорание, депрессивные состояния'},
    {title: '06', description: 'Зависимости (алкогольная, игровая и не только)'},
    {title: '07', description: 'Пищевое поведение, психосоматика'},
  ];

  return (
    <div className={baseClass} id='requests'>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__title ${montserrat.className}`}>Запросы, с которыми я работаю</div>
        <div className={`${baseClass}__principles`}>
          {principles.map(({title, description}, index) => (
            <div key={index} className={`${baseClass}__block`}>
              <div className={`${baseClass}__block--title`}>
                <div className={`${baseClass}__block--title--container`}>{title}</div>
              </div>
              <div className={`${baseClass}__block--desc`}>{description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
