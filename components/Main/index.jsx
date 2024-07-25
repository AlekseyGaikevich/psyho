import './main.scss';
import Image from 'next/image';
import personFirst from '../../public/personFirst.png';
import Button from '../ui/Button';
import { links, montserrat } from '../../constants';;

export default function Main() {
  const baseClass = 'main';
  const { tg } = links;


  return (
    <main className={`${baseClass} ${montserrat.className}`}>
      <div className={`${baseClass}__container`}>
        <div className={`${baseClass}__container__desc`}>
          <div className={`${baseClass}__container__desc__head`}>
            Проффесиональная психотерапевтическая поддержка
          </div>
          <div className={`${baseClass}__container__desc__mid`}>
            Бережно, с уважением и эмпатией
          </div>
          <a href={tg} target={'_blank'}>
            <Button position={'main'}>
              Связаться со мной
            </Button>
          </a>
        </div>
        <div className={`${baseClass}__container__image`}>
          <Image
            src={personFirst}
            alt={'personFirst'}
            priority
          />
        </div>
      </div>
    </main>
  );
}
