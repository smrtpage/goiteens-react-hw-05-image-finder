function Modal({ largeImageURL, onClose }) {
  return (
    <div>
      <div onClick={onClose} onKeyDown={onClose} className="Overlay">
        <div className="Modal">
          <img onKeyDown={onClose} src={largeImageURL} />
        </div>
      </div>
    </div>
  );
}
export default Modal;
