import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist.js';
// import data from './src/api.json'

// console.log('Hola mundo!');

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizar, donde lo hare);
// const holaMundo = <h1>Hola Estudiante!</h1>;

render(<Home />, app);
