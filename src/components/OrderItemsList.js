import {
    Avatar,
    Col,
    Grid,
    Row,
    Space,
    Table,
    Typography,
} from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';

import StyledCounter from '../components/styled/StyledCounter';
import { addToCart } from '../actions/cartActions';

const OrderItemsList = (props) => {
    const items = props?.items;
    const breakpoint = Grid.useBreakpoint();
    const dispatch = useDispatch();
    const itemsArr = items?.map((item, i) => ({
        key: item.product + '_' + i,
        _id: item.product,
        product: { name: item.name, image: item.image, size: item.size },
        qty: item.qty,
        price: item.price,
        total: item.price * item.qty,
    }));
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };
    const columns = [
        {
            title: 'Product Details',
            dataIndex: 'product',
            key: 'product',
            render: (item) => (
                <Space
                    size={'large'}
                    style={{ width: breakpoint.md ? '100%' : 'max-content' }}
                >
                    <Avatar
                        shape={'square'}
                        src={item.image[0]}
                        size={'large'}
                    ></Avatar>
                    <Space direction={'vertical'}>
                        <Typography.Text>{item.name}</Typography.Text>
                        <Typography.Text type={'secondary'}>
                            {item.size}
                        </Typography.Text>
                    </Space>
                </Space>
            ),
        },
        {
            title: 'Qty',
            dataIndex: 'qty',
            key: 'qty',
            render: (qty, record) => (

                <StyledCounter
                    product={record._id}
                    size={record.product.size}
                    qty={qty}
                    max={record.product.countInStock}
                    onChange={(qty) => qtyChangeHandler(record._id, qty)}
                ></StyledCounter>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => <Typography.Text>{price}</Typography.Text>,
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (total) => <Typography.Text>{total}</Typography.Text>,
        },
    ];

    return (
        items && (
            <>
                <Row justify={'space-between'} align={'middle'}>
                    <Col>
                        <Typography.Title level={5}>Items</Typography.Title>
                    </Col>
                    <Col>
                        <Typography.Text>{`Total Items : ${items.length}`}</Typography.Text>
                    </Col>
                </Row>

                <Table
                    className='table-responsive'
                    columns={columns}
                    dataSource={itemsArr}
                    pagination={false}
                ></Table>
            </>
        )
    );
};

export default OrderItemsList;
