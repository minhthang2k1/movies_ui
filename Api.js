const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "76e8b0f837mshefdf2a3f9445f2bp119f11jsnd9f955443810",
    "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
  },
};

fetch(
  "https://streaming-availability.p.rapidapi.com/search/basic?country=vn&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
