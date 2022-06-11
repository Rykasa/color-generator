import styled from "styled-components";

export const Color = styled.div<{hex: string, type: string}>`
  background-color: #${({hex}) => hex};
  font-size: .875rem;
  cursor: pointer;

  .color-percent{
    display: block;
    text-align: right;
    margin-top: .5rem;
    margin-right: .5rem;
    color: ${({type}) => type === 'shade' ? 'var(--light-gray)' : 'var(--dark-color)'};
    font-weight: 500;
  }

  .color-hex-value{
    text-align: left;
    margin-left: .5rem;
    text-transform: uppercase;
    color: ${({type}) => type === 'shade' ? 'var(--light-gray)' : 'var(--dark-color)'};
  }

  .copy-alert{
    color: var(--gray);
    text-transform: uppercase;
    text-align: center;
    margin-top: 1rem;
    letter-spacing: .1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 900px){
    font-size: 0.75rem;
  }
`;