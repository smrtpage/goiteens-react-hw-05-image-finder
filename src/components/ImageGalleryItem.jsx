function ImageGalleryItem({ webformatURL, openModal, largeImageURL }) {
  return (
    <div>
      <li onClick={() => openModal(largeImageURL)} className="ImageGalleryItem">
        <img src={webformatURL} className="ImageGalleryItem-image" />
      </li>
    </div>
  );
}
export default ImageGalleryItem;
