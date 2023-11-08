import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: [],
    loading: true,
    pageLoader: true,
    collapsed: false,
    postData: {
        page: 0,
        limit: 50,
    },
    data: {}, // used for send and get request
    settings: localStorage.getItem('settings') || {},
};

const commonSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.menu = action.payload;
    },
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
    setPostData: (state, action) => {
      state.postData = { ...action.payload };
    },
    setPageLoader: (state, action) => {
      state.pageLoader = action.payload;
    },
    setSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const {
    setMenu,
    toggleLoader,
    toggleCollapse,
    setPostData,
    setPageLoader,
} = commonSlice.actions;

export default commonSlice.reducer;
