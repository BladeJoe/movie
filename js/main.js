let elMovieWrapper = document.querySelector(".movie__wrapper");
let elTemplate = document.querySelector("#movie_card").content;
let elTotal = document.querySelector(".total");
let elList = document.querySelector(".movie__wrapper");
let elForm = document.querySelector(".form ");
let elSearch = document.querySelector("#SearchBySearch");
let elRating = document.querySelector("#searchByRating");
let elYear = document.querySelector("#searchByYear");
let elSelectCategories = document.querySelector(".select__categories");


let moviesArray = movies.slice(0, 100);



let normolizedArray = moviesArray.map(item => {
    return {
        title: item.Title.toString(),
        videoUrl: `https://www.youtube.com/watch?v=${item.ytid}`,
        categories: item.Categories.split("|"),
        movieYear: item.movie_year,
        rating: item.imdb_rating,
        image: `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`
    }
});


elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    renderMovies(normolizedArray, elMovieWrapper)
})



function getCategories(array) {

    let categoriesArray = [];
    for (const item of array) {
        for (const itemCategory of item.categories) {
            if (!categoriesArray.includes(itemCategory)) {
                categoriesArray.push(itemCategory)
            }
        }
    }

    return categoriesArray
}
let movieCategories = getCategories(normolizedArray)

function renderMovies(array, wrapper) {
    wrapper.innerHTML = null;



    let tempFragment = document.createDocumentFragment();
    let rendered_movies = 0;
    for (const item of array) {
        let templateItem = elTemplate.cloneNode(true)
        if (elSelectCategories.value == "all") {

            if (elRating.value <= item.rating && elYear.value <= item.movieYear) {
                templateItem.querySelector(".movie__img").src = item.image;
                templateItem.querySelector(".movie__title").textContent = item.title;
                templateItem.querySelector(".movie__year").textContent = item.movieYear;
                templateItem.querySelector(".movie__rating").textContent = item.rating;
                templateItem.querySelector(".movie__categories").textContent = item.categories;
                templateItem.querySelector(".movie__url").href = item.videoUrl;
                tempFragment.appendChild(templateItem)
                rendered_movies++;
            }
        } else if (elSelectCategories.value != "all") {
            if (elRating.value <= item.rating && elYear.value <= item.movieYear && elSelectCategories.value == item.categories) {
                templateItem.querySelector(".movie__img").src = item.image;
                templateItem.querySelector(".movie__title").textContent = item.title;
                templateItem.querySelector(".movie__year").textContent = item.movieYear;
                templateItem.querySelector(".movie__rating").textContent = item.rating;
                templateItem.querySelector(".movie__categories").textContent = item.categories;
                templateItem.querySelector(".movie__url").href = item.videoUrl;
                tempFragment.appendChild(templateItem)
                rendered_movies++;
            }
        }
    }

    elTotal.textContent = rendered_movies;
    if (rendered_movies != 0) {
        wrapper.appendChild(tempFragment)
    } else {
        wrapper.innerHTML = "<h1>0 Movies found</h1>"

    }


}

function renderCategories(array, wrapper) {
    let tempFragment = document.createDocumentFragment();

    for (const item of array) {
        let newOption = document.createElement("option");
        newOption.textContent = item;
        newOption.value = item;

        tempFragment.appendChild(newOption);
    }

    wrapper.appendChild(tempFragment)
}


renderMovies(normolizedArray, elMovieWrapper)
renderCategories(movieCategories, elSelectCategories)