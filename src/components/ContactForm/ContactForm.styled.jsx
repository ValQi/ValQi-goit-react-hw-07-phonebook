import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  margin: 10px auto;
  gap: 16px;
`;

export const StyledButton = styled.button`
  margin-bottom: 10px;
  border: 1px solid #ccc;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: inline-block;
  min-width: 200px;
  height: 36px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: #fff;
  background-color: #4d7f9c;
  margin-left: 5px;
  margin-right: 5px;
  transition: background-color 300ms ease-in-out;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 3px solid #830e0e;
  border-radius: 10px;
`;
