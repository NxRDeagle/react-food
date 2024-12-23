import { Link } from 'react-router-dom';

const Meal = ({ id, name, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="category_image" />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

export default Meal;
