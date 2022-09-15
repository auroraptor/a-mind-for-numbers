import React from "react";
import { Link, Route, Routes, useMatch } from "react-router-dom";
import Feynman from "./Feynman/Feynman";
import Kaufman from "./Kaufman/Kaufman";
import Oakley from "./Oakley/Oakley";

function Techniques() {
  const {path, url} = useMatch();
  console.log('hello useMatch', useMatch());

return (
  <>
  <ul>
    <li>
      <Link to={`${url}/oakley`}>Пять Практик Барбары Оакли</Link>
    </li>
    <li>
      <Link to={`${url}/feynman`}>Метод Фейнмана</Link>
    </li>
    <li>
     <Link to={`${url}/kaufman`}>Принципы обучения от Джоша Кауфмана</Link>
    </li>
  </ul>
  <Routes>
    <Route path={`${path}/oakley`} element={<Oakley />}></Route>
    <Route path={`${path}/feynman`} element={<Feynman />}></Route>
    <Route path={`${path}/kaufman`} element={<Kaufman />}></Route>
  </Routes>

  </>
)
}

export default Techniques;
