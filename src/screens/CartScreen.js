import { Alert, Col, Row, Space, Typography } from 'antd';
import React from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import OrderItemsList from '../components/OrderItemsList';
import OrderItemsSummary from '../components/OrderItemsSummary'
import { CART_EMPTY } from '../constants/cartConstants';


const CartScreen = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.userSignin);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const checkoutHandler = () => {

        if (userInfo) {

            dispatch({
                type: CART_EMPTY
            })
            navigate('/success');
        } else {
            navigate('/login')
        }
    };
    return cartItems.length > 0 ? (
        <Row gutter={[24, 24]} align={'stretch'}>
            <Col span={24} md={16} className={'w-100'}>
                <Space direction={'vertical'} className='w-100'>
                    <OrderItemsList items={cartItems} />

                    <Link to='/'>
                        <Space size={2} className='mt-3'>
                            <ArrowLeft /> Continue Shopping
                        </Space>
                    </Link>
                </Space>
            </Col>
            <Col span={24} md={8}>
                <OrderItemsSummary
                    onButtonClick={checkoutHandler}
                    items={cartItems}
                    buttonText='Proceed to Checkout'
                />
            </Col>
        </Row>
    ) : (
        <Alert
            type={'info'}
            message={
                <Space>
                    <Typography.Text>No items in your Cart. </Typography.Text>{' '}
                    <Link to='/' className='text-decoration-underline'>
                        Continue Shopping
                    </Link>
                    to add items to your cart.
                </Space>
            }
        />
    );
};

export default CartScreen;
