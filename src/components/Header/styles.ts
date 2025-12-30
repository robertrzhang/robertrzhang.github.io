import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  .logo{
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--pink);
  }

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &:hover{
        filter: brightness(0.6);
      }

      &.active{
        color: var(--pink);
      }
      
      &.button{
        color: var(--black);
      }
    }
  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    display: none;
  }

  /* Theme toggle styles */
  input[type="checkbox"]{
    position: relative;
    width: 6rem;
    height: 3rem;
    appearance: none;
    background: #1a1a1a;
    outline: none;
    border-radius: 2rem;
    cursor: pointer;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  input:checked[type="checkbox"]{
    background: #FFF;
  }

  input[type="checkbox"]:before{
    content: '';
    position: absolute;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    top: 0.25rem;
    left: 0.25rem;
    background: var(--pink);
    transition: 0.5s;
  }

  input:checked[type="checkbox"]:before{
    left: calc(100% - 0.25rem);
    transform: translateX(-100%);
    background: var(--blue);
  }

  label[for="switch"]{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (max-width: 960px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
      position: relative;
      width: 3rem;
      height: 0.3rem;
      background: #FFF;
      cursor: pointer;
      transition: 0.5s;

      &:before,
      &:after{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: #FFF;
        transition: 0.5s;
      }

      &:before{
        top: -1rem;
      }

      &:after{
        top: 1rem;
      }

      &.active{
        background: transparent;

        &:before{
          top: 0;
          transform: rotate(45deg);
        }

        &:after{
          top: 0;
          transform: rotate(-45deg);
        }
      }
    }

    nav {
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--pink);
      top: 0;
      left: 0;
      transition: opacity 0.25s;

      &.active{
        opacity: 1;
        visibility: visible;
      }

      a{
        font-size: 2rem;
        margin: 1rem 0;
      }
    }
  }

  @media (max-width: 600px){
    padding: 1.8rem 2rem;
  }
`;
