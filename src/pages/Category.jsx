import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredByCategory } from '../api';
import Preloader from '../components/Preloader';
import MealList from '../components/MealList';

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const response = await getFilteredByCategory(name);
      setMeals(response?.data?.meals ?? []);
    };
    getData();
  }, [name]);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          navigate(-1);
        }}>
        Go Back
      </button>
      {!meals?.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
};

export default Category;
