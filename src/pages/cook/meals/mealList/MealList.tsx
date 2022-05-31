import { FC } from "react";

import "./MealList.css";

import { MealIngredient } from "../../../../types/type";
import AddMoreButton from "./AddMoreButton";
import EmptyList from "./EmptyList";

interface MealListProps {
  collection: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({ collection, iconName, altProp, path }) => {
  const displayList = collection.map((doc: MealIngredient) => (
    <div className="typesOfMeals-list" key={doc.id}>
      <p>{doc.title}</p>
      <p>{doc.amount}</p>
    </div>
  ));

  return (
    <div className="typesOfMeals-container">
      <div className="typesOfMeals-header">
        <img src={iconName} alt={altProp} />
      </div>
      {collection.length ? displayList : <EmptyList title={path}/>}
      <AddMoreButton path={path} collection={collection}/> 
    </div>
  );
};

export default MealList;
