/*
 *  QB-Game Quest in Bioinformatics Serious Game
 *  Copyright (C) 2021  Jean-Christophe Taveau.
 *
 *  This file is part of QB-Game
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with QB-Game.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * Authors:
 * Jean-Christophe Taveau
 */

'use strict';

const showSection = (name) => (ev) => {
  // Switch off all the main sections
  document.querySelectorAll('.main').forEach( (section) => section.style.display = 'none');
  document.getElementById(name).style.display = 'block';
}

const cloud_sender = (scenario,lang) => {
  const trads = {
    en: [
      '<p>Drag and drop the item you want from your inventory to send it to another player...</p>',
      '<p>... Then, give him.her the following code by voice, by e-mail, by instant messaging, etc.</p>'
    ],
    fr: [
      '<p>Glissez-déposez l\'item de votre inventaire que vous voulez envoyer à un autre joueur...</p>',
      '<p>... Ensuite, donnez-lui le code suivant à haute voix, par e-mail, par messagerie instantanée, etc.</p>'
    ]
  }
  const html = `<span class="elem">section: Cloud Upload</span>${trads[lang][0]}<article id="empty-container"></article>${trads[lang][1]}`;
}

const initGUI = (scenario) => {
  const menus = [
    {buttonid:'settings',title:'Settings',sectionid:'setter'},
    {buttonid:'history',title:'History',sectionid:'historian'},
    {buttonid:'team',title:'Team',sectionid:'team_builder'},
    {buttonid:'load_session',title:'Load Session',sectionid:'session_loader'},
    {buttonid:'save_session',title:'Save Session',sectionid:'session_saver'},
    {buttonid:'chat',title:'Interrogate',sectionid:'interrogate'},
    {buttonid:'scan',title:'Scan',sectionid:'scanner'},
    {buttonid:'explore',title:'Explore',sectionid:'explorer'},
    {buttonid:'puzzle',title:'Solve',sectionid:'solver'},
    {buttonid:'cloud_upload',title:'Send in Cloud',sectionid:'cloudsender',func: cloud_sender},
    {buttonid:'cloud_download',title:'Receive from Cloud',sectionid:'cloudreceiver'},
    {buttonid:'location',title:'Location',sectionid:'moveto'}
  ];
  
  // Get language
  const lang = navigator.language || 'en';
  
  // Create all the sections required for the scenario
  
  // Update header menu
     <nav style="display: flex">
      <ul style="flex-grow: 1">
        <li class="menu"><a id="settings" class="child" href="#" title="Settings"></a></li>

  sections.forEach( (s) => {
    const item = document.createElement('li');
    item.className = 'menu';
    list.appendChild(item);
    const button = document.createElement('a');
    button.id = s.buttonid;
    button.className = 'child';
    button.href='#';
    button.title = s.title;
    item.appendChild(button);

    // Add listener
    button.addEventListener('click',showSection(s.sectionid));
  });
  

  document.getElementById('history').addEventListener('click',showSection('historian'));
  document.getElementById('team').addEventListener('click',showSection('team_builder'));
  document.getElementById('load_session').addEventListener('click',showSection('session_loader'));
  document.getElementById('save_session').addEventListener('click',showSection('session_saver'));
  document.getElementById('chat').addEventListener('click',showSection('interrogate'));
  document.getElementById('scan').addEventListener('click',showSection('scanner'));
  document.getElementById('explore').addEventListener('click',showSection('explorer'));
  document.getElementById('puzzle').addEventListener('click',showSection('solver'));
  document.getElementById('cloud_upload').addEventListener('click',showSection('cloudsender'));
  document.getElementById('cloud_download').addEventListener('click',showSection('cloudreceiver'));
 document.getElementById('location').addEventListener('click',showSection('moveto'));
}

const keypressed = (key) => (ev) => {
  console.log(`keypressed ${key}`);
}

const keyboard = (kb_layout) => {
  const layouts = {
    'azerty': [
      ['1','2','3','4','5','6','7','8','9','0'],
      ['A','Z','E','R','T','Y','U','I','O','P'],
      ['Q','S','D','F','G','H','J','K','L','M'],
      ['enter','W','X','C','V','B','N','del']
    ],
    'qwerty': [
      ['0','1','2','3','4','5','6','7','8','9'],
      ['Q','W','E','R','T','Y','U','I','O','P'],
      ['A','S','D','F','G','H','J','K','L','M'],
      ['enter','Z','X','C','V','B','N','del']
    ],
    'alphabet': [
      ['0','1','2','3','4','5','6','7','8','9'],
      ['A','B','C','D','E','F','G','H','I','J'],
      ['K','L','M','N','O','P','Q','R','S','T'],
      ['enter','U','V','W','X','Y','Z','del']
    ]
  };
    
  const icons = {
    'enter' : '<div><img src="../assets/icons/arrow-return-left.svg" alt="Entrer" class="icon"></div>',
    'del'   : '<div><img src="../assets/icons/backspace.svg" alt="Suppr" class="icon"></div>'    
  };
  
  const kboard = document.createElement('div');
  kboard.className = 'keyboard';
  layouts[kb_layout].forEach( (line) => {
    const kbline = document.createElement('div');
    kbline.className = 'keyboard-line';
    line.forEach( (key) => {
      let button;
      if (key === 'enter' || key === 'del') {
        button = document.createElement('button');
        button.className = `key big ${kb_layout}`;
        button.innerHTML = icons[key];
      }
      else {
        button = document.createElement('button');
        button.className = "key";
        button.textContent = key;
      }
      button.addEventListener('click',keypressed(key));
      kbline.appendChild(button);
    });
    kboard.appendChild(kbline);
  });
  return kboard;
}

/*
      <div  class="keyboard">
        <div  class="keyboard-line">
        <button id="key" class=""> 0 </button><button id="key" class=""> 1 </button><button id="key" class=""> 2 </button>
        <button id="key" class=""> 3 </button><button id="key" class=""> 4 </button><button id="key" class=""> 5 </button>
        <button id="key" class=""> 6 </button><button id="key" class=""> 7 </button><button id="key" class=""> 8 </button>
        <button id="key" class=""> 9 </button>
        </div>
       <div  class="keyboard-line">
        <button id="key" class=""> A </button><button id="key" class=""> Z </button><button id="key" class=""> E </button>
        <button id="key" class=""> R </button><button id="key" class=""> T </button><button id="key" class=""> Y </button>
        <button id="key" class=""> U </button><button id="key" class=""> I </button><button id="key" class=""> O </button>
        <button id="key" class=""> P </button>
        </div>
        <div  class="keyboard-line">
        <button id="key" class=""> Q </button><button  id="key" class=""> S </button><button  id="key" class=""> D </button>
        <button id="key" class=""> F </button><button id="key" class=""> G </button><button  id="key" class=""> H </button>
        <button id="key" class=""> J </button><button  id="key" class=""> K </button><button id="key" class=""> L </button>
        <button id="key" class=""> M </button>
        </div>
        <div  class="keyboard-line">
        <button  id="key" class="big azerty"><div><img src="../assets/icons/arrow-return-left.svg" alt="Entrer" class="icon"></div></button>
        <button  id="key" class=""> W </button><button  id="key" class=""> X </button><button  id="key" class=""> C </button>
        <button  id="key" class=""> V </button><button  id="key" class=""> B </button><button  id="key" class=""> N </button>
        <button  id="key" class="big azerty">
        <div data-v-4db6fa13=""><img src="../assets/icons/backspace.svg" alt="Suppr" class="icon">
        </div></button>
        </div>
      </div>
*/

