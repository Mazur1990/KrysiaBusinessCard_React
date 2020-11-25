import React from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import { ParallaxProvider } from 'react-scroll-parallax';

import {Navbar} from "./components/Navbar/Navbar"

import {Front} from "./sections/Front/Front"
import {Omnie} from "./sections/Omnie/Omnie"
import {ZakresUslug} from "./sections/ZakresUslug/ZakresUslug"
import {Gabinet} from "./sections/Gabinet/Gabinet"
import {Kontakt} from "./sections/Kontakt/Kontakt"

function App() {
  return (
    <div>
        <Navbar />
        <Front />
        <ParallaxProvider>
          <Omnie />
        </ParallaxProvider>
        <ZakresUslug />
        <Gabinet />
        <Kontakt />
    </div>
  );
}

export default App;
