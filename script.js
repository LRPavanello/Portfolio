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
const descricaoCompleta = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.";
const partes = descricaoCompleta.match(/.{1,100}/g); // Divide a descrição em partes de 100 caracteres
const descricao = partes.join(''); // Une as partes novamente em uma única string
const projectsList = [
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
  {
    name: 'Multi-Post Stories Gain+Glory',
    description: descricao,
    technologies: ['Ruby on Rails', 'CSS', 'Java Script', 'HTML'],
    MobImage: 'mobpattern.jpg',
    DeskImage: 'psnap.jpg',
    sharepoint: 'https://www.google.com/',
    reference: 'https://www.github.com/',
  },
];
console.log(descricao); // Imprime a descrição completa
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