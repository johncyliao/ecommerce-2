import { useEffect, useState } from "react";
import "../styles/ToTopBtn.css"
import {BsFillArrowUpCircleFill} from "react-icons/bs"

const ToTopBtn = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <div onClick={scrollToTop}>
          <BsFillArrowUpCircleFill className="back-to-top" />
        </div>
      )}
    </>
  );
};

export default ToTopBtn;