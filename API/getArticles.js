//import { API_ENDPOINT } from "API/endpoint.js";

const getArticles = async () => {
  const response = await fetch(`/articles`);
  return response.json();
};


getArticles().then(data => console.log(data))

export { getArticles }
