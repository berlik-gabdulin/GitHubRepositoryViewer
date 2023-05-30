import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

interface ILanguage {
  primary: boolean;
}

const CardContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  width: 100%;
  max-width: 800px;
  margin: 50px auto 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`;
const LeftColumn = styled.div`
  width: 180px;
  margin-right: 32px;
`;
const RepoName = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 0 10px;
  overflow-wrap: anywhere;
`;

const OwnerInfo = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const OwnerPhoto = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const OwnerName = styled.p`
  font-size: 18px;
`;

const Languages = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const Language = styled.span<ILanguage>`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 4px 8px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  background-color: ${({ primary }) => (primary ? colors.pastelTeal : '#fff')};
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 18px;
`;

export {
  CardContainer,
  ContentContainer,
  LeftColumn,
  RepoName,
  OwnerInfo,
  OwnerPhoto,
  OwnerName,
  Languages,
  Language,
  Description,
};
