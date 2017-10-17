'use strict';

var allTemplates = JSON.parse(localStorage.allTemplates);

if (localStorage.templateStored === 'true') {
  activeTemplate = JSON.parse(localStorage['template']);
} else {
  activeTemplate = allTemplates[0];
}

var css = document.getElementById('CSS');
var js = document.getElementById('JS');
var instructionsNav = document.getElementById('instructionsNav');
var htmlNav = document.getElementById('htmlNav');
var cssNav = document.getElementById('cssNav');
var jsNav = document.getElementById('jsNav');
var instructionsDiv = document.getElementById('instructionsDiv');
var htmlOutput = document.getElementById('htmlOutput');
var cssOutput = document.getElementById('cssOutput');
var jsOutput = document.getElementById('jsOutput');
var cssH3 = document.getElementById('cssH3');
var jsH3 = document.getElementById('jsH3');
var activeTemplate, activeColors, activeBackground, backgroundOpacity, sectionBackground;
var firstTwoTemplates = activeTemplate.name === allTemplates[0].name || allTemplates[1].name;

/* =============================== CHECKING LOCAL STORAGE =============================== */

if (localStorage.colorStored === 'true') {
  activeColors = JSON.parse(localStorage['colors']);
} else {
  activeColors = allTemplates[0].colors[0];
}

if (localStorage.backgroundStored === 'true') {
  activeBackground = 'url(\'background.jpg\')';
  if (firstTwoTemplates) {
    backgroundOpacity = '0.8;';
    sectionBackground = '#000;';
  }
} else {
  activeBackground = 'linear-gradient(' + activeColors[0] + ', ' + activeColors[1] + ') fixed;';
  if (firstTwoTemplates) {
    backgroundOpacity = '1.0;';
    sectionBackground = 'inherit;';
  }
}

/* =============================== OUTPUTS RELEVANT CSS CODE =============================== */

if (localStorage.backgroundStored === 'true') {
  document.getElementById('backgroundImage').innerHTML = '<a href="https://raw.githubusercontent.com/strawbee/layoutgenerator/master/' + localStorage.background + '" target="_blank" alt="background image" title="save this image">this link</a>';
  document.getElementById('backgroundImage2').innerHTML = '<a href="https://raw.githubusercontent.com/strawbee/layoutgenerator/master/' + localStorage.background + '" target="_blank" alt="background image" title="save this image">this link</a>';
  document.getElementById('ifBackground').style.display = 'block';
  document.getElementById('ifBackground2').style.display = 'block';
}

if (activeTemplate.name === allTemplates[0].name) {
  cssH3.textContent = 'Template: Top Nav Fixed';
  css.textContent = `
  @import url("https://fonts.googleapis.com/css?family=Raleway");

  * {
    box-sizing: border-box;
  }

  body {
    background: #000;
    font-family: Raleway, sans-serif;
    font-weight: 100;
    color: #FFF;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    text-shadow: 1px 1px 4px #057287;
    overflow-x: hidden;
  }

  @media only screen and (min-width: 340px) {
    /* For more than really, really tiny screens */
    body {
      font-size: 0.9em;
    }
  }

  @media only screen and (min-width: 420px) {
    /* For more than really tiny screens */
    body {
      font-size: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 900;
    color: #eee;
  }

  a:hover {
    color: #fff;
  }

  p {
    margin-bottom: 25px;
  }

  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: ${activeBackground};
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 0;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
    text-align: center;
    box-shadow: 0 3px 1px #222;
    z-index: 2;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    padding: 30px 45px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav ul:hover {
    cursor: context-menu;
  }

  nav li:hover {
    background: #057287;
  }

  /* Nav for Mobile: */

  .mobile:hover {
    background: #222;
  }

  .dropdown-content {
      display: none;
      z-index: 100;
  }

  .show {
    display: block;
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */

    .mobile {
      display: none;
    }

    .dropdown-content {
      display: block;
    }

    nav li {
      display: inline-block;
    }
  }

  header {
    display: block;
    margin: 100px 0 80px 0;
    padding: 10px;
    line-height: 2em;
    text-align: left;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 2em;
    line-height: 1em;
    font-weight: 900;
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    text-align: center;
    white-space: nowrap;
  }

  @media only screen and (min-width: 420px) {
    /* For larger than really, really tiny mobile screens: */

    header {
      margin: 110px 0 80px 0;
      padding: 30px 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */

    header {
      margin-left: 50px;
      margin-right: 50px;
      text-align: center;
    }

    h1 {
      font-size: 3em;
    }

    h1:hover {
      transform: translate(10px, 0);
    }

    @keyframes h1-animation {
      from { opacity: 0; margin-right: 500px; }
      to { opacity: 1; margin-right: 0; }
    }
  }

  header p {
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }

  section {
    position: relative;
    margin: 100px 10px 80px 10px;
    padding: 10px;
    line-height: 2em;
    overflow: auto;
    border-radius: 20px;
    text-align: justify;
    opacity: ${backgroundOpacity};
    background: ${sectionBackground};
  }

  h2 {
    font-size: 2em;
    line-height: 1em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 10px;
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @media only screen and (min-width: 420px) {
    /* For larger than really, really tiny mobile screens: */

    section {
      margin: 110px 10px 80px 10px;
      padding: 20px 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */
    section {
      margin-left: 50px;
      margin-right: 50px;
    }

    h2 {
      font-size: 3em;
    }

    @keyframes h2-animation {
      from { margin-left: 500px; opacity: 0; }
      to { margin-left: 0px; opacity: 1; }
    }

    h2:hover {
      transform: translate(10px, 0);
    }
  }

  img {
    border: solid 3px #fff;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 1s;
    margin: 10px;
    box-shadow: 1px 1px 2px #333;
  }

  img:hover {
    opacity: 1.0;
  }

  button {
    margin: 30px 10px 10px 10px;
    padding: 20px;
    font-size: 1.2em;
    border-radius: 10px;
    border: solid 2px #000;
    background: #fff;
    color: #000;
    box-shadow: 2px 2px 2px #000;
  }

  button:hover {
    border: solid 2px #ededed;
    background: #000;
    color: #fff;
    box-shadow: 1px 1px 2px #333;
  }

  button:focus {
    outline: 0;
  }

  input {
    border: solid 2px #000;
    border-radius: 5px;
    padding: 5px;
  }

  input:focus {
    background: #333;
    outline: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #000;
    text-align: center;
    color: #8c8c8c;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -2px 1px #333;
    padding: 5px;
    height: 60px;
    z-index: 1;
    transition: color 1s;
  }

  footer:hover {
    cursor: default;
    color: #fff;
  }

  #link1Section, #link2Section {
    display: none;
  }

  #homeLink {
    background: #333;
  }

  @keyframes slide-down {
    from { margin-top: -100%; }
    to { margin-top: 100px; }
  }

  @media only screen and (min-width: 420px) {
    /* For iPads & Desktop & Larger Mobiles: */
    @keyframes slide-down {
      from { margin-top: -100%; }
      to { margin-top: 110px; }
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     header { width: 90vw; }
     section { width: 90vw; }
  }
  `;
}

else if (activeTemplate.name === allTemplates[1].name) {
  cssH3.textContent = 'Template: Side Nav Fixed';
  css.textContent = `
  @import url("https://fonts.googleapis.com/css?family=Raleway");

  * {
    box-sizing: border-box;
  }

  body {
    background: #000;
    font-family: Raleway, sans-serif;
    font-weight: 100;
    color: #FFF;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    font-size: 16px;
    text-shadow: 1px 1px 4px ${activeTemplate.colors[2]};
    overflow-x: hidden;
  }

  @media only screen and (min-width: 340px) {
    /* For more than really, really tiny screens */
    body {
      font-size: 0.9em;
    }
  }

  @media only screen and (min-width: 420px) {
    /* For more than really tiny screens */
    body {
      font-size: 16px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    font-weight: 900;
    color: #eee;
  }

  a:hover {
    color: #fff;
  }

  p {
    margin-bottom: 25px;
  }

  #wrapper {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100vh;
    min-width: 100vw;
    background: ${activeBackground};
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 0;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
    text-align: center;
    box-shadow: 0 3px 1px #222;
    overflow: hidden;
    z-index: 2;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    padding: 30px 45px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav ul:hover {
    cursor: context-menu;
  }

  nav li:hover {
    background: #057287;
  }

  /* Nav for Mobile: */

  .mobile:hover {
    background: #222;
  }

  .dropdown-content {
      display: none;
      z-index: 100;
  }

  .show {
    display: block;
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */

    .mobile {
      display: none;
    }

    .dropdown-content {
      display: block;
    }

    nav {
      width: 260px;
      height: 100%;
    }

    nav ul {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    nav li {
      padding: 30px 80px;
    }
  }

  header {
    display: block;
    margin: 100px 0 80px 0;
    padding: 10px;
    line-height: 2em;
    text-align: left;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 2em;
    line-height: 1em;
    font-weight: 900;
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    text-align: center;
    white-space: nowrap;
  }

  @media only screen and (min-width: 420px) {
    /* For larger than really, really tiny mobile screens: */

    header {
      padding: 20px 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */

    header {
      margin: 30px 30px 30px 290px;
      padding: 30px;
      text-align: center;
    }

    h1 {
      font-size: 3em;
    }

    h1:hover {
      transform: translate(10px, 0);
    }

    @keyframes h1-animation {
      from { opacity: 0; margin-right: 500px; }
      to { opacity: 1; margin-right: 0; }
    }
  }

  header p {
    text-shadow: 2px 2px 3px #057287;
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }

  section {
    position: relative;
    margin: 100px 10px 80px 10px;
    padding: 10px;
    line-height: 2em;
    overflow: auto;
    border-radius: 20px;
    opacity: ${backgroundOpacity};
    background: ${sectionBackground};
    text-align: justify;
  }

  h2 {
    font-size: 2em;
    line-height: 1em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 10px;
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @media only screen and (min-width: 420px) {
    /* For larger than really, really tiny mobile screens: */

    section {
      padding: 20px 40px;
    }
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */

    section {
      margin: 0 30px 30px 290px;
      padding: 30px;
    }

    h2 {
      font-size: 3em;
    }

    @keyframes h2-animation {
      from { margin-left: 500px; opacity: 0; }
      to { margin-left: 0px; opacity: 1; }
    }

    h2:hover {
      transform: translate(10px, 0);
    }
  }

  img {
    border: solid 3px #fff;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 1s;
    margin: 10px;
    box-shadow: 1px 1px 2px #333;
  }

  img:hover {
    opacity: 1.0;
  }

  button {
    margin: 30px 10px 10px 10px;
    padding: 20px;
    font-size: 1.2em;
    border-radius: 10px;
    border: solid 2px #000;
    background: #fff;
    color: #000;
    box-shadow: 2px 2px 2px #000;
  }

  button:hover {
    border: solid 2px #ededed;
    background: #000;
    color: #fff;
    box-shadow: 1px 1px 2px #333;
  }

  button:focus {
    outline: 0;
  }

  input {
    border: solid 2px #000;
    border-radius: 5px;
    padding: 5px;
  }

  input:focus {
    background: #333;
    outline: 0;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #222;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -1px 2px #333;
    padding: 5px;
    z-index: 1;
    transition: opacity 1s;
    height: 60px;
  }

  footer:hover {
    cursor: default;
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */
    footer {
      padding: 10px 10px 10px 310px;
      opacity: 0;
    }

    footer:hover {
      opacity: 1;
    }
  }

  #link1Section, #link2Section {
    display: none;
  }

  #homeLink {
    background: #333;
  }

  @keyframes slide-down {
    from { margin-top: -100%; }
    to { margin-top: 100px; }
  }

  @media only screen and (min-width: 768px) {
    /* For iPads & Desktop: */
    @keyframes slide-down {
      from { margin-top: -100%; }
      to { margin-top: 0; }
    }
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     header { width: 90vw; }
     section { width: 90vw; }
  }
  
  @media all and (min-width: 768px) and (-ms-high-contrast: none), (-ms-high-contrast: active) {
     header { width: 70vw; }
     section { width: 70vw; }
  }
  `;
}

/* ============================== OUTPUTS RELEVANT JAVASCRIPT CODE ============================== */

if (firstTwoTemplates) {
  jsH3.textContent = 'Template: Top Nav Fixed / Side Nav Fixed'
  js.textContent = `
    'use strict';

    var header = document.querySelector('header');
    var link1Section = document.getElementById('link1Section');
    var link2Section = document.getElementById('link2Section');
    var homeLink = document.getElementById('homeLink');
    var link2 = document.getElementById('link2');
    var link1 = document.getElementById('link1');
    var dropdownContent = document.getElementById('dropdownContent');

    /* ==================== NAV FUNCTIONS ==================== */

    // Nav: Home Link
    function goHome() {
      header.style.display = 'block';
      link1Section.style.display = 'none';
      link2Section.style.display = 'none';
      header.style.animationName = 'slide-down';
      header.style.animationDuration = '1.5s';
      homeLink.style.backgroundColor = '#333';
      link2.style.backgroundColor = '#000';
      link1.style.backgroundColor = '#000';
      homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
      link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
      link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    }

    // Nav: Second Link
    function secondLink() {
      link2Section.style.display = 'block';
      header.style.display = 'none';
      link1Section.style.display = 'none';
      link2Section.style.animationName = 'slide-down';
      link2Section.style.animationDuration = '1.5s';
      homeLink.style.backgroundColor = '#000';
      link2.style.backgroundColor = '#333';
      link1.style.backgroundColor = '#000';
      homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
      link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
      link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    }

    // Nav: Third Link
    function thirdLink() {
      link1Section.style.display = 'block';
      header.style.display = 'none';
      link2Section.style.display = 'none';
      link1Section.style.animationName = 'slide-down';
      link1Section.style.animationDuration = '1.5s';
      homeLink.style.backgroundColor = '#000';
      link2.style.backgroundColor = '#000';
      link1.style.backgroundColor = '#333';
      homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
      link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
      link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    }

    /* ==================================== EVENT LISTENERS ==================================== */

    // Navigation Event Listeners
    homeLink.addEventListener('click', goHome);
    link2.addEventListener('click', secondLink);
    link1.addEventListener('click', thirdLink);

    // Menu Toggle for mobile
    function toggleMenu() {
      dropdownContent.classList.toggle('show');
    }

    function closeDropdown(event) {
      if (event.target !== document.getElementsByClassName('mobile')[0] && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.toggle('show');
      }
    }

    document.getElementById('dropdown').addEventListener('click', toggleMenu);
    document.addEventListener('click', closeDropdown);

    // Nav Mouseovers
    homeLink.addEventListener('mouseover', function() { this.style.backgroundColor = '${activeTemplate.colors[2]}'; });
    link2.addEventListener('mouseover', function() { this.style.backgroundColor = '${activeTemplate.colors[2]}'; });
    link1.addEventListener('mouseover', function() { this.style.backgroundColor = '${activeTemplate.colors[2]}'; });
    homeLink.addEventListener('mouseout', function() { this.style.backgroundColor = '#333'; });
    link2.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
    link1.addEventListener('mouseout', function() { this.style.backgroundColor = '#000'; });
  `;
}

/* ========================= FUNCTIONS AND EVENT LISTENERS FOR CODE.HTML ========================= */

function clickInstructionsButton() {
  instructionsDiv.style.display = 'block';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#fff';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#eee';
}

function clickHtmlButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'block';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#fff';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#eee';
}

function clickCssButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'block';
  jsOutput.style.display = 'none';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#fff';
  jsNav.style.background = '#eee';
}

function clickJsButton() {
  instructionsDiv.style.display = 'none';
  htmlOutput.style.display = 'none';
  cssOutput.style.display = 'none';
  jsOutput.style.display = 'block';
  instructionsNav.style.background = '#eee';
  htmlNav.style.background = '#eee';
  cssNav.style.background = '#eee';
  jsNav.style.background = '#fff';
}

instructionsNav.addEventListener('click', clickInstructionsButton);
htmlNav.addEventListener('click', clickHtmlButton);
cssNav.addEventListener('click', clickCssButton);
jsNav.addEventListener('click', clickJsButton);
