import styled from "styled-components"

export const Container = styled.section`
  background-color: var(--gray);
  min-height: 100vh;
`;

export const FormContainer = styled.div`
  background-color: var(--dark-color);
  width: 100%;
  height: 8.75rem;
  padding: 1rem 0;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, .2);

  @media screen and (max-width: 800px){
    padding-bottom: 0;
  }

  h3{
    color: var(--light-gray);
    position: absolute;
    left: 1rem;
    top: 1rem;
    font-size: 1.75rem;
    letter-spacing: .1rem;
    span{
      color: var(--beige);
    }

    @media screen and (max-width: 800px){
      font-size: 1.25rem;
      left: .5rem;
      top: .25rem;
    }

  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 90vw;
  max-width: 800px;
  margin: 0 auto;
  gap: 8px;

  
  input{
    height: 2.5rem;
    border-radius: .5rem;
    border: none;
    font-size: .875rem;
    padding: 0 .5rem;
    color: var(--dark-gray);
  }

  .btn-wrapper{
    display: flex;
    flex-direction: column;
    gap: .5rem;

    button{
      text-transform: uppercase;
      padding: .25rem .5rem;
      border-radius: .25rem;
      border: none;
      cursor: pointer;
      background-color: var(--beige);
      color: var(--drak-color);
      letter-spacing: .1rem;
      font-weight: 600;
      transition: background-color .2s;

      &:hover{
        background-color: var(--light-gray);
      }
    }
  }

  @media screen and (max-width: 480px){
    flex-direction: column;

    input{
      padding: 0 .25rem;
    }

    .btn-wrapper{
      flex-direction: row;
    }
  }
`;

export const ColorContainer = styled.div`
  display: grid;
  min-height: calc(100vh - 8.75rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));

  .color{
    background-color: aqua;
  }
`;