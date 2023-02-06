import { Badge, Col, Row, Space, Typography, theme } from 'antd';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import React from 'react';
import { Cart2, PersonFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { signout } from '../actions/userActions';

const AppLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { token } = theme.useToken();
    const { cartItems } = cart;
    const signoutHandler = () => {
        dispatch(signout());
        navigate('/');
    };
    return (
        <Layout
            className='bg-transparent'
            style={{
                height: '100%',
            }}
        >
            <Header className='bg-white'>
                <Row
                    gutter={[24, 24]}
                    justify='space-between'
                    align={'middle'}
                >
                    <Col>
                        <Typography.Title level={2}>Cart App</Typography.Title>
                    </Col>
                    <Col>
                        <Space>
                            <Link
                                to={userInfo ? '#logout' : '/login'}
                                onClick={signoutHandler}
                                style={{ color: token.colorTextDescription }}
                            >
                                {userInfo ? (
                                    <>
                                        <PersonFill
                                            size={24}
                                            color='currentColor'
                                        ></PersonFill>
                                        Logout
                                    </>
                                ) : (
                                    <Typography.Text> Login</Typography.Text>
                                )}
                            </Link>
                            <Badge
                                style={{ cursor: 'pointer' }}
                                count={cartItems?.reduce((a, b) => a + b.qty, 0)}
                                overflowCount={10}
                            >
                                <Link
                                    to='/cart'
                                    style={{ color: token.colorTextDescription }}
                                >
                                    <Cart2
                                        size={24}
                                        color={token.colorTextDescription}
                                    />{' '}
                                </Link>
                            </Badge>
                        </Space>
                    </Col>
                </Row>
            </Header>
            <Content className='p-4'>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default AppLayout;
