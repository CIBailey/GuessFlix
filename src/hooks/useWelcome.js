import { useState } from "react";

const useWelcome = () => {
  const [isShowing, setIsShowing] = useState(true);

  function toggle() {
    setIsShowing(false);
  }

  return {
    isShowing,
    toggle,
  };
};

export default useWelcome;
