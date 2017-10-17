'use strict';

var header = document.querySelector('header');
var templatesSection = document.getElementById('templatesSection');
var colorsSection = document.getElementById('colorsSection');
var backgroundsSection = document.getElementById('backgroundsSection');
var aboutSection = document.getElementById('aboutSection');
var homeLink = document.getElementById('homeLink');
var aboutUsLink = document.getElementById('aboutLink');
var templatesLink = document.getElementById('templatesLink');
var wrapper = document.getElementById('wrapper');
var section = document.querySelectorAll('section');
var stylesheets = document.querySelectorAll('link');
var dropdownContent = document.getElementById('dropdownContent');
var activeTemplate, activeColors, activeBackground;

Templates.all = [];

function Templates(name, multipage, stylesheet, screenshot, colors, backgrounds) {
  this.name = name;
  this.multipage = multipage;
  this.stylesheet = stylesheet;
  this.screenshot = screenshot;
  this.colors = colors;
  this.backgrounds = backgrounds;
  Templates.all.push(this);
}

// Top Nav Fixed
new Templates('Top Nav Fixed', true, 'templates/topnavfixed/style.css', 'templates/topnavfixed/screenshot.jpg',
  [ // gradient1, gradient2, shadow
  ['#4ec3d8', '#07a4c1', '#057287'],
  ['#d14747', '#a80606', '#870505'],
  ['#efa556', '#c14807', '#A05616'],
  ['#ceaf00', '#876c00', '#82700d'],
  ['#009b0f', '#006d01', '#016300'],
  ['#0071b2', '#004e7f', '#063451'],
  ['#a55697', '#821865', '#7c2969'],
  ],
  [ // backgrounds
    'templates/topnavfixed/backgrounds/default.jpg',
    'templates/topnavfixed/backgrounds/red.jpg',
    'templates/topnavfixed/backgrounds/orange.jpg',
    'templates/topnavfixed/backgrounds/yellow.jpg',
    'templates/topnavfixed/backgrounds/green.jpg',
    'templates/topnavfixed/backgrounds/blue.jpg',
    'templates/topnavfixed/backgrounds/purple.jpg'
  ]
);

// Side Nav Fixed
new Templates('Side Nav Fixed', true, 'templates/sidenavfixed/style.css', 'templates/sidenavfixed/screenshot.jpg',
  [ // gradient1, gradient2, shadow
  ['#4ec3d8', '#07a4c1', '#057287'],
  ['#d14747', '#a80606', '#870505'],
  ['#efa556', '#c14807', '#A05616'],
  ['#ceaf00', '#876c00', '#82700d'],
  ['#009b0f', '#006d01', '#016300'],
  ['#0071b2', '#004e7f', '#063451'],
  ['#a55697', '#821865', '#7c2969'],
  ],
  [ // backgrounds
    'templates/topnavfixed/backgrounds/default.jpg',
    'templates/topnavfixed/backgrounds/red.jpg',
    'templates/topnavfixed/backgrounds/orange.jpg',
    'templates/topnavfixed/backgrounds/yellow.jpg',
    'templates/topnavfixed/backgrounds/green.jpg',
    'templates/topnavfixed/backgrounds/blue.jpg',
    'templates/topnavfixed/backgrounds/purple.jpg'
  ]
);

localStorage.allTemplates = JSON.stringify(Templates.all);

/* ==================================== TEMPLATES FUNCTION ==================================== */
var possibleTemplates = document.getElementsByName('templatesRadioButton');

function applyTemplates(event) {
  event.preventDefault();
  localStorage.startAtTemplate = 'true';
  for (var radio = 0; radio < Templates.all.length; radio++) {
    if (possibleTemplates[radio].checked === true) {
      stylesheets[1].href = Templates.all[radio].stylesheet;
      localStorage['template'] = JSON.stringify(Templates.all[radio]);
      localStorage.templateStored = 'true';
      //window.location.reload('true');
    }
  }
}

/* =============================== COLORS & BACKGROUND FUNCTIONS =============================== */

function applyColors(event) {
  event.preventDefault();
  var possibleColors = document.getElementsByName('colorsRadioButton');

  for (var i = 0; i < possibleColors.length; i++) {
    if (possibleColors[i].checked === true) {
      activeColors = activeTemplate.colors[i];
      activeBackground = activeTemplate.backgrounds[i];
      changeColor(activeColors);
      checkBackground();
    }
  }
  localStorage['colors'] = JSON.stringify(activeColors);
  localStorage['background'] = activeBackground;
  localStorage.colorStored = 'true';
}

function changeColor(arr) {
  wrapper.style.background = 'linear-gradient(' + arr[0] + ', ' + arr[1] + ') fixed';
  if (arr[2]) {
    document.querySelector('body').style.textShadow = '1px 1px 4px ' + arr[2];
  }
}

function applyBackgrounds(event) {
  event.preventDefault();
  var possibleBackgrounds = document.getElementsByName('backgroundsRadioButton');

  for (var bg = 0; bg < activeTemplate.backgrounds.length; bg++) {
    if (possibleBackgrounds[0].checked === true) { localStorage.backgroundStored = 'true'; }
    else if (possibleBackgrounds[1].checked === true) { localStorage.backgroundStored = 'false'; }
    checkBackground();
  }
}

function checkBackground() {
  if (localStorage.backgroundStored === 'true') {
    wrapper.style.background = 'url("' + activeBackground + '") fixed';
    wrapper.style.backgroundSize = 'cover';
    if (firstTwoTemplates) {
      for (var k = 0; k < section.length; k++) {
        section[k].style.opacity = '0.8';
        section[k].style.background = '#000';
      }
    }
  } // if backgrounds true
  else {
    wrapper.style.background = 'linear-gradient(' + activeColors[0] + ', ' + activeColors[1] + ') fixed';
    if (firstTwoTemplates) {
      for (var l = 0; l < section.length; l++) {
        section[l].style.opacity = '1.0';
        section[l].style.background = 'inherit';
      }
    } // if first two templates
  } // if backgrounds false
}

/* ================================== NAV AND BUTTONS FUNCTIONS ================================== */

// Nav: Home Link
function goHome() {
  if (activeTemplate.multipage === true) {
    header.style.display = 'block';
    aboutSection.style.display = 'none';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
  }
  if (firstTwoTemplates) {
    header.style.animationName = 'slide-down';
    header.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#333';
    aboutLink.style.backgroundColor = '#000';
    templatesLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    aboutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    templatesLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  }
}

// Nav: About Us Link
function goAbout() {
  if (activeTemplate.multipage === true) {
    header.style.display = 'none';
    aboutSection.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
  }
  if (firstTwoTemplates) {
    aboutSection.style.animationName = 'slide-down';
    aboutSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#000';
    aboutLink.style.backgroundColor = '#333';
    templatesLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    aboutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    templatesLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  }
}

// Nav: Choose Layout Link
function goTemplates() {
  if (activeTemplate.multipage === true) {
    header.style.display = 'none';
    aboutSection.style.display = 'none';
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'none';
  }
  if (firstTwoTemplates) {
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
    homeLink.style.backgroundColor = '#000';
    aboutLink.style.backgroundColor = '#000';
    templatesLink.style.backgroundColor = '#333';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    aboutLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    templatesLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  }
}

// Button: going to colors section from the templates section
function templatesNext() {
  if (activeTemplate.multipage === true) {
    colorsSection.style.display = 'block';
    templatesSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-down';
    colorsSection.style.animationDuration = '1.5s';
  }
}

// Button: going back to templates section from color section
function colorsPrevious() {
  if (activeTemplate.multipage === true) {
    templatesSection.style.display = 'block';
    colorsSection.style.display = 'none';
    templatesSection.style.animationName = 'slide-down';
    templatesSection.style.animationDuration = '1.5s';
  }
}

// Button: going to backgrounds section from color section
function colorsNext() {
  if (activeTemplate.multipage === true) {
    colorsSection.style.display = 'none';
    backgroundsSection.style.display = 'block';
    backgroundsSection.style.animationName = 'slide-down';
    backgroundsSection.style.animationDuration = '1.5s';
  }
}

// Button: going from backgrounds section back to color section
function backgroundsPrevious() {
  if (activeTemplate.multipage === true) {
    colorsSection.style.display = 'block';
    backgroundsSection.style.display = 'none';
    colorsSection.style.animationName = 'slide-down';
    colorsSection.style.animationDuration = '1.5s';
  }
}

/* =============================== STUFF THAT HAPPENS WHEN PAGE LOADS =============================== */

// Checks colors and backgrounds
if (localStorage.colorStored === 'true') {
  activeColors = JSON.parse(localStorage['colors']);
  activeBackground = localStorage['background'];
  changeColor(activeColors);
  checkBackground();
} else {
  activeColors = Templates.all[0].colors[0];
  activeBackground = Templates.all[0].backgrounds[0];
  checkBackground();
}

// Generates and displays templates
for (var x = 0; x < Templates.all.length; x++) {
  document.getElementById('displayTemplates').innerHTML += '<span class="templateWidth"><input type="radio" name="templatesRadioButton" id="templates' + x + '" /><img id="template' + x + 'Image" src="' + Templates.all[x].screenshot + '" /></span>';
}

// Checks template and marks the active radio button on the web page
if (localStorage.templateStored === 'true') {
  activeTemplate = JSON.parse(localStorage['template']);
  stylesheets[1].href = activeTemplate.stylesheet;
  for (var y = 0; y < Templates.all.length; y++) {
    if (activeTemplate.name === Templates.all[y].name) { possibleTemplates[y].checked = true; }
  }
} else {
  activeTemplate = Templates.all[0];
  possibleTemplates[0].checked = true;
}

// Checks if home page or template page should display
if (localStorage.startAtTemplate === 'true') {
  if (activeTemplate.multipage === true) {
    header.style.display = 'none';
    templatesSection.style.display = 'block';
  }
  localStorage.startAtTemplate = false;
}
else if (localStorage.startAtTemplate === 'false') {
  if (activeTemplate.multipage === true) {
    header.style.display = 'block';
    templatesSection.style.display = 'none';
  }
}

var firstTwoTemplates = activeTemplate.name === Templates.all[0].name || Templates.all[1].name;

/* ==================================== EVENT LISTENERS + ==================================== */

// For troubleshooting JS on mobile
document.getElementById('clearLocalStorage').addEventListener('click', function() { localStorage.clear(); });

// Navigation Event Listeners
homeLink.addEventListener('click', goHome);
aboutLink.addEventListener('click', goAbout);
templatesLink.addEventListener('click', goTemplates);
document.getElementById('headerNext').addEventListener('click', goTemplates);
document.getElementById('templatesNextButton').addEventListener('click', templatesNext);
document.getElementById('colorsPreviousButton').addEventListener('click', colorsPrevious);
document.getElementById('colorsNextButton').addEventListener('click', colorsNext);
document.getElementById('backgroundsPreviousButton').addEventListener('click', backgroundsPrevious);
document.getElementById('getCodeButton').addEventListener('click', function() { window.open('code.html', '_blank'); });

// Menu Toggle for mobile
function toggleMenu() {
  dropdownContent.classList.toggle('show');
}

document.getElementById('dropdown').addEventListener('click', toggleMenu);

// Apply Templates Event Listener
document.getElementById('templatesForm').addEventListener('submit', applyTemplates);

// Apply Colors Event Listeners
document.getElementById('colorsForm').addEventListener('submit', applyColors);

// Apply Background Event Listeners
document.getElementById('backgroundsForm').addEventListener('submit', applyBackgrounds);

// Template image event listeners... why can't I get it to work in the for loop?
document.getElementById('template0Image').addEventListener('click', function() { possibleTemplates[0].checked = true; });
document.getElementById('template1Image').addEventListener('click', function() { possibleTemplates[1].checked = true; });

// Joy's Nav Mouseovers
if (firstTwoTemplates) {
  homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = activeColors[2]; });
  aboutLink.addEventListener('mouseover', function() { this.style.backgroundColor = activeColors[2]; });
  templatesLink.addEventListener('mouseover', function() { this.style.backgroundColor = activeColors[2]; });
  codeLink.addEventListener('mouseover', function() { this.style.backgroundColor = activeColors[2]; });
  homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  aboutUsLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  templatesLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  codeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  if (templatesSection.style.display === 'block') {
    templatesLink.style.backgroundColor = '#333';
    homeLink.style.backgroundColor = '#000';
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    templatesLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
  }
}
