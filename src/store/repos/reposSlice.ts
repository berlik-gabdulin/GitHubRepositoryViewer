import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { RootState } from '../index';
import { GET_REPOSITORIES, GET_REPOSITORY } from '../../graphql';
import client from '../../utils/apolloClient';

export interface IRepositoryList {
  id: string;
  name: string;
  stargazersCount: number;
  lastCommit: string;
  owner: {
    login: string;
  };
  url: string;
}

export interface IRepositoryCard {
  id: string;
  name: string;
  stargazersCount: number;
  lastCommit: string;
  owner: {
    avatarUrl: string;
    login: string;
  };
  primaryLanguage: {
    name: string;
  } | null;
  languages: {
    nodes: {
      name: string;
    }[];
  };
  description: string;
  url: string;
}

interface ReposState {
  repositories: IRepositoryList[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  repository: IRepositoryCard | null;
  searchQuery: string;
}

export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

const technologies = [
  'react',
  'javascript',
  'typescript',
  'python',
  'java',
  'ruby',
];
const randomIndex = Math.floor(Math.random() * technologies.length);
const randomTechnology = technologies[randomIndex];

export const fetchRepositories = createAsyncThunk<
  any,
  void,
  {
    rejectValue: string;
    getState: RootState;
  }
>('repos/fetchRepositories', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    const searchTerm = state.repos.searchQuery;
    const currentPage = state.repos.currentPage;

    const response = await client.query({
      query: GET_REPOSITORIES,
      variables: {
        searchQuery: searchTerm || randomTechnology,
        first: searchTerm ? 100 : 10,
        after: currentPage * 10 - 10,
      },
    });

    console.log(response);

    return response.data.search;
  } catch (error: any) {
    if (error.message) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An error occurred');
  }
});

export const fetchRepository = createAsyncThunk<
  any,
  { login: string; name: string },
  {
    rejectValue: string;
  }
>('repos/fetchRepository', async ({ login, name }, { rejectWithValue }) => {
  try {
    const response = await client.query({
      query: GET_REPOSITORY,
      variables: {
        login,
        name,
      },
    });

    return response.data.repository;
  } catch (error: any) {
    if (error.message) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('An error occurred');
  }
});

const reposSlice = createSlice({
  name: 'repos',
  initialState: {
    repositories: [],
    currentPage: 1,
    totalPages: 0,
    loading: false,
    error: null,
    repository: null,
    searchQuery: '',
  } as ReposState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setNextPage: (state) => {
      if (state.currentPage < state.totalPages) {
        state.currentPage += 1;
      }
    },
    setPrevPage: (state) => {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepositories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.repositories = action.payload.edges.map((edge: any) => ({
          id: edge.node.id,
          name: edge.node.name,
          stargazersCount: edge.node.stargazers.totalCount,
          lastCommit: `${new Date(edge.node.pushedAt).getDate()}.${new Date(
            edge.node.pushedAt
          ).getMonth()}.${new Date(edge.node.pushedAt).getFullYear()}`,
          owner: {
            avatarUrl: edge.node.owner.avatarUrl,
            login: edge.node.owner.login,
          },
          url: edge.node.url,
        }));
        state.totalPages = Math.floor(action.payload.edges.length / 10);
      })
      .addCase(fetchRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
          ? action.error.message
          : 'An error occurred';
      })
      .addCase(fetchRepository.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.repository = null;
      })
      .addCase(fetchRepository.fulfilled, (state, action) => {
        state.loading = false;
        state.repository = action.payload;
      })
      .addCase(fetchRepository.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
          ? action.error.message
          : 'An error occurred';
      });
  },
});

export const { setPage, setNextPage, setPrevPage, setSearchQuery } =
  reposSlice.actions;

export const selectRepositories = (state: RootState) =>
  state.repos.repositories;
export const selectCurrentPage = (state: RootState) => state.repos.currentPage;
export const selectSearchQuery = (state: RootState) => state.repos.searchQuery;
export const selectTotalPages = (state: RootState) => state.repos.totalPages;
export const selectLoading = (state: RootState) => state.repos.loading;
export const selectError = (state: RootState) => state.repos.error;
export const selectRepository = (state: RootState) => state.repos.repository;

export default reposSlice.reducer;
