import React,{useState, useEffect} from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './style.css';

import api from './../../services/api';

import logoImg from './../../assets/logo.svg';

export default function Profile() {

  const history = useHistory();
  const ong = JSON.parse(localStorage.getItem('be_the_hero_session'));
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    api.get('/profile', {
      headers: {
        Authorization: ong.id
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ong.id]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ong.id
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id ))
    } catch (error) {
      alert('erro ao deletar, tente novamente');
    }
  }

  function handleLogout() {
    localStorage.removeItem('be_the_hero_session');
    history.push('/');
  }

  return (
    <div className='profile-container'>
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Olá vinda, {ong.name}</span>
        <Link
          to="/incident/new" className="button"
        >
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
          <strong>CASO: </strong>
          <p>{incident.title}</p>
          <strong>DESCRICAO: </strong>
          <p>{incident.description}</p>
          <strong>VALOR: </strong>
          <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

          <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
            <FiTrash2 size={16} color="#a8a8b3" />
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
