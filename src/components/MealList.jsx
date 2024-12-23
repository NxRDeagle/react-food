import Meal from './Meal';

const MealList = ({ meals } = []) => {
  return (
    <div className="list">
      {meals.map((item) => {
        const id = item.idMeal;
        const props = {
          id,
          name: item.strMeal,
          image: item.strMealThumb,
        };
        return <Meal key={id} {...props} />;
      })}
    </div>
  );
};

export default MealList;
