import styled from 'styled-components';

export const StyledList = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const ItemName = styled.p`
  font-size: 18px;
  line-height: 1.3;
  text-align: left;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const DeleteButton = styled.button`
  border: 2px solid #ccc;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0.05em;
  cursor: pointer;
  display: inline-block;
  min-width: 120px;
  height: 24px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  color: white;
  background-color: #2c84a3;
`;