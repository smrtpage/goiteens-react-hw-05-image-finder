// eslint-disable-next-line react/prop-types
function ImageGalleryItem({ webformatURL, id }) {
  return (
    <div>
      <li key={id} className="ImageGalleryItem">
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </li>
    </div>
  );
}
export default ImageGalleryItem;
