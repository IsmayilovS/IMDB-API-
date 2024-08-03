const searchbar = document.querySelector('#searchbarInput');
const searchbarBtn = document.querySelector("#searchbarBtn")
const moviesSection = document.querySelector('.moviesSection')
const suggestionList = document.querySelector('.suggestionList')
const APIKEY = "7704dd86";

async function getFilm(searched) {

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searched}`);
        const data = await response.json();
        // console.log(data);
        data.Search
        for(i of data.Search.slice(0,5)){
            // console.log(i);
            
            try {
                const secondResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${i.imdbID}`);
                const secondData = await secondResponse.json();
                // console.log(secondData);
                

          const movieElement = document.createElement("div");
          movieElement.classList.add("movie");
          movieElement.innerHTML = `
            <div class="movie-content">
            <div class="movie-front">
                <p id='titleFilm'>${secondData.Title}</p>
                <img src="${secondData.Poster}" alt="" srcset="">
                <h3>${secondData.Title} (${secondData.Year})</h3>
                <p>IMDB Rating: ${secondData.imdbRating}</p>
            </div>
            <div class="movie-back">
                <h3>${secondData.Title}</h3>
                <p>Release Date: ${secondData.Released}</p>
                <p>${secondData.Plot}</p>
            </div>   
        </div>`;
        moviesSection.appendChild(movieElement);
    } catch (error) {
                
    }
     }
        
    } catch (error) {
        console.log(error);
    }

}
searchbarBtn.addEventListener("click",()=>{
    const searched = searchbar.value.trim()
    getFilm(searched)
})
searchbar.addEventListener('keydown', (e) =>{
    const searched = searchbar.value.trim()
    if (e.key == "Enter"){
        getFilm(searched);
    }
})

document.addEventListener('DOMContentLoaded',getSuggestion)
async function getSuggestion() {
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=game of thrones`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=the valley of the wolves`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=The Lord of the Rings: The Return of the King`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=Terim`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=The Hobbit: An Unexpected Journey`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
    try {
        const getSuggestionResponse = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=The Lord of the Rings: The Rings of Power`)
        const suggestionData = await getSuggestionResponse.json()
        const listItem = document.createElement('li')
        listItem.innerHTML = `
            <img src ="${suggestionData.Poster}">
            <h2>${suggestionData.Title}(${suggestionData.Year})</h2>
            <p>${suggestionData.Plot}</p>
        ` 
        suggestionList.appendChild(listItem);  
        console.log(suggestionData);
        
    } catch (error) {
        
    }
}
