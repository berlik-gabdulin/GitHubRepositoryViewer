import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  AppDispatch,
  fetchRepository,
  selectError,
  selectLoading,
  selectRepository,
} from '../../store/repos/reposSlice';
import Loader from '../Loader/Loader';
import { ButtonWrapper, ViewButton } from '../RepoListItem/styles';
import {
  CardContainer,
  Description,
  Language,
  Languages,
  LeftColumn,
  OwnerInfo,
  OwnerName,
  OwnerPhoto,
  RepoName,
} from './style';

const RepoCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { login, name } = useParams<{ login: string; name: string }>();
  const repository = useSelector(selectRepository);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const repositoryLogin = login ?? '';
  const repositoryName = name ?? '';

  useEffect(() => {
    dispatch(fetchRepository({ login: repositoryLogin, name: repositoryName }));
  }, [dispatch, repositoryLogin, repositoryName]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return repository ? (
    <CardContainer>
      <LeftColumn>
        <OwnerPhoto
          src={repository?.owner.avatarUrl}
          alt={repository?.owner.login}
        />
        <Languages>
          {repository?.languages?.nodes.map((language) => (
            <Language
              key={language.name}
              primary={
                repository.primaryLanguage !== null &&
                repository.primaryLanguage.name === language.name
              }
            >
              {language.name}
            </Language>
          ))}
        </Languages>

        <ButtonWrapper>
          <ViewButton to='/'>{'<<'} Go back</ViewButton>
        </ButtonWrapper>
      </LeftColumn>
      <div>
        <RepoName>{repository?.name}</RepoName>
        <OwnerInfo>
          <OwnerName>{repository?.owner.login}</OwnerName>
        </OwnerInfo>

        <Description>{repository?.description}</Description>
        <ButtonWrapper>
          <ViewButton
            to={repository.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            View on GitHub {'>>'}
          </ViewButton>
        </ButtonWrapper>
      </div>
    </CardContainer>
  ) : null;
};

export default RepoCard;
