import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  selectCurrentPage,
  selectTotalPages,
  setPage,
} from '../../store/repos/reposSlice';
import { PaginationContainer, PageButton } from './styles';

const Pagination: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const handlePageClick = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <PaginationContainer>
      {[...Array(totalPages)].map((_, index) => (
        <PageButton
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          active={index + 1 === currentPage}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
