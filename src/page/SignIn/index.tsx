import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SantoBigode"/>
        <h3>Santo Bigode</h3>
    
          <div className="Site">
            <a href="https://barbearia-santo-bigode.herokuapp.com/">Site</a>
          </div>

          <div className="Instagram">
            <a href="https://www.instagram.com/barbearia_santobigode/?hl=pt-br">Instagram</a>
          </div>

          <div className="Whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5547991084972&text=%20Ol%C3%A1 Barbearia%20Santo%20Bigode!">Whatsapp</a>
          </div>

          <div className="Telefone">
            <a href="tel:47999454227">Telefonar</a>
          </div>

          <div className="Facebook">
            <a href="https://www.facebook.com/barbSantoBigode/">Curta nossa Fanpage Oficial!</a>
          </div>
        
      </Content>
    </Container>
  );
}

export default SignIn;