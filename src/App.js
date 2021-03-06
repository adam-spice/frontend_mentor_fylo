import React from 'react';

import Logo from './assets/images/logo.svg';
import iconDocument from './assets/images/icon-document.svg';
import iconFolder from './assets/images/icon-folder.svg';
import iconUpload from './assets/images/icon-upload.svg';

import './App.css';

function App() {
  return (
    <main>
      <div class='left-col'>
        <img src={Logo} id='logo' alt='logo' />
        <div class='icons'>
          <div class='icon-back'>
            <img src={iconDocument} alt='document' class='icon' />
          </div>
          <div class='icon-back'>
            <img src={iconFolder} alt='folder' class='icon' />
          </div>
          <div class='icon-back'>
            <img src={iconUpload} alt='upload' class='icon' />
          </div>
        </div>
      </div>

      <div class='right-col'>
        <h1>
          You’ve used <span>815 GB</span> of your storage
        </h1>
        <div id='bar'>
          <div>
            <div id='circle'></div>
          </div>
        </div>
        <div class='bubble'>
          <div class='bold'>185</div>
          <div>GB Left</div>
          <div class='triangle'></div>
        </div>

        <div id='marking'>
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
      </div>
    </main>
  );
}

export default App;
