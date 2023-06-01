const data = [
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Dr.Strange",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages2.fanpop.com%2Fimages%2Fphotos%2F8400000%2FMovie-Posters-movies-8405245-1224-1773.jpg&f=1&nofb=1&ipt=54cf999f38f888f2fe078f3246b8cf71bb0040962ba2fa6100b521fa49db2fda&ipo=images",
    title: "Pirates",
    rating: 5,
  },
  {
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.slashfilm.com%2Fwp%2Fwp-content%2Fimages%2F2017-bestposter-justiceleague.jpg&f=1&nofb=1&ipt=ff9044a671a22c410b90e61b36ecdfcbff5766a579d7533aebfbeaac9f97a062&ipo=images",
    title: "Pirates",
    rating: 5,
  },
];

const movieBox = document.getElementById("show_movies");

data.forEach((el) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = el.image;
  const movieTitle = document.createElement("h3");
  movieTitle.innerText = `Movie :- ${el.title}`;
  const rating = document.createElement("p");
  rating.innerText = `Rating :- ${el.rating}`;
  const button = document.createElement("button");
  button.innerText = "Click Movie";
  button.addEventListener("click", () => {
    alert(`You clicked on ${el.title}`);
  });
  div.append(image, movieTitle, rating, button);
  movieBox.append(div);
});

// for (let i = 0; i < data.length; i++) {
//   const div = document.createElement("div");
//   const image = document.createElement("img");
//   image.src = data[i].image;
//   const movieTitle = document.createElement("h3");
//   movieTitle.innerText = data[i].title;
//   const rating = document.createElement("p");
//   rating.innerText = data[i].rating;
//   div.append(image, movieTitle, rating);
//   movieBox.append(div);
// }
