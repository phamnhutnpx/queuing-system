import React from 'react';

import { Input } from 'antd';
import icons from '../../shared/assests/icons';

import './styles.scss';
const SearchCoponent: React.FC = () => {
  const handleSearch = (value: string) => console.log(value);

  return (
    <>
      <div className="search">
        <Input placeholder="Nhập từ khóa" className="search-input" />

        <div className="search-icon">
          <img src={icons.searchIcon} alt="search-icon" />
        </div>
      </div>
    </>
  );
};

export default SearchCoponent;
