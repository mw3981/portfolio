let reneImageElement = document.getElementById('imagesRene');
let maskImageElement = document.getElementById('imagesMasks');
let cardImageElement = document.getElementById('imagesCards');

let jsonData = [
  {
    "title" : "Magritte",
    "image": "renemagritte.gif",
    "link": "https://mw3981.github.io/ReneGallery/",
  },
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
    "image":"mask.gif",
    "link": "https://mw3981.github.io/Masks/"
  },
  {
    "title": "Masks",
    "image":"mask.png",
    "link": "https://mw3981.github.io/Masks/"
  },
  {
    "title": "Masks",
    "image":"maskswebsite.jpg",
    "link": "https://mw3981.github.io/Masks/"
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

    }
  }

createElement(jsonData);
