export interface Shop {
  id: string;
  name: string;
  sortOrder: number;
}

export interface ShopState {
  shops: Shop[];
}

export interface CartItem {
  id: string;
  name: string;
  shop: string;
}

export interface Color {
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

export interface Settings {
  theme: "light" | "dark" | undefined;
  color: Color;
}

export interface CommonState {
  menu: any[];
  loading: boolean;
  pageLoader: boolean;
  collapsed: boolean;
  postData: {
    page: number;
    limit: number;
  };
  data: any;
  settings: Settings | null;
}
