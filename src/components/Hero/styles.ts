import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  position: relative;
  min-height: 80vh;
  padding-bottom: 10rem;
  
  .hero-text{
    position: relative;
    z-index: 2;
    
    & > p{
      font-size: 1.8rem;
    }
    
    h1{
      font-size: 7rem;
      margin: 1rem 0;
    }

    h3{
      color: var(--pink);
      margin: 1rem 0;
      font-size: 3rem;
    }

    p.small-resume {
      margin-bottom: 5rem;
      font-size: 1.8rem;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;
    position: relative;
    z-index: 2;

    svg{
      font-size: 3rem;
      width: 3.5rem;
      color: #FFF;
      transition: filter 0.25s;
      
      &:hover{
        filter: brightness(0.6);
      }
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
    position: relative;
    z-index: 2;
  }

  .hero-image{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    overflow: visible;
    
    .image-collage{
      position: relative;
      width: 100%;
      height: 100%;
      opacity: 0.4;
      
      .collage-item{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: all;
        
        &:nth-child(1){
          top: 2%;
          right: 38%;
          width: 280px;
          height: 280px;
          transform: rotate(-8deg);
        }
        
        &:nth-child(2){
          top: 8%;
          right: 15%;
          width: 350px;
          height: 350px;
          transform: rotate(5deg);
        }
        
        &:nth-child(3){
          top: 5%;
          right: 3%;
          width: 260px;
          height: 260px;
          transform: rotate(-12deg);
        }
        
        &:nth-child(4){
          top: 28%;
          right: 32%;
          width: 310px;
          height: 310px;
          transform: rotate(10deg);
        }
        
        &:nth-child(5){
          top: 32%;
          right: 8%;
          width: 290px;
          height: 290px;
          transform: rotate(-6deg);
        }
        
        &:nth-child(6){
          top: 38%;
          right: 48%;
          width: 240px;
          height: 240px;
          transform: rotate(15deg);
        }
        
        &:nth-child(7){
          bottom: 28%;
          right: 55%;
          width: 270px;
          height: 270px;
          transform: rotate(-10deg);
        }
        
        &:nth-child(8){
          bottom: 22%;
          right: 25%;
          width: 320px;
          height: 320px;
          transform: rotate(7deg);
        }
        
        &:nth-child(9){
          bottom: 8%;
          right: 45%;
          width: 300px;
          height: 300px;
          transform: rotate(-5deg);
        }
        
        &:nth-child(10){
          bottom: 2%;
          right: 5%;
          width: 340px;
          height: 340px;
          transform: rotate(12deg);
        }
        
        img{
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: brightness(1.2);
          transition: filter 0.3s ease, transform 0.3s ease;
        }
        
        &:hover img{
          filter: brightness(1.4);
          transform: scale(1.08);
        }
      }
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      position: relative;
      min-height: 400px;
      margin-top: 5rem;
      
      .image-collage{
        opacity: 0.18;
        
        .collage-item{
          &:nth-child(1){
            width: 160px;
            height: 160px;
            right: 52%;
            top: 2%;
            transform: rotate(-8deg);
          }
          
          &:nth-child(2){
            width: 200px;
            height: 200px;
            right: 20%;
            top: 8%;
            transform: rotate(5deg);
          }
          
          &:nth-child(3){
            width: 150px;
            height: 150px;
            right: 3%;
            top: 5%;
            transform: rotate(-12deg);
          }
          
          &:nth-child(4){
            width: 180px;
            height: 180px;
            right: 42%;
            top: 28%;
            transform: rotate(10deg);
          }
          
          &:nth-child(5){
            width: 165px;
            height: 165px;
            right: 12%;
            top: 32%;
            transform: rotate(-6deg);
          }
          
          &:nth-child(6){
            width: 140px;
            height: 140px;
            right: 58%;
            top: 38%;
            transform: rotate(15deg);
          }
          
          &:nth-child(7){
            width: 155px;
            height: 155px;
            right: 65%;
            bottom: 28%;
            transform: rotate(-10deg);
          }
          
          &:nth-child(8){
            width: 185px;
            height: 185px;
            right: 30%;
            bottom: 22%;
            transform: rotate(7deg);
          }
          
          &:nth-child(9){
            width: 170px;
            height: 170px;
            right: 55%;
            bottom: 8%;
            transform: rotate(-5deg);
          }
          
          &:nth-child(10){
            width: 195px;
            height: 195px;
            right: 5%;
            bottom: 2%;
            transform: rotate(12deg);
          }
        }
      }
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
    
    .hero-text{
      h1{
        font-size: 4rem;
      }
    }
  }

  @media(max-width: 480px){
    margin-top: 45%;
  }
`;
