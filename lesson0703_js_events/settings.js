let pageBackground = prompt("Please enter the background color for the page: (e.g. red)", 'white');
let fontStyle = prompt("Please enter the font style for the page: (e.g. Arial)", "Colibri");
let headerAlign = prompt("Please enter the text-align for the main header: (left/center/right)", "center");
let linkBackground = prompt("Please enter the background color for the chapter with links: (e.g. red)", "grey");
let linkColor = prompt("Please enter the text color for the links: (e.g. purple)", "blue");
let divColor = prompt("Please enter the text color for the div element: (e.g. yellow)", "green");
let divSize = prompt("Please enter the text size for the div element: (e.g. 14px)", "16px");
let divWeight = prompt("Please enter the font-weight for the div element: (normal/bold)", "normal");
let listStyle = prompt("Please enter the marker type for the list: (circle/square)", "square");
let favoriteSite1 = prompt("Please enter your first favorite website address: ", "https://www.google.com/")
let favoriteSite2 = prompt("Please enter your second favorite website address: ", "https://stackoverflow.com/")
let favoriteSite3 = prompt("Please enter your third favorite website address: ", "https://javascript.info/")

const body = document.querySelector('.body');
const header = document.querySelector('h1');
const linkChapter = document.querySelector('.linksChapter');
const links = document.getElementsByClassName('links')
const divElement = document.querySelector('div');
const listElement = document.querySelector('ul');

let favoriteSite1Link = document.createElement("a");
favoriteSite1Link.setAttribute('class', 'links')
favoriteSite1Link.href = favoriteSite1;
favoriteSite1Link.innerHTML = favoriteSite1 + '&nbsp&nbsp';
linkChapter.appendChild(favoriteSite1Link);

let favoriteSite2Link = document.createElement("a");
favoriteSite2Link.setAttribute('class', 'links')
favoriteSite2Link.href = favoriteSite2;
favoriteSite2Link.innerHTML = favoriteSite2 + '&nbsp&nbsp';
linkChapter.appendChild(favoriteSite2Link);

let favoriteSite3Link = document.createElement("a");
favoriteSite3Link.setAttribute('class', 'links')
favoriteSite3Link.href = favoriteSite3;
favoriteSite3Link.innerHTML = favoriteSite3;
linkChapter.appendChild(favoriteSite3Link);

body.style.backgroundColor = pageBackground;
body.style.fontFamily = fontStyle;
header.style.textAlign = headerAlign;
linkChapter.style.backgroundColor = linkBackground;

for (let el in links){
    links.item(el).style.color = linkColor;
}

divElement.style.backgroundColor = divColor;
divElement.style.fontSize = divSize;
divElement.style.fontWeight = divWeight;
listElement.style.listStyleType = listStyle;




