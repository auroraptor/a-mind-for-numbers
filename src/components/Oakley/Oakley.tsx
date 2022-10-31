import React from "react";

function Oakley() {
  return (
    <section className="techniques">
        <h2 className="section-title techniques__title section-title_place_techniques">Техники обучения</h2>
        <p className="section-subtitle">Пять практик от Барбары Оакли</p>
        <ul className="cards">
          <li className="cards__item">
            {/* <img className="cards__image" src="images/images_sprint-2/cards-attention.png" alt="в руках книга 101 эссеБ которые изменят ваше мышление." /> */}
            <h3 className="cards__title">Два вида внимания</h3>
            <p className="cards__description">Глубокие знания возникают, если чередовать сфокусированное и рассеянное мышление.</p>
          </li>
          <li className="cards__item">
            {/* <img className="cards__image" src="images/images_sprint-2/cards-recall.png" alt="голый мужчина курит, статуя." /> */}
            <h3 className="cards__title">Recall</h3>
            <p className="cards__description">Вспоминайте изученное — это позволит соединить разрозненные порции памяти.</p>
          </li>
          <li className="cards__item">
            {/* <img className="cards__image" src="images/images_sprint-2/cards-interliving.png" alt="внутри национального музея 11 сетрября -- фото ч/б." /> */}
            <h3 className="cards__title">Интерливинг</h3>
            <p className="cards__description">Изучайте несколько навыков одновременно, они обогащают друг друга.</p>
          </li>
          <li className="cards__item">
            {/* <img className="cards__image" src="images/images_sprint-2/cards-question.png" alt="иилюстрация мужчина принимает решение" /> */}
            <h3 className="cards__title">Вопросы</h3>
            <p className="cards__description">Слушая преподавателя, придумывайте хороший вопрос, который вас действительно волнует.</p>
          </li>
          <li className="cards__item">
            {/* <img className="cards__image" src="images/images_sprint-2/cards-competence.png" alt="стопка книг на руке" /> */}
            <h3 className="cards__title">Иллюзия компетентности</h3>
            <p className="cards__description">Повторите про себя, запишите, расскажите другу: вам только кажется, что вы владеете новой темой.</p>
          </li>
        </ul>
      </section>
  )
}

export default Oakley;
