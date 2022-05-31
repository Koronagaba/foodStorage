import { FC } from "react";

import "./MealList.css";

import { MealIngredient } from "../../../../types/type";
import AddMoreButton from "../AddMoreButton";

interface MealListProps {
  nameOfCollection: any;
  iconName: string;
  altProp: string;
  path: string;
}

const MealList: FC<MealListProps> = ({ nameOfCollection, iconName, altProp, path }) => {
  const displayList = nameOfCollection.map((doc: MealIngredient) => (
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
      {displayList}
      <AddMoreButton path={path} />
    </div>
  );
};

export default MealList;
