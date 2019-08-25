import React, { useEffect } from 'react';
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt='Tindev' />
      <ul>
        <li>
          <img src="https://avatars1.githubusercontent.com/u/4096456?v=4"
            alt="imagem do xxx" />
          <footer>
            <strong>Marco Bruno</strong>
            <p>aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaa aaaaaaaaaaa aaaaaaaaaa Iniciei minha carreira como Dev. de HMI.Apaixonado pela Web, migrei para Dev.Front-End/UX e agora trabalhando na CollabCollab com Front-End e UX</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars1.githubusercontent.com/u/4096456?v=4"
            alt="imagem do xxx" />
          <footer>
            <strong>Marco Bruno</strong>
            <p>Iniciei minha carreira como Dev. de HMI.Apaixonado pela Web, migrei para Dev.Front-End/UX e agora trabalhando na CollabCollab com Front-End e UX</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars1.githubusercontent.com/u/4096456?v=4"
            alt="imagem do xxx" />
          <footer>
            <strong>Marco Bruno</strong>
            <p>Iniciei minha carreira como Dev. de HMI.Apaixonado pela Web, migrei para Dev.Front-End/UX e agora trabalhando na CollabCollab com Front-End e UX</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
        <li>
          <img src="https://avatars1.githubusercontent.com/u/4096456?v=4"
            alt="imagem do xxx" />
          <footer>
            <strong>Marco Bruno</strong>
            <p>Iniciei minha carreira como Dev. de HMI.Apaixonado pela Web, migrei para Dev.Front-End/UX e agora trabalhando na CollabCollab com Front-End e UX</p>
          </footer>
          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="dislike" />
            </button>
            <button type="button">
              <img src={like} alt="like" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}