import styled from 'styled-components'; 

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.section`
  height: 100%;
  max-width: 800px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  
  span {
    img{
      margin-top: 20px;
      width: 120px;
      height: 120px;
    }
  }
 

  h3 { 
    margin-top: 15px;
    font-family: 'Karla', 'Karla', sans-serif;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 0px;
    color: #ffffff;
  }

  div.Site{
    margin-top: 35px;
  }

  div.Telefone{
    margin-bottom: 10px;
  }

  div{
    margin-top: 15px;
    width: 100%;
    height: 60px;
    background: #fff;


    &:hover{ 
      background: #3d3b3c;
      border: 2px solid;
    }

    a{ 
      text-decoration: none;
      color: #3d3b3c;
      font-family: 'Karla', 'Karla', sans-serif;
      letter-spacing: 1px;
      font-size: 17px;
      font-weight: 500;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover{
        color: #fff;
      }
    }
  }

  footer{ 
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    padding-bottom: 15px;
    div{
      border-radius: 20px 20px 0px 0px;
      background: rgba(0, 0, 0, 0.4);
    }
  }

  @media (max-width: 830px) {
    div{ 
      width: 92%;
      margin-left: 4%;
    }
  }

  footer{ 
    a{ 
      color: #fff;
      text-decoration: none;

      &:hover{ 
        color: #FF9000;
      }
    }
  }

`;