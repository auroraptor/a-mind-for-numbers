import { useState, useEffect } from "react";

interface Window {
  width: number;
  height: number;
}

function useWindowSize() {
  let windowSize: Window;
  let setWindowSize: any;

  [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowSize]);
  return windowSize;
}

export default useWindowSize;
