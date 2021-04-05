import styled from 'styled-components';

export const Section = styled.section`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-primary);
  margin: 0 auto;
`;

Section.Img = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid var(--color-text-primary);
  margin-bottom: 20px;
`;

Section.Link = styled.a`
  text-decoration: none;
  margin: 0 auto;
  margin-bottom: 20px;
`;

Section.H1 = styled.h1`
  font-size: 32px;
  color: var(--color-text-light);
  transition: all ease-in .3s;

  &:hover {
    color: var(--color-text-primary);
  }
`;

Section.P = styled.p`
  color: var(--color-text-light);
  font-size: 1rem;
  margin-bottom: 20px;
`;

Section.Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    color: var(--color-text-light);


    svg {
      margin-right: 5px;
      fill: var(--color-text-primary);
    }

    a {
      color: var(--color-text-light);
      text-decoration: none;
      transition: all ease-in .3s;

      &:hover {
        color: var(--color-text-primary);
      }
    }
  }
`;


Section.DivCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
  background-color: var(--color-secondary);
  padding: 10px;
  border-radius: 5px;
  color: var(--color-text-primary);
  margin: 0 20px;
  }
`;