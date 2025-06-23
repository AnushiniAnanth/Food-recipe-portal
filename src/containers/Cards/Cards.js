import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Card from "./Card/Card";
import classes from "./Cards.module.css";
import FoodContext from "../../context/FoodContext/FoodContext";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

function Cards() {
    const context = useContext(FoodContext);
    const theme = useContext(ThemeContext);

    let loader = theme.theme === "light" ? "#212832" : "#FFF";

    let foods;

    if (!context.meals) {
        foods = (
           <p className="text-copy-primary text-center">
  Nothing to display{" "}
  <span role="img" aria-label="eyes">
    👀
  </span>
</p>

        );
    } else if (context.isLoading) {
        foods = (
            <div
                style={{ color: loader }}
                className={[classes.LaSquareSpin, classes.La2x, "mx-auto"].join(" ")}
            >
                <div></div>
            </div>
        );
    } else {
        foods = context.meals.map((food) => {
            const tags = food.strTags
                ? food.strTags.includes(",")
                    ? food.strTags.split(",")
                    : [food.strTags]
                : ["Yummy"];

            return (
                <Link
                    key={food.idMeal}
                    to={`/food/${food.idMeal}`}
                    style={{ textDecoration: "none" }}
                >
                    <Card
                        title={food.strMeal}
                        category={food.strCategory}
                        area={food.strArea}
                        thumb={food.strMealThumb}
                        tags={tags}
                    />
                </Link>
            );
        });
    }

    return <div className={classes.Cards}>{foods}</div>;
}

export default Cards;
