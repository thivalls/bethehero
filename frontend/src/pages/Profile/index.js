import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

import logoImg from './../../assets/logo.svg';

export default function Profile() {
  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Olá vinda, APAE</span>
        <Link
          to="/incident/new" className="button"
        >
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRICAO: </strong>
          <p>Caso teste</p>
          <strong>VALOR: </strong>
          <p>Caso teste</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRICAO: </strong>
          <p>Caso teste</p>
          <strong>VALOR: </strong>
          <p>Caso teste</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO: </strong>
          <p>Caso teste</p>
          <strong>DESCRICAO: </strong>
          <p>Caso teste</p>
          <strong>VALOR: </strong>
          <p>Caso teste</p>

          <button type="button">
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
