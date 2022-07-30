
const queryMobileMenu = document.getElementById('MobileMenu');
const queryMobile_Nav = document.getElementById('mobile-nav');
const queryMain = document.body;
const queryExtra = document.getElementById('logo-extra-info');


function MobileMenu() {
  if ( queryMobileMenu.style.display == 'flex') {
    queryMobileMenu.style.display = 'none';
    if (queryExtra) queryExtra.style.display = 'flex';
    queryMain.style.overflow = 'visible';
  } else {
    queryMain.style.overflow = 'hidden';
    queryMobileMenu.style.display  = 'flex';
    if (queryExtra) queryExtra.style.display = 'none';
    }
}


// Speakers information
const info = {
  speakers: [
  {
    id: 1,
    lecturer: 'Walter Alva',  
    position: 'Director of Sipan Project',
    review: 'A Peruvian archaeologist and researcher of one of the most important archaeological discoveries worldwide',
    image:  './images/Walter-alva.png'
  },
  {
    id: 3,
    lecturer: 'Charles Walker',  
    position: 'Director of the Hemispheric Institute on the Americas',
    review: 'Professor of History, author of "La rebelión de Tupac Amaru", which was published in 2015',
    image:  './images/Charles-Walker.jpg'
  },{
    id: 3,
    lecturer: 'Giuseppe Orefici',  
    position: 'Director of Nazca Project',
    review: 'An italian archaeologist who works in the investigation of pre-Hispanic civilizations, in particular the Nazca and Rapa Nui cultures',
    image:  './images/Giuseppe-Orefici.jpg'
  },{
    id: 4,
    lecturer: 'Krzysztof Makowski',  
    position: 'Co-founding of the specialty of Archeology at University PUCP',
    review: 'An eminent archaeologist who researchs various aspects of the development of pre-Hispanic communities in the Central Andean',
    image:  './images/Krzysztof-Makowski.jpg'
  },{
    id: 5,
    lecturer: 'Ruth Shady',  
    position: 'Director of Caral Archaeological Zone',
    review: 'An award peruvian anthropologist and archaeologist, who founded the Caral Archaeological Zone, the oldest civilization in America',
    image:  './images/Ruth-Shady.jpg'
  }
  
]  
}

//Speakers
const theSpeakers = info.speakers;
const queryReviewsSection = document.getElementById ('reviews');

function createReviewsSection() {  
  theSpeakers.forEach( (data) => {  
    queryReviewsSection.innerHTML += `<div class="lecturer">
    <img src="${data.image}"  alt="Lecturer ${data.id}">
    <div class="details">
      <h2>${data.lecturer}</h2>
      <h3>${data.position}</h3>
      <p>${data.review}
      </p>
    </div>
  </div>
  `;
 }
 )
}

if (queryReviewsSection) createReviewsSection();

