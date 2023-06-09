import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import "./App.css";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APIKEY = "37137050-c58ffdd1382604ab03a37672a";

  useEffect(() => {
    searchImages("");
  }, []);

  function searchImages(query) {
    setLoading(true);
    setError(null);
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`,
        {
          params: {
            query,
            page: 1,
            per_page: 12,
          },
        }
      )
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
      .then((res) => setImages(res.data.hits));
  }

  return (
    <div>
      <SearchBar onSearch={searchImages} />
      {error && <p>{error}</p>}
      <Loader visibility={loading} />
      <ImageGallery images={images} />
    </div>
  );
}
export default App;
