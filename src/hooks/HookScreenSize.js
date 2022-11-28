import { useState, useEffect } from "react";

const HookScreenSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  return { size };
};

export default useScreenSize;