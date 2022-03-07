import styled, {css} from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.div`
`;

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  input[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.rem;
    transition: filter 300ms ease-in-out;

    &:hover{
      filter: brightness(0.9)
    }
  }

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

type RadioBoxProps = {
  isActive: boolean,
  activeColor: "green" | "red";
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D',
}

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ isActive, activeColor })=> css`
    width: 100%;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 200ms border-color ease-in-out;
    background: ${isActive ? transparentize(0.9 ,colors[activeColor]) : 'transparent' };
    &.income {

    }

    &.outcome{
    }

    &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
    }

    & img {
      width: 20px;
      height: 20px;
      margin-right: 1rem;
    }

    & span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
  `}
`
