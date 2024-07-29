import React from 'react';
import { Link } from 'react-router-dom';

export const NextPage = () => {

  return (
    <>
        <div className="prod-btm">
            <Link to="/product">View All Products</Link>
        </div>
    </>
  )
}
