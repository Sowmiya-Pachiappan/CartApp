import { Typography } from 'antd'
import React from 'react'
import ProductList from '../components/ProductList'

const HomeScreen = () => {
    return <>
        <Typography.Title level={3}>
            Products
        </Typography.Title>
        <ProductList></ProductList></>
}

export default HomeScreen