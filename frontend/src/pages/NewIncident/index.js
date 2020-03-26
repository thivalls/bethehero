import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from './../../services/api';

import './style.css';

import logoImg from './../../assets/logo.svg';

export default function NewIncident() {
  const ong = JSON.parse(localStorage.getItem('be_the_hero_session'));
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const data = {
    title,
    description,
    value
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post('/incidents', data, {
        headers: {
          Authorization: ong.id
        }
      });
      alert('Incident cadastrado com sucesso');
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar, tente novamente');
    }
  }

  return (
    <div className='newincident-container'>
      <div className="container">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreava o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
