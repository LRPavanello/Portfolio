// #Mobile Menu
const buttonswitch = document.getElementsByClassName('button_switch')[0];
const wayFinderlines = document.getElementsByClassName('navigation_options')[0];
const shadowedsurface = document.getElementsByClassName('shadowed_surface')[0];
const closeMobileButton = document.getElementsByClassName('closemob-table')[0];
const explorer = document.getElementsByClassName('explorer');
buttonswitch.addEventListener('click', () => {
  wayFinderlines.classList.toggle('active');
  shadowedsurface.classList.toggle('active');
  buttonswitch.classList.toggle('active');
  closeMobileButton.classList.toggle('active');
});
closeMobileButton.addEventListener('click', () => {
  wayFinderlines.classList.toggle('active');
  shadowedsurface.classList.toggle('active');
  buttonswitch.classList.toggle('active');
  closeMobileButton.classList.toggle('active');
});
for (let i = 0; i < explorer.length; i += 1) {
  explorer[i].addEventListener('click', () => {
    wayFinderlines.classList.toggle('active');
    shadowedsurface.classList.toggle('active');
    buttonswitch.classList.toggle('active');
    closeMobileButton.classList.toggle('active');
  });
}
// My Latest Projects
const projectsList = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: partes,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
];
// #Details Pop-Up Window
const patternPopUp = document.getElementsByClassName('patternholder')[0];
const coverupBg = document.getElementById('coverup');
const shareP = document.getElementById('see-live');
const reference = document.getElementById('see-source');
let currentScrollPosition = window.scrollY;
function Showpattern(index) {
  const project = projectsList[index];
  currentScrollPosition = window.scrollY;
  patternPopUp.classList.toggle('active');
  coverupBg.classList.toggle('active');
  window.scrollTo(0, 0);
  patternPopUp.querySelector('h3').textContent = project.name;
  patternPopUp.querySelectorAll('.badge').forEach((badge, index) => {
    badge.textContent = project.technologies[index];
  });
  patternPopUp.querySelector('p').textContent = project.description;
  shareP.setAttribute('onclick', `window.location.href='${project.sharepoint}'`);
  reference.setAttribute('onclick', `window.location.href='${project.reference}'`);
}
const projectiddesing = document.getElementById('iddesing');
const projectsholder = document.querySelector('.projects');
for (let i = 0; i < projectsList.length; i += 1) {
  const projectid = projectiddesing.content.cloneNode(true);
  const project = projectsList[i];
  projectid.querySelector('h3').textContent = project.name;
  projectid.querySelectorAll('.badge').forEach((badge, index) => {
    badge.textContent = project.technologies[index];
  });
  projectid.querySelector('.button').textContent = 'See Project';
  projectid.querySelector('.button').addEventListener('click', () => {
    Showpattern(i);
  });
  projectsholder.appendChild(projectid);
}
function Camouflagepattern() { // eslint-disable-line no-unused-vars
  patternPopUp.classList.toggle('active');
  coverupBg.classList.toggle('active');
  window.scrollTo(0, currentScrollPosition);
}
// #Validate Contact Formulary
const messageform = document.getElementsByClassName('message_form')[0];
const addressEmail = document.getElementById('address');
const setError = (message) => {
  const failholder = messageform.querySelector('.fail');
  failholder.innerHTML = message;
  failholder.classList.add('fail');
};
const validateInputs = () => {
  const sendingEmail = addressEmail.value;
  if (!(sendingEmail === sendingEmail.toLowerCase())) {
    setError('Please ensure that your email address is in all lowercase letters.');
    addressEmail.classList.toggle('activefail');
  } else if (sendingEmail === '') {
    setError('Please enter your email address, the field cannot be left blank.');
    addressEmail.classList.toggle('activefail');
  } else {
    setError('');
    addressEmail.classList.toggle('activefail');
    messageform.submit();
  }
};
messageform.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});
const inputFeedback = document.getElementById('feedback');