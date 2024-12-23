import * as React from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { useLocation, useNavigate } from 'react-router-dom';

const Home = () => {
  const [catalog, seCatalog] = React.useState([]);
  const [filteredCatalog, setFilteredCatalog] = React.useState([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllCategories();
      const result = response?.data?.categories ?? [];
      seCatalog(result);
      setFilteredCatalog(
        search
          ? result.filter((item) =>
              item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()),
            )
          : result,
      );
    };
    getData();
  }, []);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) => item.strCategory.toLowerCase().includes(str.toLowerCase())),
    );
    navigate(`${pathname}?search=${str}`);
  };

  return (
    <>
      <Search callBack={handleSearch} />
      {!catalog?.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
};

export default Home;
