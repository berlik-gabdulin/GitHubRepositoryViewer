#!/bin/bash

# Создание папок
mkdir -p src/components/Card
mkdir -p src/components/Paginator
mkdir -p src/components/RepoList
mkdir -p src/components/SearchInput
mkdir -p src/graphql
mkdir -p src/store/repos
mkdir -p src/utils
mkdir -p src/styles

# Создание файлов компонентов
touch src/components/Card/Card.tsx
touch src/components/Card/index.ts
touch src/components/Card/styles.ts

touch src/components/Paginator/Paginator.tsx
touch src/components/Paginator/index.ts
touch src/components/Paginator/styles.ts

touch src/components/RepoList/RepoList.tsx
touch src/components/RepoList/index.ts
touch src/components/RepoList/styles.ts

touch src/components/SearchInput/SearchInput.tsx
touch src/components/SearchInput/index.ts
touch src/components/SearchInput/styles.ts

# Создание файлов GraphQL
touch src/graphql/queries.ts
touch src/graphql/index.ts

# Создание файлов стейта
touch src/store/repos/reposSlice.ts
touch src/store/repos/index.ts
touch src/store/index.ts

# Создание файлов утилит
touch src/utils/api.ts

# Создание глобальных стилей
touch src/styles/globalStyles.ts

# Заполнение файла Card.tsx
cat << EOF > src/components/Card/Card.tsx
import React from 'react';
import { CardContainer } from './styles';

const Card: React.FC = () => {
  return <CardContainer>Card component</CardContainer>;
};

export default Card;
EOF

# Заполнение файла Card/index.ts
echo "export { default } from './Card';" > src/components/Card/index.ts

# Заполнение файла Card/styles.ts
echo "import styled from '@emotion/styled';

export const CardContainer = styled.div`
  /* стили компонента Card */
`;
" > src/components/Card/styles.ts

# Заполнение файла Paginator.tsx
cat << EOF > src/components/Paginator/Paginator.tsx
import React from 'react';
import { PaginatorContainer } from './styles';

const Paginator: React.FC = () => {
  return <PaginatorContainer>Paginator component</PaginatorContainer>;
};

export default Paginator;
EOF

# Заполнение файла Paginator/index.ts
echo "export { default } from './Paginator';" > src/components/Paginator/index.ts

# Заполнение файла Paginator/styles.ts
echo "import styled from '@emotion/styled';

export const PaginatorContainer = styled.div`
  /* стили компонента Paginator */
`;
" > src/components/Paginator/styles.ts

# Заполнение файла RepoList.tsx
cat << EOF > src/components/RepoList/RepoList.tsx
import React from 'react';
import { RepoListContainer } from './styles';

const RepoList: React.FC = () => {
  return <RepoListContainer>RepoList component</RepoListContainer>;
};

export default RepoList;
EOF

# Заполнение файла RepoList/index.ts
echo "export { default } from './RepoList';" > src/components/RepoList/index.ts

# Заполнение файла RepoList/styles.ts
echo "import styled from '@emotion/styled';

export const RepoListContainer = styled.div`
  /* стили компонента RepoList */
`;
" > src/components/RepoList/styles.ts

# Заполнение файла SearchInput.tsx
cat << EOF > src/components/SearchInput/SearchInput.tsx
import React from 'react';
import { SearchInputContainer } from './styles';

const SearchInput: React.FC = () => {
  return <SearchInputContainer>SearchInput component</SearchInputContainer>;
};

export default SearchInput;
EOF

# Заполнение файла SearchInput/index.ts
echo "export { default } from './SearchInput';" > src/components/SearchInput/index.ts

# Заполнение файла SearchInput/styles.ts
echo "import styled from '@emotion/styled';

export const SearchInputContainer = styled.div`
  /* стили компонента SearchInput */
`;
" > src/components/SearchInput/styles.ts

# Заполнение файла queries.ts
cat << EOF > src/graphql/queries.ts
// Здесь должны быть ваши запросы GraphQL
EOF

# Заполнение файла index.ts в папке graphql
echo "export * from './queries';" > src/graphql/index.ts

# Заполнение файла reposSlice.ts
cat << EOF > src/store/repos/reposSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const reposSlice = createSlice({
  name: 'repos',
  initialState: {},
  reducers: {},
});

export default reposSlice.reducer;
EOF

# Заполнение файла index.ts в папке repos
echo "export { default } from './reposSlice';" > src/store/repos/index.ts

# Заполнение файла index.ts в папке store
echo "import { combineReducers } from 'redux';
import reposReducer from './repos';

const rootReducer = combineReducers({
  repos: reposReducer,
});

export default rootReducer;
" > src/store/index.ts

# Заполнение файла api.ts
cat << EOF > src/utils/api.ts
// Здесь должен быть ваш код для взаимодействия с API
EOF

# Заполнение файла globalStyles.ts
echo "import { Global, css } from '@emotion/react';

const globalStyles = css`
  /* глобальные стили */
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;
" > src/styles/globalStyles.ts
