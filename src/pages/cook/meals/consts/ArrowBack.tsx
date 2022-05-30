import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import arrow_back from "../../../../icons/arrow_back.svg";
import { MealsContext } from "../../../../context/MealsContext";


export const BackToCook = () => {
  const navigate = useNavigate();
  return (
    <img
      onClick={() => navigate("cook")}
      src={arrow_back}
      alt="arrow back"
      className="arrow-back"
    />
  );
};

export const BackToBreakfast = () => {
  const { breakfastList }: any = useContext(MealsContext);
  const navigate = useNavigate();

  const handleArrowBackToBreakfast = () => {
    if (breakfastList) {
      navigate("/cook/breakfast/breakfastList");
    } else {
      navigate("cook");
    }
  };

  return (
    <img
      onClick={handleArrowBackToBreakfast}
      src={arrow_back}
      alt="arrow back"
      className="arrow-back"
    />
  );
};
