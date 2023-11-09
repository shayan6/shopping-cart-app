import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Color {
  colorBlack: string;
  colorWhite: string;
  colorPrimary: string;
  colorSecondary: string;
  colorWarning: string;
  colorSuccess: string;
  colorDanger: string;
  colorYellow: string;
  colorPurple: string;
  colorPink: string;
}

interface Settings {
  theme: string;
  color: Color;
}

interface CommonState {
  menu: any[]; // Adjust the type according to your actual menu items
  loading: boolean;
  pageLoader: boolean;
  collapsed: boolean;
  postData: {
    page: number;
    limit: number;
  };
  data: any; // Adjust the type according to your actual data structure
  settings: Settings | null;
}

let defaultSetting = {
  theme: 'light',
  color: {
    colorBlack: '#001529',
    colorWhite: '#f0f2f5',
    colorPrimary: '#069bd3',
    colorSecondary: '#3b3b3b',
    colorWarning: '#fc9258',
    colorSuccess: '#01c368',
    colorDanger: '#ff4d57',
    colorYellow: '#ffeb3b',
    colorPurple: '#673ab7',
    colorPink: '#E91E63'
  }
};

const initialState: CommonState = {
  menu: [],
  loading: true,
  pageLoader: true,
  collapsed: false,
  postData: {
    page: 0,
    limit: 50,
  },
  data: {},
  settings: localStorage.getItem("settings")
    ? JSON.parse(localStorage.getItem("settings")!)
    : defaultSetting,
};

const commonSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<any[]>) => {
      state.menu = action.payload;
    },
    toggleLoader: (state) => {
      state.loading = !state.loading;
    },
    toggleCollapse: (state) => {
      state.collapsed = !state.collapsed;
    },
    setPostData: (state, action: PayloadAction<{ page: number; limit: number }>) => {
      state.postData = { ...action.payload };
    },
    setPageLoader: (state, action: PayloadAction<boolean>) => {
      state.pageLoader = action.payload;
    },
    setSettings: (state, action: PayloadAction<Settings | null>) => {
      localStorage.setItem("settings", JSON.stringify(action.payload));
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
  setSettings,
} = commonSlice.actions;

export default commonSlice.reducer;
