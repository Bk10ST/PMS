import { useEffect, useState } from "react";

const useDashHook = () => {
  const [hideTopBar, setHideTopBar] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 699) {
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleButton = () => {
    setToggleBtn(!toggleBtn);
  };

  return { hideTopBar, toggleButton, toggleBtn };
};

export default useDashHook;

