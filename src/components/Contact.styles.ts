import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    place-items: center;
    margin-top: 1.5rem;
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background-color: var(--green);
      border-radius: 1.4rem;
      padding: 1.6rem 2.8rem;
      transition: background-color 0.25s;
      
      svg{
        width: 4rem;
        stroke: var(--black);
      }
      
      a{
        color: var(--black);
        font-weight: 500;
      }
      
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
        svg{
          stroke: #FFF;
        }
      }
    }
  }

  .form-container{
    margin-top: 3rem;
    display: grid;
    place-items: center;
    
    h2{
      text-align: center;
      margin-bottom: 2rem;
    }
    
    form{
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      gap: 1rem;
      width: 100%;
      
      input, textarea{
        width: 60rem;
        padding: 1rem 2rem;
        border-radius: 1.6rem;
        outline: none;
        border: none;
        background: none;
        border: 1px solid #FFF;
        color: white;
        font-weight: 600;
        
        &::placeholder{
          color: #FFF;
        }
      }

      textarea{
        height: 20rem;
        overflow-y: auto;
        resize: none;
      }

      button{
        padding: 1rem 6rem;
        text-transform: uppercase;
        
        &:disabled{
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    }
  }

  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
      }
    }
    
    .form-container{
      form{
        input, textarea{
          width: 100%;
        }
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 8rem;
  }
`;
