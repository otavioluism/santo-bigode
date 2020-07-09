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

  img{ 
    margin-top: 40px;
    width: 180px;
  }

  h3 { 
    margin-top: 15px;
    font-weight: 400;
  }

  div.Site{
    margin-top: 50px;
  }

  div.Facebook{
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
      color: #3D3B3C;
      font-size: 20px;
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