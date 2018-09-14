function onSuccess(responseData) {
  console.log(responseData);
};

var searchForm = document.querySelector('form')
var userInput = document.querySelector('.submission_field')

// Find results section in DOM
var results = document.querySelector('.results')

searchForm.addEventListener('click', function(event){
  event.preventDefault();
  if (event.target.classList.contains('search-btn')){

    var options = {
      method: 'get',
      url: 'http://omdbapi.com/?apikey=2f6435d9&s=' + (userInput.value),
      dataType: 'json'
    }
  
  
    $.ajax(options).done(function(res) {
      
      results.textContent = ""
        res.Search.forEach(function(movie) {
  
          if (movie["Poster"] !== "N/A") {
           
            var container = document.createElement('container')
            // create paragraph element
            var paragraph = document.createElement('p')

            //create image element
            var image = document.createElement('img')

            //create anchor element
            var a = document.createElement('a')

            // append result title to paragraph

            a.href = `https://www.imdb.com/title/${movie.imdbID}`
            a.text = "more info..."
            a.target="_blank"
            paragraph.append(movie["Title"])
            
            //assign image.src as movie poster url
            image.src = (movie["Poster"]) 

            // add result to paragraph, image and anchor
            results.append(container)
            
            container.append(paragraph, image, a)
          }
        })
      
        
    })
  
  }
})
