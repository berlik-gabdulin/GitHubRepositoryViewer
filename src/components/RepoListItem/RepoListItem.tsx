import React from 'react';
import {
  ButtonWrapper,
  Container,
  LastCommit,
  RepoName,
  StarCount,
  ViewButton,
} from './styles';
import { IRepositoryList } from '../../store/repos/reposSlice';

interface RepoListItemProps {
  repository: IRepositoryList;
}

const RepoListItem: React.FC<RepoListItemProps> = ({ repository }) => {
  const repoLink = `/${repository.owner.login}/${repository.name}`;

  return (
    <Container>
      <RepoName to={repoLink}>
        {repository.name} [{repository.owner.login}]
      </RepoName>
      <StarCount>Stars: {repository.stargazersCount}</StarCount>
      <LastCommit>Last Commit: {repository.lastCommit}</LastCommit>
      <ButtonWrapper>
        <ViewButton
          to={repository.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          View on GitHub {'>>'}
        </ViewButton>
      </ButtonWrapper>
    </Container>
  );
};

export default RepoListItem;
