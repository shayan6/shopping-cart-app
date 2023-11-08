export interface Shop {
    id: string;
    name: string;
    sortOrder: number;
}
  
// Define the ShopState type
export interface ShopState {
    shops: Shop[]; // An array of Shop objects
}

export interface CartItem {
    id: string;
    name: string;
    shop: string;
}

export type CommonState = Record<string, any>;