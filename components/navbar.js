function navbar(){
    return ` <div id="search"><input type="text" id="input_search" placeholder="Seach Images"><button id="search_button" onclick="display()" >Search</button> </div>
    <div id="options">
    <div id="nature" onclick="directfun('nature')"></div>
    <div id="beach" onclick="directfun('beach')"></div>
    <div id="bikes" onclick="directfun('bikes')"></div>
    <div id="cars" onclick="directfun('cars')"></div>
    <div id="cartoon" onclick="directfun('cartoon')"></div></div>`
}
export { navbar };