const containers = document.querySelector('.containers')
const results = document.querySelector('.results')
const search = document.querySelector('#btnSearch')
const country = document.querySelector('#country')
const category = document.querySelector('#category')
const keySearch = document.querySelector('#usr')
const toggleTheme = document.querySelector('#btnToggle')
const body = document.querySelector('#body')
let bookPage = []


//fetching data to display immediately
async function loadNews(){
    const API = 'https://newsapi.org/v2/top-headlines?apiKey=91c9d585d313447bbd41a76101a567ee&country='+country.value+'&category='+category.value+'&q='+keySearch.value+'&pageSize=50'
     const newsList = await fetch(API)
                            .then(res => res.json())
                            .then(data => data)
                            .catch(error => 'https://newsapi.org/v2/top-headlines?')
        const { articles , totalResults } = newsList
        bookPage = articles
        let li = ''
        let result = `<p>You have a total result of ${totalResults}</p>`
        articles.forEach(article => {
            li += ` 
                <div class="newsContainer">
                    <div class="newsHeader">
                        <li><img src="${article.urlToImage}"></li>
                    </div>
                    <div class="newsBody">
                        <li><h4>${article.title}</h4></li>
                        <li>${article.source.name}</li>
                        <li><p>${article.content}</p></li>
                        <div class="newsUtility">
                            <a href="${article.url}">Go to this Page</a>
                            <button><i class="fa fa-bookmark"></i></button> 
                        </div>
                    </div>
                    <div class="newsFooter">
                        <li><p>Published at ${article.publishedAt}</p></li>
                    </div>
                </div>`
  
        })
        results.innerHTML = result
        containers.innerHTML = li     
}
//Display News immediately after loading 
loadNews()

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