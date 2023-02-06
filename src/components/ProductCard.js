import { Badge, Button, Card, Col, Image, Row, Space, Typography } from 'antd';
import React from 'react'
import { CurrencyRupee } from 'react-bootstrap-icons';
import _ from 'lodash';
import StyledLink from '../components/styled/StyledLink.js'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions.js';

const ProductCard = (props) => {
    const dispatch = useDispatch()
    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
    }
    const { product } = props;
    const { Meta } = Card;
    return product && <Badge.Ribbon
        className=''
        text={`${_.round(
            _.round(
                (product.mrp -
                    product.sellingPrice) /
                product.mrp,
                2
            ) * 100,
            2
        )}% OFF`}
    >

        <Card
            className='w-100 h-100 pt-1'
            hoverable
            cover={
                <Space
                    align={'center'}
                    style={{ textAlign: 'center' }}
                >
                    <Image
                        src={product.image}
                        preview={false}
                        width={150}
                        height={200}
                        style={{
                            textAlign: 'center',
                            objectFit: 'scale-down',
                        }}
                    />
                </Space>
            }
        >
            <Meta
                className='w-100'
                title={
                    <StyledLink to={`/product/${product._id}`}>
                        {product.name}
                    </StyledLink>
                }
                description={
                    <Row gutter={[24, 8]} className='w-100'>
                        <Col span={24}>
                            <Row
                                justify={'space-between'}
                                align={'middle'}
                            >
                                <Col>
                                    <Typography.Text type={'secondary'}>
                                        {product.size +
                                            ' ' +
                                            product.unit}
                                    </Typography.Text>
                                </Col>

                            </Row>
                        </Col>
                        <Col span={24}>
                            <Space align={'center'}>
                                <Typography.Title level={4} className='m-0'>
                                    <sup>
                                        <CurrencyRupee />
                                    </sup>
                                    {_.round(
                                        product.sellingPrice,
                                        2
                                    )}
                                </Typography.Title>

                                <Typography.Text
                                    type={'secondary'}
                                    delete={true}
                                >
                                    M.R.P :{' '}
                                    {_.round(product.mrp, 2)}
                                </Typography.Text>
                            </Space>
                        </Col>
                        <Col span={24} style={{ textAlign: 'center' }}>
                            <Button type='primary' onClick={() => addToCartHandler(product._id)}>Add to Cart</Button>
                        </Col>
                    </Row>
                }
            />
        </Card>

    </Badge.Ribbon>
}

export default ProductCard