const toggleTheme = document.querySelector('#btnToggle')


//fetching data to display immediately
async function loadNews(){
    const newsList = await fetch('http://newsapi.org/v2/top-headlines?country=ph&apiKey=91c9d585d313447bbd41a76101a567ee&pageSize=50')
                           .then(res => res.json())
                           .then(data => data)
                           .catch(error => 'http://newsapi.org/v2/top-headlines?')
       const { articles , totalResults } = newsList
       let li = ''
       articles.forEach(article => {
           li += ` 
            ${article.urlToImage}
            ${article.title}
            ${article.source.name}
            ${article.content}
            ${article.url}${article.publishedAt}
           `
       });
       console.log(totalResults)
       console.log(li)
}


// Immediately display the ews
loadNews();
//dark & light mode
toggleTheme.addEventListener("click", e =>{
    if(toggleTheme.className == "fa fa-toggle-on"){
        toggleTheme.className = "fa fa-toggle-off"
        body.className = "light-mode"
    }
    else{
        toggleTheme.className = "fa fa-toggle-on"
        body.className = "dark-mode"
    }
    e.preventDefault()
})