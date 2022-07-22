let elList = document.querySelector(".list");



function renderMovies(array) {
    elList.innerHTML = null

    for (let item of array) {
        let newLi = document.createElement("li");
        newLi.classList.add("movies");
        let newImg = document.createElement("img");
        newImg.src = item.ImageURL;
        newImg.setAttribute("alt", "movie")

        let newH3 = document.createElement("h3");
        newH3.textContent = item.Title;

        let newh4 = document.createElement("h4")
        newh4.innerHTML = `Year: ${item.movie_year} `;

        let newRate = document.createElement("h5");
        newRate.innerHTML = `Rate ${item.imdb_rating}<img src="./images/star.png" alt="movie" width="10" class="img" >`; 
        newLi.appendChild(newImg);
        newLi.appendChild(newH3);
        newLi.appendChild(newh4);
        newLi.appendChild(newRate);
        elList.appendChild(newLi)

    }
}

renderMovies(movies)