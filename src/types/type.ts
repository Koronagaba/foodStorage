export interface StockProduct {
  title: string;
  amount: number;
  shoppingListAmount: number;
  id: string;
}

export interface At {
  nanoseconds: number;
  seconds: number;
}

export interface Date {
  day: number;
  month: number;
  year: number;
  atTime: string;
}

export interface ShoppingListProduct {
  title: string;
  amount: number;
  isEditing: boolean;
  inBag: boolean;
  id: string;
  createdAt: At;
}

export interface MealIngredient {
  title: string;
  amount: number;
  id: string;
}

export interface MergedStockProdAndShopProd {
  title: string;
  id: string;
  amount: number;
  quantity: number;
}

export interface NewStockProduct {
  title: string;
  amount: number;
  shoppingListAmount: number;
  id: string;
}

export interface EditMeal {
  title: string;
  amount: number;
  id: string;
}

export interface SingleHistoryOfCooking {
  title: string;
  amount: number;
  createdAt: At;
  nameOfMeal: string;
  id: string;
  date?: Date;
}



export interface MatchedRangeHistoryList {
  title: string;
  amount: number;
  id: string,
  details: boolean
}

export type SingleShopProductProps = {
  productOfShoppingList: ShoppingListProduct;
  // toggleEdit: (id: number, itemTitle: string, itemAmount: number, itemIsEditing: boolean) => void;
  // handleEdit: (a: number, b: string, c: number | undefined, d: number) => void; //1tttttttttttttttttttttt
  // handleDelete: (a: number) => void;
  // moveProductIntoBag: (a: string, b: string, c: number, d: boolean) => void;
  // handleSendToStock: (a: string, b: number) => void;
};


export interface ChildrenProps {
  children: React.ReactNode;
}