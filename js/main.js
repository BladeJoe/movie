 let elList = document.querySelector(".movie__wrapper");
 let elForm = document.querySelector(".form ");
 let elSearch = document.querySelector("#textBySearch");
 let elRating = document.querySelector("#searchByRating");
 elList.innerHTML = null;

 let moviesArray = movies.slice(0, 50);
 elForm.addEventListener("submit", function (evt) {
     evt.preventDefault();

     renderMovies(newArray, elMovieWrapper)
 })

 function normolize(array) {
     let newArray = [];


     array.forEach(item => {
         let newObject = {}

         newObject.title = item.Title.toString();
         newObject.videoUrl = `https://www.youtube.com/watch?v=${item.ytid}`;
         newObject.categories = item.Categories.split("|");
         newObject.movieYear = item.movie_year;
         newObject.rating = item.imdb_rating;
         newObject.image = `https://img.youtube.com/vi/${item.ytid}/default.jpg`;

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
         if (elRating.value <= item.rating) {
             let templateItem = elTemplate.cloneNode(true)
             templateItem.querySelector(".movie__img").src = item.image;
             templateItem.querySelector(".movie__title").textContent = item.title;
             templateItem.querySelector(".movie__year").innerHTML = `<img class="" src="./images/calendar.png" alt="" width="20" height="20">${item.movieYear}`;
             templateItem.querySelector(".movie__rating").innerHTML = `<img class="" src="./images/star.png" alt="" width="20" height="20">${item.rating}`;
             templateItem.querySelector(".movie__url").href = item.videoUrl;

             tempFragment.appendChild(templateItem)
         }

     }
     wrapper.appendChild(tempFragment)

 }

 

 renderMovies(newArray, elMovieWrapper)