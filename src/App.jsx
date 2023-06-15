import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { searchImages } from "./services/imageService";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(0);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    if (query === "") {
      return;
    }
    setLoading(true);
    setError(null);
    searchImages(query, page)
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data.hits]);
        setPagesCount(Math.ceil(data.totalHits / 12));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, [images, page]);

  function openModal(largeImageURL) {
    setActiveImage(largeImageURL);
  }

  function closeModal() {
    setActiveImage(null);
  }

  function search(newQuery) {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  return (
    <div>
      {activeImage && (
        <Modal largeImageURL={activeImage} onClose={closeModal} />
      )}
      <SearchBar onSearch={search} />
      {error && <p>{error}</p>}
      <Loader visibility={loading} />
      <ImageGallery images={images} onOpen={openModal} />
      {page < pagesCount && !error && <Button onClick={loadMore} />}
    </div>
  );
}
export default App;
