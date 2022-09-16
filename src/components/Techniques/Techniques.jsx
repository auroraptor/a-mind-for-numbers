import React from "react";
import { Link, Route, Routes,  useLocation} from "react-router-dom";
import Feynman from "./Feynman/Feynman";
import Kaufman from "./Kaufman/Kaufman";
import Oakley from "./Oakley/Oakley";

function Techniques() {
  const {pathname} = useLocation()
  console.log(pathname);

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
    <Route path={`oakley`} element={<Oakley />} />
    <Route path={`feynman`} element={<Feynman />} />
    <Route path={`kaufman`} element={<Kaufman />} />
  </Routes>

  </>
)
}

export default Techniques;
