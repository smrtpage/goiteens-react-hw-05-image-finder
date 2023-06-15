import axios from "axios";

const APIKEY = "37137050-c58ffdd1382604ab03a37672a";

export function searchImages(query, page) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=1&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`,
      {
        params: {
          query,
          page,
        },
      }
    )
    .then((res) => res.data);
}
