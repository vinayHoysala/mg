import React from 'react';
import spritual from '../../assets/spritual.png';
import garden from '../../assets/garden.png';
import './styles.scss';

const ProductCategory = props =>{
    return (
        <div className="productscategory">
            <div className="wrap">
                <div className="item" style={{
                    backgroundImage: `url(${spritual})`
                }}>
                    <a>Shop Spritual Products</a>
                </div>

                <div className="item" style={{
                    backgroundImage: `url(${garden})`
                }}>
                    <a>Shop Garden Products</a>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory;