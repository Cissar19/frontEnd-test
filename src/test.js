async function getNews() {
  let respuesta = await fetch(
    "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0"
  );
  let news = await respuesta.json();
  console.log(news);
}

getNews();
