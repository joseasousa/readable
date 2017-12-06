import React from 'react';

const Select = ({ defaultValue, values, change }) => (
  <div className="book-shelf-changer">
    <select value={defaultValue} onChange={change}>
      {
        values.map(item =>
          <option key={item.name}>{item.name}</option>)
    }
    </select>
  </div>
);

export default Select;
