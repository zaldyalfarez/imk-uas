import { useEffect } from "react";

const OverflowHidden = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export default OverflowHidden;
