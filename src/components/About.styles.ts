import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
      font-size: 1.6rem;
      font-weight: 500;
      padding: 1rem 2rem;
      background-color: #2b2b2b;
      border-radius: 0.6rem;
      transition: 0.25s;
      
      &:hover{
        transform: translateY(-5px);
        background-color: var(--pink);
      }
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--pink);
    border-bottom: 3px solid var(--pink);
    padding-bottom: 0.5rem;
  }

  h3{
    margin-top: 2rem;
    color: var(--pink);
    font-size: 2.4rem;
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    
    strong{
      color: var(--pink);
      font-weight: 700;
    }
  }

  .courses-section {
    margin-top: 2rem;
    display: grid;
    gap: 2rem;
    
    .semester {
      background-color: #2b2b2b;
      padding: 2rem;
      border-radius: 0.8rem;
      border-left: 4px solid var(--pink);
      transition: 0.3s;
      
      &:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 15px rgba(253, 181, 21, 0.2);
      }
      
      h4 {
        color: var(--pink);
        font-size: 2rem;
        margin-bottom: 1.5rem;
        margin-top: 0;
      }
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        
        li {
          font-size: 1.6rem;
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
          line-height: 1.6;
          
          &:before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--pink);
            font-size: 2rem;
            line-height: 1.6rem;
          }
          
          strong {
            color: var(--pink);
          }
        }
      }
      
      .honors {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #3a3a3a;
        color: var(--pink);
        font-size: 1.6rem;
        font-style: italic;
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }

    .courses-section {
      .semester {
        text-align: left;
        
        ul li {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media (max-width: 600px){
    margin-top: 8rem;
  }
`;
