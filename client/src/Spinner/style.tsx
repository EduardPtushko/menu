import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  `;

export const Ripple = styled.div`
    display: block;
    position: relative;
    top: 3rem;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    div {
        position: absolute;
        border: 4px solid var(--clr-grey-5);
        opacity: 1;
        border-radius: 50%;
        animation: ${rippleAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;
