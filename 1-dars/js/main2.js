// let doubleNumber = function (number) {
//     return number * number
// }

// let doubleNumber = number => number * number;


// function doubleNumber(number) {
//     return number * number
// }

// console.log(doubleNumber(12));



// function check(array, name) {
    
    //     for (const item of array) {
        //         if (item == name) {
            //             return true
            //         }
            //     }
            // }
            
            // console.log(check(users, "Toxir"));

// console.log(users.includes("toxir"));

// let users = ["Avaz", "O'ktam", "Umid", "Toxir"];

// for (let i = 1; i <= users.length; i++) {
//     console.log(users[i - 1], i * 5);
// }

// for (const item of users) {
//     console.log(item);
// }

// users.forEach(item => console.log(item))

let moviesArray = movies.slice(0, 20);


function normolize(array) {
    let newArray = [];


    array.forEach(item => {
        let newObject = {}

        newObject.title = item.Title.toString();
        newObject.videoUrl = `https://www.youtube.com/watch?v=${item.ytid}`;
        newObject.categories = item.Categories.split("|");
        newObject.movieYear = item.movie_year;
        newObject.rating = item.imdb_rating;
        newObject.image = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;

        newArray.push(newObject)
    });
    


    return newArray
}


let elMovieWrapper = document.querySelector(".movie__wrapper");
let elTemplate = document.querySelector("#movie_card").content;


let newArray = normolize(moviesArray);


function renderMovies(array, wrapper) {
    wrapper.innerHTML = null

    let tempFragment = document.createDocumentFragment()

    for (const item of array) {
        let templateItem = elTemplate.cloneNode(true)

        templateItem.querySelector(".movie__img").src = item.image;
        templateItem.querySelector(".movie__title").textContent = item.title;
        templateItem.querySelector(".movie__year").textContent = item.movieYear;
        templateItem.querySelector(".movie__rating").textContent = item.rating;
        templateItem.querySelector(".movie__url").href = item.videoUrl;


        tempFragment.appendChild(templateItem)
    }

    wrapper.appendChild(tempFragment)
    
}

renderMovies(newArray, elMovieWrapper);



















