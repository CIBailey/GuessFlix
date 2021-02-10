import { useState } from "react";

const useCountdown = () => {
  const [seconds, setSeconds] = useState(30);

  function subtractSeconds() {
    if (seconds > 0) {
      console.log(-1);
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      console.log("popup game over");
    }
  }

  return {
    seconds,
    subtractSeconds,
  };
};

export default useCountdown;
