import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors, shadows, sizes, transition } from './../../styles/theme';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${sizes.maxWidth};
  margin: 24px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${shadows.light};
  background-color: #ffffff;
  box-sizing: border-box;
  transition: ${transition};
  &:hover {
    box-shadow: ${shadows.lightHover};
  }
`;

export const RepoName = styled(Link)`
  font-size: 20px;
  margin: 0 0 10px 0;
  font-weight: bolder;
  text-transform: uppercase;
  text-decoration: none !important;
  overflow-wrap: anywhere;
  color: ${colors.pastelGreen};
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StarCount = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const LastCommit = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export const ViewButton = styled(Link)`
  display: inline-block;
  padding: 5px 20px;
  border-radius: 20px;
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
