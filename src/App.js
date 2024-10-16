import React from 'react';
import TodoList from './TodoList/TodoList';
import ImageSearch from './ImageSearch/ImageSearch';
import RandomColor from './RandomColor/RandomColor';

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <TodoList />
        <ImageSearch />
        <RandomColor />
      </div>
    </div>
  );
};

export default App;
