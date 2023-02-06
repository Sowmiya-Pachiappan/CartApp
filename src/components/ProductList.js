import { Col, Row } from 'antd';
import React from 'react';
import productsData from '../data/products';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = JSON.parse(productsData);

    return (
        <Row gutter={[24, 24]} align={'stretch'}>
            {products?.map((product) => (
                <Col span={24} sm={12} md={8} lg={6} key={product._id}>
                    <ProductCard product={product} style={{ height: '100%' }}></ProductCard>
                </Col>
            ))}
        </Row>
    );
};

export default ProductList;
