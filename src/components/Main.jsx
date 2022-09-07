import React from "react";
import '../index.css';

function Main() {
  const title1 = 'aaa';
  const title2 = 'bbb';

  return (
<div className="root">
    <main className="content">
      <section className="description" aria-label="Секция со статьей">
        <article className="two-columns">
          <h2 className="two-columns__brief">Главные проблемы в&nbsp;обучении</h2>
          <div className="two-columns__main-text">
            <p className="two-columns__paragraph">Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не дает нам реального знания. Зубрежка быстро выветривается и не приносит пользы.</p>
            <p className="two-columns__paragraph"><span className="two-columns__span-accent">Вывод:</span> учиться тоже нужно уметь, но почему-то этому мало где учат. Что с этим делать?
            </p>
            <p className="two-columns__paragraph">Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и захватывающим. Эти же техники применяются на примере обучения в Практикуме.</p>
          </div>
        </article>
      </section>
      <section className="techniques">
        <h2 className="section-title techniques__title section-title_place_techniques">Техники обучения</h2>
        <p className="section-subtitle">Пять практик от Барбары Оакли</p>
        <ul className="cards">
          <li className="cards__item">
            <img className="cards__image" src="images/images_sprint-2/cards-attention.png" alt="в руках книга 101 эссеБ которые изменят ваше мышление." />
            <h3 className="cards__title">Два вида внимания</h3>
            <p className="cards__description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
          </li>
          <li className="cards__item">
            <img className="cards__image" src="images/images_sprint-2/cards-recall.png" alt="голый мужчина курит, статуя." />
            <h3 className="cards__title">Recall</h3>
            <p className="cards__description">Вспоминайте изученное — это позволит соединить разрозненные порции памяти.</p>
          </li>
          <li className="cards__item">
            <img className="cards__image" src="images/images_sprint-2/cards-interliving.png" alt="внутри национального музея 11 сетрября -- фото ч/б." />
            <h3 className="cards__title">Интерливинг</h3>
            <p className="cards__description">Изучайте несколько навыков одновременно, они обогащают друг друга.</p>
          </li>
          <li className="cards__item">
            <img className="cards__image" src="images/images_sprint-2/cards-question.png" alt="иилюстрация мужчина принимает решение" />
            <h3 className="cards__title">Вопросы</h3>
            <p className="cards__description">Слушая преподавателя, придумывайте хороший вопрос, который вас действительно волнует.</p>
          </li>
          <li className="cards__item">
            <img className="cards__image" src="images/images_sprint-2/cards-competence.png" alt="стопка книг на руке" />
            <h3 className="cards__title">Иллюзия компетентности</h3>
            <p className="cards__description">Повторите про себя, запишите, расскажите другу: вам только кажется, что вы владеете новой темой.</p>
          </li>
        </ul>
      </section>
      <section className="video">
        <h2 className="section-title">Видео нa TED</h2>
        <p className="section-subtitle">Для тех, кто любит прокрастинировать</p>
        <ul className="video__iframes">
          <li><iframe key={1} title={title1} className="video__iframe" src="https://www.youtube.com/embed/arj7oStGLkU"></iframe></li>
          <li><iframe key={2} title={title2} lassName="video__iframe" src="https://www.youtube.com/embed/5MgBikgcWnY"></iframe></li>
        </ul>
      </section>
      <section className="oakley" aria-label="Секция со статьей">
        <article className="two-columns">
          <h2 className="two-columns__brief">История Барбары Оакли.</h2>
          <div className="two-columns__main-text">
            <p className="two-columns__paragraph">С детства Барбаре не давалась математика. Она считала себя законченным гуманитарием, причём далеко не самым умным. В армии она изучала русский язык, чтобы получить надбавку, да так успешно, что её выдвинули в командиры. Но для продвижения по службе нужно было сдавать математику. И тогда Барбара придумала свой подход к точным наукам. Оказалось, если вам что-то «плохо даётся», ваши добытые трудом знания гораздо глубже, чем у тех, кому всё ясно с первого взгляда.</p>
          </div>
        </article>
      </section>
      <section className="feynman">
        <h2 className="feynman__title">Метод Фейнмана</h2>
        <p className="feynman__subtitle">Выучить и не забыть.</p>
        <a className="feynman__link" href="https://medium.com/bazanov-org/метод-обучения-фейнмана-6abe6915ef8a">Подробнее  &#8594;</a>
      </section>
      <section className="digits">
        <h2 className="section-title">Цифры и факты</h2>
        <p className="section-subtitle">Про учёбу и мозг</p>
        <ul className="table">
          <li className="table__cell">
            <h3 className="table__heading">86 миллиардов</h3>
            <p className="table__text">Число нейронов в мозге человека</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">2.1 миллиарда</h3>
            <p className="table__text">Число нуждающихся в повышении квалификации</p>
            <p className="table__text">Всемирный Банк, 2017</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">1000 терабайт</h3>
            <p className="table__text">Объём памяти человека</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">500 триллионов</h3>
            <p className="table__text">Число ответственных за обучение нервных синапсов у взрослого человека</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">420 миллионов</h3>
            <p className="table__text">Число взрослых людей моложе 25 лет, не имеющих образования для трудоустройства</p>
            <p className="table__text">Всемирный Банк, 2017</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">17–20 лет</h3>
            <p className="table__text">Пик обучаемости</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">1885 год</h3>
            <p className="table__text">Открытие кривой забывания</p>
          </li>
          <li className="table__cell">
            <h3 className="table__heading">1889 год</h3>
            <p className="table__text">Открытие условного рефлекса</p>
          </li>
        </ul>
      </section>
      <section className="khan">
        <div className="khan__container">
          <p className="khan__author">Салман Хан</p>
          <h2 className="khan__title">Весь мир — школа</h2>
          <blockquote className="khan__quote">Страсть и новаторство Сала Хана меняют процесс обучения миллионов студентов по всему миру. Книгу «Весь мир — школа» нужно прочитать всем, кто занимается образованием — так учащиеся повсюду смогут получить навыки и знания, которые приносят успех в школе, карьере и жизни.</blockquote>
          <h3 className="khan__quote-author">Джордж Лукас</h3>
          <p className="khan__quote-author-subline">Кинорежиссер, продюсер</p>
          <div className="khan__book-container">
            <div className="khan__book-pic"></div>
            <a className="khan__buy-link" href="https://www.ozon.ru/product/ves-mir-shkola-preobrazovannoe-obrazovanie-162999126/?sh=zlLdDxvw-Q">Купить книгу &#8594;</a>
          </div>
        </div>
      </section>
      <section className="kaufman">
        <h4 className="section-title section-title_theme_dark">Принципы обучения</h4>
        <p className="section-subtitle section-subtitle_theme_dark">от Джоша Кауфмана</p>
        <ul className="table table_theme_dark">
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">1</h3>
            <p className="table__text table__text_theme_dark">Выберите привлекательный проект.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">2</h3>
            <p className="table__text table__text_theme_dark">Сосредоточьтесь на каком-то одном навыке.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">3</h3>
            <p className="table__text table__text_theme_dark">Определите целевой уровень мастерства.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">4</h3>
            <p className="table__text table__text_theme_dark">Разбейте навык на элементы.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">5</h3>
            <p className="table__text table__text_theme_dark">Приготовьте всё необходимое для занятий.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">6</h3>
            <p className="table__text table__text_theme_dark">Устраните препятствия для занятий.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">7</h3>
            <p className="table__text table__text_theme_dark">Выделите специальное время для занятий.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">8</h3>
            <p className="table__text table__text_theme_dark">Создайте быстрые петли обратной связи.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">9</h3>
            <p className="table__text table__text_theme_dark">Занимайтесь по расписанию, короткими интенсивными интервалами.</p>
          </li>
          <li className="table__cell table__cell_theme_dark">
            <h3 className="table__heading table__heading_theme_dark">10</h3>
            <p className="table__text table__text_theme_dark">Уделяйте внимание количеству и скорости.</p>
          </li>
        </ul>
        <div className="kaufman__triangle rotation"></div>
      </section>
      <section className="resources">
        <h2 className="section-title">Полезные ресурсы</h2>
        <p className="section-subtitle">Больше материалов о техниках и лайфхаках обучения</p>
        <ul className="resources__logo-zone">
          <li><a href="https://arzamas.academy/">
            <img className="resources__logo" src="images/images_sprint-2/logo/resources-arzamas.svg" alt="Arzamas, логотип." />
          </a></li>
          <li><a href="https://nplus1.ru/">
            <img className="resources__logo" src="images/images_sprint-2/logo/resources-n1.svg" alt="N+1, логотип." />
          </a></li>
          <li><a href="https://strelka.com/ru/">
            <img className="resources__logo" src="images/images_sprint-2/logo/resources-strelka.svg" alt="Strelka, логотип." />
          </a></li>
          <li><a href="https://polka.academy/">
            <img className="resources__logo" src="images/images_sprint-2/logo/resources-polka.svg" alt="Полка, логотип." />
          </a></li>
        </ul>
      </section>
    </main>

  </div>
  )
}

export default Main
