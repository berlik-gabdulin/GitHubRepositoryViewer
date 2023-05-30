import React from 'react';
import { Link } from 'react-router-dom';
import { IRepositoryCard } from '../../store/repos/reposSlice';
import { CardContainer } from './styles';

interface CardProps {
  repository: IRepositoryCard;
}

const Card: React.FC<CardProps> = ({ repository }) => {
  return (
    <CardContainer>
      <h2>{repository.name}</h2>
      <p>Stars: {repository.stargazersCount}</p>
      <p>Last Commit: {repository.lastCommit}</p>
      <p>Description: {repository.description}</p>
      <Link to={`/repo/${repository.id}`}>View Details</Link>
    </CardContainer>
  );
};

export default Card;
