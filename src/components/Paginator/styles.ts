import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

interface IPageButton {
  active?: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export const PageButton = styled.button<IPageButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border: none;
  border-radius: 50%;
  background-color: ${({ active }) =>
    active ? colors.pastelMint : colors.pastelPurple};
  color: #333333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${colors.pastelOrange};
  }
`;
