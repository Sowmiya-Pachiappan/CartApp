import {
    Badge,
    Button,
    Col,
    Image,
    Rate,
    Row,
    Space,
    Typography,
} from 'antd';
import numeral from 'numeral';
import _ from 'lodash';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { CurrencyRupee } from 'react-bootstrap-icons';
import { addToCart } from '../actions/cartActions';
import StyledCounter from '../components/styled/StyledCounter';
import products from '../data/products';

const ProductDetails = () => {
    const { id: productId } = useParams();
    const product = JSON.parse(products).find(product => product._id === productId)
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)
    const navigate = useNavigate()

    const redirectToPrevHandler = () => {
        navigate(-1);
    };
    const addToCarthandler = (qty = 1) => {
        dispatch(addToCart(productId, qty));
    };

    return <Space direction={'vertical'} className={'w-100'} size={'large'}>
        <Row gutter={24} justify={'space-between'}>
            <Col span={24} md={12} className='w-100'>
                <Badge className='w-75'
                    count={`${_.round(
                        _.round(
                            (product.mrp - product.sellingPrice) / product.mrp,
                            2
                        ) * 100,
                        2
                    )}% OFF`}
                >
                    <Space align={'center'} className='d-block w-100'>
                        <Image
                            style={{ textAlign: 'center', objectFit: 'contain' }}
                            width={'100%'}
                            src={product.image[0]}
                            preview={false}
                        ></Image>
                    </Space>
                </Badge>
            </Col>
            <Col span={24} md={12}>
                <Space direction={'vertical'} size={'small'} className='w-100'>
                    <Typography.Link onClick={redirectToPrevHandler}>
                        Back
                    </Typography.Link>
                    <Typography.Title level={4} className='mb-1'>
                        {product.name}
                    </Typography.Title>
                    <Typography.Title
                        level={5}
                        type={'secondary'}
                        className='mb-1'
                    >
                        {_.upperCase(product.brand)}
                    </Typography.Title>

                    <Space>
                        <Space align={'center'}>
                            <Typography.Title level={3} className='mb-1'>
                                <CurrencyRupee />
                                {numeral(product.sellingPrice).format('0.00')}
                            </Typography.Title>
                            <Typography.Title
                                level={5}
                                delete
                                type={'secondary'}
                                className='mb-1'
                            >
                                MRP :
                                <CurrencyRupee />
                                {numeral(product.mrp).format('0.00')}
                            </Typography.Title>
                        </Space>
                        <Typography.Paragraph italic className='mb-1'>
                            You save{' '}
                            {
                                <>
                                    <Typography.Text strong type={'success'}>
                                        <CurrencyRupee />
                                        {numeral(
                                            product.mrp - product.sellingPrice
                                        ).format('0.00')}
                                    </Typography.Text>
                                </>
                            }
                        </Typography.Paragraph>
                    </Space>

                    {product.rating > 0 && (
                        <Space size={'middle'}>
                            <Rate value={product.rating} disabled />
                            <Typography.Text>{product.rating}</Typography.Text>
                            <Typography.Text>
                                ({product.numReviews})
                            </Typography.Text>
                        </Space>
                    )}
                    <Space direction={'vertical'} size={0}>
                        <Typography.Title level={5}>
                            Description:
                        </Typography.Title>
                        <Typography.Paragraph
                            ellipsis={{ rows: 2, tooltip: true }}
                            type={'secondary'}
                            className='w-75'
                        >
                            {product.description}
                        </Typography.Paragraph>
                    </Space>



                    {product.countInStock > 0 ? (
                        <>
                            <Typography.Title level={5}>Qty:</Typography.Title>
                            <StyledCounter
                                product={productId}
                                size={product.label}
                                qty={qty}
                                onChange={(e) => {
                                    setQty(Number(e));
                                }}
                                productId={productId}
                            ></StyledCounter>
                            <Button
                                block
                                className='mt-3'
                                type={'primary'}
                                onClick={() => addToCarthandler(qty)}
                            >
                                Add to Cart
                            </Button>
                        </>
                    ) : (
                        <Typography.Text className='mt-3' type={'danger'}>
                            Unavailable
                        </Typography.Text>
                    )}
                </Space>
            </Col>
        </Row>

    </Space>

};

export default ProductDetails;
