import { useSelector } from 'react-redux';
import {
  selectRepositories,
  selectLoading,
  selectError,
  selectCurrentPage,
} from '../../store/repos/reposSlice';
import { RepoListContainer } from './styles';
import RepoListItem from '../RepoListItem/RepoListItem';
import Loader from '../Loader/Loader';

const RepoList: React.FC = () => {
  const repositories = useSelector(selectRepositories);
  const currentPage = useSelector(selectCurrentPage);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <RepoListContainer>
        <div>Error: {JSON.stringify(error)}</div>
      </RepoListContainer>
    );
  }

  return (
    <RepoListContainer>
      {repositories
        .slice(currentPage * 10 - 10, currentPage * 10)
        .map((repository) => (
          <RepoListItem key={repository.id} repository={repository} />
        ))}
    </RepoListContainer>
  );
};

export default RepoList;
