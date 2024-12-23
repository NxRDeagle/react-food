import CategoryItem from './CategoryItem';

const CategoryList = ({ catalog } = []) => {
  return (
    <div className="list">
      {catalog.map((item) => {
        const id = item.idCategory;
        const props = {
          id,
          name: item.strCategory,
          image: item.strCategoryThumb,
          description: item.strCategoryDescription,
        };
        return <CategoryItem key={id} {...props} />;
      })}
    </div>
  );
};

export default CategoryList;
