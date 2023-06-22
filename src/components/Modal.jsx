import { useEffect } from "react";

function Modal({ largeImageURL, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
  function overlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function keydown(e) {
    if (e.code === "Escape") {
      onClose();
    }
  }
  return (
    <div>
      <div onClick={overlayClick} className="Overlay">
        <div className="Modal">
          <img src={largeImageURL} />
        </div>
      </div>
    </div>
  );
}
export default Modal;
