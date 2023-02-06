import {
    Alert,
    Button,
    Col,
    Form,
    Input,
    Row,
    Typography,
} from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signin } from '../actions/userActions';

const LoginScreen = () => {
    const userSignin = useSelector((state) => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signinHandler = (e) => {
        dispatch(signin(e));
    };

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [userInfo]);
    return (
        <Row justify={'center'} align='middle' className='h-100'>
            <Col span={8}>
                <Form
                    onFinish={signinHandler}
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                >
                    <Form.Item>
                        <Typography.Title level={3} className='text-center'>
                            Welcome
                        </Typography.Title>
                    </Form.Item>
                    <Form.Item
                        label='email'
                        labelCol={{ span: 24 }}
                        name='email'
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='password'
                        labelCol={{ span: 24 }}
                        name='password'
                    >
                        <Input.Password />
                    </Form.Item>
                    {error && <Alert type={'error'} message={error} />}
                    <Form.Item labelCol={{ span: 24 }}>
                        <Button
                            loading={loading}
                            type={'primary'}
                            block
                            htmlType={'submit'}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginScreen;
