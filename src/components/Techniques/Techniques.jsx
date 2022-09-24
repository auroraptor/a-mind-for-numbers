import React from "react";
import { Link, Route, Routes} from "react-router-dom";
import Feynman from "../Feynman/Feynman";
import Kaufman from "../Kaufman/Kaufman";
import Oakley from "../Oakley/Oakley";

function Techniques() {

return (
  <>
  <ul>
    <li>
      <Link to={`/techniques/oakley`}>Пять Практик Барбары Оакли</Link>
    </li>
    <li>
      <Link to={`/techniques/feynman`}>Метод Фейнмана</Link>
    </li>
    <li>
     <Link to={`/techniques/kaufman`}>Принципы обучения от Джоша Кауфмана</Link>
    </li>
  </ul>
  <Routes>
    <Route element={<Oakley />} path="oakley"/>
    <Route element={<Feynman />} path="feynman"/>
    <Route element={<Kaufman />} path="kaufman"/>
  </Routes>

  </>
)
}

export default Techniques;
