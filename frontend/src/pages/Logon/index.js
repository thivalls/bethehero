import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from './../../services/api';

import './style.css';
import heroesImg from './../../assets/heroes.png';
import logoImg from './../../assets/logo.svg';

export default function Logon() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handlerLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      localStorage.setItem('be_the_hero_session', JSON.stringify({id: id, name: response.data.name}));
      history.push('/profile');
    } catch (err) {
      alert('Este ID não existe.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>
        <form onSubmit={handlerLogin}>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button type="submit" className="button">Entrar</button>
          <Link className="back-link" to="/register">
          <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Imagem dos Heróis"/>
    </div>
  );
}

