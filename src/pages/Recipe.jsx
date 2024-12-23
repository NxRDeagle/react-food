import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recipe, setRecipe] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      const response = await getMealById(id);
      setRecipe(response.data.meals[0]);
    };
    getData();
  }, [id]);

  return (
    <>
      {!recipe ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt="meal_image" />
          <div className="card-content">
            <h1>{recipe.strMeal}</h1>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
            <p>{recipe.strInstructions}</p>
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes('Ingredient') && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
            {recipe.strYoutube && (
              <div style={{ margin: '2rem 0 0 1.5rem' }} className="row">
                <h5>Video Recipe</h5>
                <iframe
                  title={id}
                  src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      )}
      <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}>
        Go Back
      </button>
    </>
  );
};

export default Recipe;
