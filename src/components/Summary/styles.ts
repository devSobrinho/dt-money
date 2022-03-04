import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    max-width: 22.5rem;
    max-height: 8.5rem;

    header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;

    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;

