import { useState, useEffect, useRef } from "react";

const useClickOutside = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const clickOutsideHandler = (event) => {
    console.log(ref.current);
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(!isVisible);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler, !isVisible);

    return () => {
      document.removeEventListener("click", clickOutsideHandler, !isVisible);
    };
  });

  return { ref, isVisible, setIsVisible };
};

export default useClickOutside;
