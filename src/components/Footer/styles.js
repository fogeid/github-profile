import styled from 'styled-components';

export const Footer = styled.footer`
  text-align: center;
  background-color: var(--color-secondary);
  margin-top: auto;

  p {
    font-family: var(--font-primary);
    font-size: .75rem;
    color: var(--color-text-light);
    padding: 10px;

    a {
      font-weight: bold;
      text-decoration: none;
      color: var(--color-text-light);
    }
  }
`;