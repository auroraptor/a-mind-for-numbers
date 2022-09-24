import React from "react";
import { Link, Outlet} from "react-router-dom";
import Feynman from "../Feynman/Feynman";
import Kaufman from "../Kaufman/Kaufman";
import Oakley from "../Oakley/Oakley";
import './Techniques.css'

function Techniques() {

return (
  <div className='techniques'>
      <div className="container">
        <div className="item title">Главные проблемы в&nbsp;обучении</div>
        <div className="item text">
          <p className="paragraph">Ни в школе, ни в институте нас не учат тому, как правильно изучать материал. Мы готовимся к экзаменам и учим билеты. Мы тренируемся решать однообразные задачи, чтобы лучше сдать тест, но часто в итоге это не дает нам реального знания. Зубрежка быстро выветривается и не приносит пользы.</p>
          <p className="paragraph"><span className="span-accent">Вывод:</span> учиться тоже нужно уметь, но почему-то этому мало где учат. Что с этим делать?
          </p>
          <p className="paragraph">Конкретные техники и упражнения помогают изменить подход к обучению, сделать его эффективным и захватывающим. Эти же техники применяются на примере обучения в Практикуме.</p>
        </div>
      </div>
    <ul className="links">
      <li>
        <Link to='feynman'>Метод Ричарда Фейнмана  </Link>
      </li>
      <li>
        <Link to='oakley'>Пять практик Барбары Оакли</Link>
      </li>
      <li>
       <Link to='kaufman'>Принципы обучения от Джоша Кауфмана</Link>
      </li>
    </ul>
    <Outlet></Outlet>
  </div>
)
}

export default Techniques;
