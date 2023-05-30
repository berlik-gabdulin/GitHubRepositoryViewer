import { colors } from './../../styles/theme';
import styled from '@emotion/styled';
import { shadows, sizes, transition } from '../../styles/theme';

export const SearchInputContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

export const InputStyled = styled.input`
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${sizes.maxWidth};
  margin: 24px auto;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: ${shadows.light};
  background-color: ${colors.secondary};
  color: #fff;
  box-sizing: border-box;
  transition: ${transition};
  border: none;
  &:focus,
  &:hover {
    box-shadow: ${shadows.lightHover};
    outline: none;
  }
`;

export const ClearBtn = styled.button`
  position: absolute;
  top: 9px;
  right: 10px;
  border: none;
  padding: 10px 20px;
  border-radius: 20px 6px 6px 20px;
  background-color: ${colors.primary};
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  box-shadow: ${shadows.light};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${colors.pastelOrange};
  }
`;
