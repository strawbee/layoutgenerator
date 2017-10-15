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
  activeBackground = 'url(\'background.jpg\');';
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
  document.getElementById('backgroundImage').innerHTML = '<a href="https://raw.githubusercontent.com/strawbee/layoutgenerator/master/' + activeBackground + '" target="_blank" alt="background image" title="save this image">this link</a>';
  document.getElementById('ifBackground').style.display = 'block';
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
    font-size: 16px;
    text-shadow: 1px 1px 4px ${activeTemplate.colors[2]};
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
    display: inline-block;
    padding: 30px 45px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav li:hover {
    background: ${activeTemplate.colors[2]};
    cursor: auto;
  }

  header {
    display: block;
    margin: 110px 50px 80px 50px;
    padding: 40px;
    line-height: 2em;
    text-align: center;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 3em;
    font-weight: 900;
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    white-space: nowrap;
  }

  h1:hover {
    transform: translate(10px, 0);
  }

  @keyframes h1-animation {
    from { opacity: 0; margin-right: 500px; }
    to { opacity: 1; margin-right: 0; }
  }

  header p {
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }

  section {
    position: relative;
    margin: 110px 50px 80px 50px;
    padding: 40px 50px;
    line-height: 2em;
    overflow: auto;
    border-radius: 20px;
    opacity: ${backgroundOpacity};
    background: ${sectionBackground};
    text-align: justify;
  }

  h2 {
    font-size: 3em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 40px;
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @keyframes h2-animation {
    from { margin-left: 500px; opacity: 0; }
    to { margin-left: 0px; opacity: 1; }
  }

  h2:hover {
    transform: translate(10px, 0);
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
    width: 100%;
    background: #000;
    text-align: center;
    color: #8c8c8c;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -2px 1px #333;
    padding: 20px;
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
    to { margin-top: 110px; }
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
    font-size: 16px;
    text-shadow: 1px 1px 4px ${activeTemplate.colors[2]};
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
    height: 100%;
    width: 260px;
    background: #000;
    text-align: center;
    box-shadow: 0 3px 1px #222;
    z-index: 2;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  nav li {
    padding: 30px 71px;
    background: #000;
    font-size: 1.2em;
    text-shadow: 2px 2px 2px #333;
    transition: background 1s;
  }

  nav li:hover {
    background: ${activeTemplate.colors[2]};
    cursor: auto;
  }

  header {
    display: block;
    margin: 30px 30px 30px 290px;
    padding: 30px;
    line-height: 2em;
    text-align: center;
    cursor: default;
    overflow: auto;
  }

  h1 {
    font-size: 3em;
    font-weight: 900;
    padding: 10px 30px 30px 30px;
    animation-name: h1-animation;
    animation-duration: 3s;
    transition: transform 1s;
    white-space: nowrap;
  }

  h1:hover {
    transform: translate(10px, 0);
  }

  @keyframes h1-animation {
    from { opacity: 0; margin-right: 500px; }
    to { opacity: 1; margin-right: 0; }
  }

  header p {
    margin: 20px;
  }

  header p a:hover {
    cursor: auto;
  }

  section {
    position: relative;
    margin: 30px 30px 30px 290px;
    padding: 30px;
    line-height: 2em;
    overflow: auto;
    border-radius: 20px;
    opacity: ${backgroundOpacity};
    background: ${sectionBackground};
    text-align: justify;
  }

  h2 {
    font-size: 3em;
    font-weight: 900;
    text-align: center;
    padding-bottom: 40px;
    animation-name: h2-animation;
    animation-duration: 2.5s;
    transition: transform 1s;
  }

  @keyframes h2-animation {
    from { margin-left: 500px; opacity: 0; }
    to { margin-left: 0px; opacity: 1; }
  }

  h2:hover {
    transform: translate(10px, 0);
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
    bottom: 0;*
    width: 100%;
    background: #222;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #333;
    box-shadow: 0 -1px 2px #333;
    padding: 20px 20px 20px 310px;
    z-index: 1;
    opacity: 0;
    transition: opacity 1s;
  }

  footer:hover {
    cursor: default;
    opacity: 1;
  }

  #link1Section, #link2Section {
    display: none;
  }

  #homeLink {
    background: #333;
  }

  @keyframes slide-down {
    from { margin-top: -100%; }
    to { margin-top: 30px; }
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