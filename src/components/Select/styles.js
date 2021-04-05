import styled from 'styled-components';

export const Form = styled.form`
  text-align: center;
`;

Form.Div = styled.div``;

Form.Div.Input = styled.input`
  width: 300px;
  padding: 10px 0 10px 10px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-sizing: border-box;
`;

Form.Div.Button = styled.button`
  padding: 10px 20px;
  border-radius: 0 2px 2px 0;
  border: none;
  outline: none;
  position: relative;
  left: -12px;
  cursor: pointer;
  color: var(--color-text-secondary);
  background-color: var(--color-third);
`;