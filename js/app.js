const toggleTheme = document.querySelector('#btnToggle')
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