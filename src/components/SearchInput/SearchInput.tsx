import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  setSearchQuery,
  selectSearchQuery,
  setPage,
} from '../../store/repos/reposSlice';
import { ClearBtn, InputStyled, SearchInputContainer } from './styles';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector(selectSearchQuery);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [typingTimeout, setTypingTimeout] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchTerm(input);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = window.setTimeout(() => {
      dispatch(setPage(1));
      dispatch(setSearchQuery(input));
    }, 500);

    setTypingTimeout(timeout);
  };

  const handleInputClear = () => dispatch(setSearchQuery(''));

  return (
    <SearchInputContainer>
      <InputStyled
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Start type here...'
      />
      <ClearBtn onClick={handleInputClear}>Clear</ClearBtn>
    </SearchInputContainer>
  );
};

export default SearchInput;
