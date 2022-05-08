export interface ProductList {
  title: string;
  amount: number;
  id: number;
  
}

export interface ShopList {
  title: string;
  amount: number;
  isEditing: boolean;
  inBag: boolean;
  id: number;
}

// export type SingleItemProps = {
//   item: ShopList;
//   toggleEdit: (id: number, itemTitle: string, itemAmount: number, itemIsEditing: boolean) => void;
//   handleEdit: (a: number, b: string, c: number | undefined, d: number) => void; //1tttttttttttttttttttttt
//   handleDelete: (a: number) => void;
//   moveProductIntoBag: (a: number, b: string, c: number, d: boolean) => void;
//   handleSendToStock: (a: string, b: number) => void;
// };
export type SingleItemProps = {
    item: ShopList;
    toggleEdit: (id: number, itemTitle: string, itemAmount: number, itemIsEditing: boolean) => void;
    handleEdit: (a: number, b: string, c: number | undefined, d: number) => void; //1tttttttttttttttttttttt
    handleDelete: (a: number) => void;
    moveProductIntoBag: (a: number, b: string, c: number, d: boolean) => void;
    handleSendToStock: (a: string, b: number) => void;
  };


// export interface ToggleEditProps {
//   id: number | undefined;
//   itemTitle: string;
//   itemAmount: number;
//   itemIsEditing: boolean;
// }

// export interface DeleteItemProps {
//   id: number
// }

// export interface EditItemFromShoppingListProps {
//   id: number;
//   itemTitle: string;
//   editAmount: number;
//   itemAmount: number;
// }

// export interface MoveProductIntoBagProps {
//   id: number;
//   itemTitle: string;
//   itemAmount: number;
//   itemInBag: number;
// }

// export interface HandleSendToStockProps {
//   itemTitle: string;
//   itemAmount: number;
// }