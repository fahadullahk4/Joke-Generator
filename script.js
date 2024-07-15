let btn = document.querySelector("button");
let joke = document.querySelector("h1");
let url =
	"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = async () => {
	const response = await fetch(url);
	const data = await response.json();
	joke.innerText = data.joke;
};

btn.addEventListener("click", getJoke);
