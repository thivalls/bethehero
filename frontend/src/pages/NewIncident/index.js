import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './style.css';

import logoImg from './../../assets/logo.svg';

export default function NewIncident() {
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
        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição"/>
          <input placeholder="Valor em reais" />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
