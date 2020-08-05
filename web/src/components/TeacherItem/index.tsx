import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/22565566?s=460&u=3fd9c670ab6847482bc3ea79c91786c02f435e46&v=4" alt="Ewerson Vieira"/>
        <div>
          <strong>Ewerson Vieira</strong>
          <span>Defesa Contra As Artes Das Trevas</span>
        </div>
      </header>

      <p>
        Entusiasta dos melhores feitiços defensivos.
        <br /><br />
        Apaixonado por desarmar os oponentes e deixá-los com as opções de fugir ou se entregar.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$: 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
