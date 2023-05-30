import React, { useEffect } from 'react';
import SearchInput from '../SearchInput';
import RepoList from '../RepoList';
import Paginator from '../Paginator';
import { HomePageContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  fetchRepositories,
  selectCurrentPage,
  selectLoading,
  selectSearchQuery,
} from '../../store/repos/reposSlice';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const loading = useSelector(selectLoading);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [searchQuery, currentPage, dispatch]);

  return (
    <HomePageContainer>
      <SearchInput />
      <RepoList />
      {searchQuery && !loading ? <Paginator /> : null}
    </HomePageContainer>
  );
};

export default HomePage;
