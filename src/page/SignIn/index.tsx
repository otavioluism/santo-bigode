import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        
        <span>
          <img src={logoImg} alt="SantoBigode"/>
        </span>
        
        <h3> 
          @barbearia_santobigode
        </h3>
    
          <div className="Site">
            <a href="https://barbearia-santo-bigode.herokuapp.com/">Nosso site!</a>
          </div>

          <div className="Instagram">
            <a href="https://www.instagram.com/barbearia_santobigode/?hl=pt-br">Siga o SB no Instagram!</a>
          </div>

          <div className="Whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5547991084972&text=%20Ol%C3%A1 Barbearia%20Santo%20Bigode!">Entre em contato via whatsapp!</a>
          </div>

          <div className="Facebook">
            <a href="https://www.facebook.com/barbSantoBigode/">Curta nossa Fanpage Oficial!</a>
          </div>

          <div>
            <a href="https://www.instagram.com/tv/CCKASg_JNup/?utm_source=ig_web_copy_link">Confira nosso vídeo!</a>
          </div>

          <div className="Telefone">
            <a href="tel:47999454227">Telefonar!</a>
          </div>


        
      </Content>
    </Container>
  );
}

export default SignIn;