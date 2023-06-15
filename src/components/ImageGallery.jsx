import ImageGalleryItem from "./ImageGalleryItem";

function ImageGallery({ images, onOpen }) {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(({ webformatURL, id, largeImageURL }) => (
          <ImageGalleryItem
            openModal={onOpen}
            largeImageURL={largeImageURL}
            key={id}
            webformatURL={webformatURL}
          />
        ))}
      </ul>
    </div>
  );
}
export default ImageGallery;
