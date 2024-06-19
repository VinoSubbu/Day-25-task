import React from 'react';

function FilterButtons({ setFilter, currentFilter }) {
  return (
    <div className="filters">
      <button 
        className={currentFilter === 'All' ? 'active' : ''}
        onClick={() => setFilter('All')}
      >
        All
      </button>
      <button 
        className={currentFilter === 'Not Completed' ? 'active' : ''}
        onClick={() => setFilter('Not Completed')}
      >
        Not Completed
      </button>
      <button 
        className={currentFilter === 'Completed' ? 'active' : ''}
        onClick={() => setFilter('Completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default FilterButtons;
