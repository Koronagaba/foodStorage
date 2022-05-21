import "./Meal.css";
import arrow_back from "../../../icons/arrow_back.svg";
import add_circle from "../../../icons/add_circle.svg";
import SearchBar from "../../../components/stockComponents/SearchBar";

const Breakfast = () => {
  return (
    <div className="meal-container">
     
        <img src={arrow_back} alt="arrow back" className="arrow-back" />
        <h2 className="meal-title">Breakfast</h2>
   

      <div className="meal-search-bar">Search bar</div>
      {/* <SearchBar /> */}

        <img alt="food (ingredients)" className="meal-ingredients"/>
        <img alt="recipes" className="meal-recipes" />
        <img alt="favorite" className="meal-favorite" />
        <img src={add_circle} alt="create recipe" className="meal-create-recipe" />
     

      {/* <div className="nav-sorting"></div> */}

      <div>
        
      </div>

    </div>
  );
};

export default Breakfast;
