import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchImage } from './imageSlice';

const ImageSearch = () => {
  const [keyword, setKeyword] = useState('');
  const image = useSelector((state) => state.image.image);
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchImage(keyword));
  };

  return (
    <div>
      <h2>Tìm kiếm hình ảnh</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Tìm kiếm hình ảnh"
      />
      <button onClick={handleSearch}>Tìm</button>
      <div>{image ? <img src={image} alt="Tìm kiếm" /> : 'Không tìm thấy hình ảnh.'}</div>
    </div>
  );
};

export default ImageSearch;
