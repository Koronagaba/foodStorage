import { useContext } from 'react';
import SearchBar from '../../components/stockComponents/SearchBar';
import { FoodStorageContext } from '../../context/FoodStorageContext';
import { SearchContext } from '../../context/SearchContext';
import { StockProduct } from '../../types/type';
import SingleStockProduct from './SingleStockProduct';

import './Stock.css';

const Stock = () => {
  const { stockProductsList } = useContext(FoodStorageContext);
  const { searchStock } = useContext(SearchContext);
  const filterMatchedProducts = (product: StockProduct) => {
    return product.title.toLowerCase().includes(searchStock.toLowerCase());
  };

  return (
    <div className="stock-container">
      <div className="inside-container">
        <div className="header-search-create">
          {localStorage.getItem('i18nextLng') === 'en' ? <SearchBar /> : null}
        </div>
        <>
          {stockProductsList.filter(filterMatchedProducts).map((product) => (
            <SingleStockProduct key={product.id} product={product} />
          ))}
        </>
      </div>
    </div>
  );
};

export default Stock;
