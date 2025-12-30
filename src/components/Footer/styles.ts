import styled from "styled-components";

export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo{
    font-size: 2.8rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    color: var(--pink);
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .social-media{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    svg{
      width: 3rem;
      height: 3rem;
      stroke: #FFF;
      transition: filter 0.25s;

      &:hover{
        filter: brightness(0.6);
      }
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  @media(max-width: 600px){
    padding: 4rem 1rem;
    
    p{
      font-size: 1.2rem;
    }
  }
`;
