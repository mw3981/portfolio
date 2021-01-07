let reneImageElement = document.getElementById('imagesRene');
let maskImageElement = document.getElementById('imagesMasks');
let cardImageElement = document.getElementById('imagesCards');
let menuImageElement = document.getElementById('imagesMenu');


let jsonData = [

  {
    "title": "Magritte",
    "image": "ReneMockup.png",
    "link": "https://mw3981.github.io/ReneGallery/",
  },
  {
    "title": "Magritte",
    "image": "renemagrittewebsite.png",
    "link": "https://mw3981.github.io/ReneGallery/",
  },
  {
    "title": "Masks",
    "image":"mask.png",
    "link": "https://mw3981.github.io/wearmasks/"
  },
  {
    "title": "Masks",
    "image":"maskswebsite.jpg",
    "link": "https://mw3981.github.io/wearmasks/"
  },
  {
    "title": "Cards",
    "image":"FaceCards1-(zippo&lungs).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"FaceCards1-(juul cig).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"FaceCards3(otherjoker).png",
    "link": "#"
  },
  {
    "title": "Cards",
    "image":"FaceCards3.png",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"menu_mockup.png",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"design_menu.pdf",
    "link": "#"
  },
  {
    "title": "Menu",
    "image":"design_menu (dragged).pdf",
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

    else if (incomingJSON[i]['title'] == 'Cards' && pageName == 'CARD'){
      cardImageElement.appendChild(newContentElement);
    }

    else if (incomingJSON[i]['title'] == 'Menu' && pageName == 'MENU'){
      menuImageElement.appendChild(newContentElement);
    }

    }
  }

createElement(jsonData);
