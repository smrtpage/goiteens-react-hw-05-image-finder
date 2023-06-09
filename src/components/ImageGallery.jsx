import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ images }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({ webformatURL, id }) => (
          <ImageGalleryItem key={id} webformatURL={webformatURL} />
        ))}
      </ul>
    </div>
  );
}
export default ImageGallery;
