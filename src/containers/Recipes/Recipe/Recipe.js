import React, { useState, useEffect, Fragment, useContext } from "react";
import axios from "axios";
import classes from "./Recipe.module.css";
import Table from "../Table/Table";
import ThemeContext from "../../../context/ThemeContext/ThemeContext";

function Recipe(props) {
    const context = useContext(ThemeContext);

    const [recipe, setRecipe] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`)
            .then((res) => {
                if (res.data.meals && res.data.meals.length > 0) {
                    setRecipe(res.data.meals[0]);
                }
                setLoading(false);
            });
        // eslint-disable-next-line
    }, []);

    const themeColor = context.theme === "light" ? "#212832" : "#FFF";

    if (loading) {
        return (
            <div className={props.expand}>
                <div
                    style={{ color: themeColor }}
                    className={[classes.LaSquareSpin, classes.La2x, "mx-auto mt-24"].join(" ")}
                >
                    <div></div>
                </div>
            </div>
        );
    }

    if (!recipe) {
        return null;
    }

    // Clean instruction parsing
    const instructions = recipe.strInstructions
        ? recipe.strInstructions.split(".").filter((line) => line.trim() !== "")
        : [];

    // Get ingredients and measurements
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            const amount = !measure || measure.trim() === "" ? "As per taste" : measure.trim();
            ingredients.push([ingredient.trim(), amount]);
        }
    }

    // YouTube video embed
    const videoUrl = recipe.strYoutube
        ? `https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`
        : null;

    return (
        <Fragment>
            <div className={props.expand}>
                <div className="container p-12">
                    {/* Hero Section */}
                    <div className="flex flex-row lg:flex-col mt-4 mb-8">
                        <div className="p-6 my-auto">
                            <a
                                href={recipe.strSource || `/food/${recipe.idMeal}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={recipe.strMealThumb}
                                    className={[classes.Image, "shadow-xl"].join(" ")}
                                    alt={recipe.strMeal}
                                />
                            </a>
                        </div>
                        <div className="container">
                            <h1 className="text-6xl text-copy-primary lg:text-center leading-tight mb-2 pl-6 py-2">
                                {recipe.strMeal}
                            </h1>
                            <div className="container lg:mx-auto pl-6 py-1 w-5/6">
                                <Table ingredients={ingredients} />
                            </div>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="container px-6 mt-6 mb-12">
                        <h1 className="text-4xl text-copy-primary text-center font-bold py-2">
                            How to Cook this?{" "}
                            <span role="img" aria-label="icon">
                                😋
                            </span>
                        </h1>
                        <p className="text-lg text-gray-800 text-justify sm:text-left px-12 md:px-4 sm:px-0 my-4 py-6">
                            {instructions.join(". ")}.
                        </p>
                    </div>

                    {/* Video */}
                    {videoUrl && (
                        <div className={[classes.VideoContainer, "mx-auto shadow-2xl"].join(" ")}>
                            <iframe
                                title={recipe.strMeal}
                                width="315"
                                height="560"
                                src={videoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

export default Recipe;
