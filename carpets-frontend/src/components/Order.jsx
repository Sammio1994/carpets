import React from 'react';

const Order = () => {
    return (
      <div className="order">
        <h1>Order a Sample</h1>
        <p>Choose your carpet sample and we will send it to you right away.</p>
        <form>
          <label for="carpet-selection">Select Carpet:</label>
          <select id="carpet-selection" name="carpet">
            <option value="carpet1">Carpet 1</option>
            <option value="carpet2">Carpet 2</option>
            <option value="carpet3">Carpet 3</option>
          </select>
          <button type="submit">Order Sample</button>
        </form>
      </div>
    );
  };
  
  export default Order;