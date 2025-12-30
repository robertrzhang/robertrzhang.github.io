import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #FDB515;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-padding-top: 10rem;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--pink);
    color: var(--black);
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  body.light-mode{
    transition: 0.5s;
    background-color: #f5f5f5;
    color: #222;

    button, .button{
      background-color: var(--blue);
      color: #FFF;
      
      &:hover{
        filter: brightness(0.8);
      }
    }

    .hero-text, .about-text{
      color: #222;
      
      .social-media svg{
        stroke: var(--black);
      }
    }
    
    .hero-image .image-collage{
      opacity: 0.5;
      
      .collage-item img{
        filter: brightness(1);
        
        &:hover{
          filter: brightness(1.2);
        }
      }
    }

    .project{
      background-color: #fff !important;
      
      .body{
        color: #222;
      }
      
      h3{
        color: var(--blue);
      }

      &:hover{
        background-color: var(--pink) !important;
        .body{
          color: #fff;
        }
        
        h3{
          color: #fff;
        }
      }
    }

    header.header-fixed{
      background-color: #ffffff90;
      
      .logo{
        color: var(--blue);
      }
      
      nav a{
        color: var(--black);
        
        &.active{
          color: var(--blue);
        }
        
        &.button{
          color: #FFF;
        }
      }
      
      .menu,.menu:before,.menu:after{
        background-color: var(--black);
      }
    }

    footer.footer{
      background-color: #ffffff;
      color: var(--black);
      
      p{
        color: var(--black);
      }
      
      .logo{
        color: var(--blue);
      }
      
      svg{
        stroke: var(--black);
      }
    }

    .contacts div{
      a{
        color: var(--black);
      }
    }

    form{
      input,textarea{
        transition: 0.5s;
        border: solid 1px var(--black);
        color: var(--black);
        background-color: #fff;
        
        &::placeholder{
          transition: 0.5s;
          color: #666;
        }
      }
    }

    .hability p{
      background-color: #fff;
      color: var(--black);
      
      &:hover{
        background-color: var(--blue);
        color: #fff;
      }
    }

    .courses-section .semester{
      background-color: #fff;
      border-left-color: var(--blue);
      
      &:hover{
        box-shadow: 0 4px 15px rgba(1, 111, 185, 0.2);
      }
      
      h4{
        color: var(--blue);
      }
      
      ul li{
        color: var(--black);
        
        &:before{
          color: var(--blue);
        }
        
        strong{
          color: var(--blue);
        }
      }
      
      .honors{
        border-top-color: #e0e0e0;
        color: var(--blue);
      }
    }

    h2, h3{
      color: var(--blue) !important;
      border-bottom-color: var(--blue) !important;
    }
    
    .about-text p strong{
      color: var(--blue);
    }
  }

  @media (max-width: 960px){
    html{
      font-size: 58%;
    }
  }

  @media (max-width: 768px){
    html{
      font-size: 55%;
    }
  }

  @media (max-width: 480px){
    html{
      font-size: 50%;
    }
  }
`;
