import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
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
          <SearchBar />
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
