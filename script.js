let reneImageElement = document.getElementById('imagesRene');
let maskImageElement = document.getElementById('imagesMasks');
let tinDogImageElement = document.getElementById('imagesTinDog');
let cardImageElement = document.getElementById('imagesCards');
let menuImageElement = document.getElementById('imagesMenu');


let jsonData = [

  {
    "title": "Magritte",
    "image": "images/ReneMockup.png",
    "link": "https://mw3981.github.io/ReneGallery/",
  },
  {
    "title": "Magritte",
    "image": "images/renemagrittewebsite.jpg",
    "link": "https://mw3981.github.io/ReneGallery/",
  },
  {
    "title": "Masks",
    "image":"images/mask.png",
    "link": "https://mw3981.github.io/wearmasks/"
  },
  {
    "title": "Masks",
    "image":"images/maskswebsite.jpg",
    "link": "https://mw3981.github.io/wearmasks/"
  },
  {
    "title": "TinDog",
    "image":"images/tindog.png",
    "link": "https://mw3981.github.io/tindog/"
  },
  {
    "title": "Cards",
    "image":"images/FaceCards1-(zippo&lungs).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"images/FaceCards1-(juul cig).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"images/FaceCards3(otherjoker).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"images/FaceCards3.png",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"images/menu_mockup.png",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"images/design_menu.pdf",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"images/design_menu2.pdf",
    "link": "#"
  },
]

function createElement(incomingJSON){
  for (let i = 0; i < incomingJSON.length; i++) {

    let newContentElement = document.createElement("DIV");
    newContentElement.classList.add('contentItem');

    let linkElem = document.createElement("a");
    linkElem.href = incomingJSON[i]['link'];
    newContentElement.appendChild(linkElem);

    let newContentPic = document.createElement("IMG");
    newContentPic.classList.add("img");
    newContentPic.src = incomingJSON[i]['image'];
    linkElem.appendChild(newContentPic);


    if (incomingJSON[i]['title'] == 'Magritte' && pageName == 'RENE') {
      reneImageElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'Masks' && pageName == 'MASK'){
      maskImageElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'TinDog' && pageName == 'TINDOG'){
      tinDogImageElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'Cards' && pageName == 'CARD'){
      cardImageElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'Menu' && pageName == 'MENU'){
      menuImageElement.appendChild(newContentElement);
    }

    }
  }

createElement(jsonData);
