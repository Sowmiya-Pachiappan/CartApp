import { Button, Card, Descriptions, theme } from 'antd';
import React from 'react';
import numeral from 'numeral';
import { calculatePayment } from '../utils/functions';


const OrderItemsSummary = (props) => {
    const items = props.items;
    const { token } = theme.useToken();
    const {
        itemsPrice,
        totalPrice,
        totalCartItems,
        shippingPrice,
    } = calculatePayment(items, 500);

    const onClickHandler = () => {
        props.onButtonClick();
    };
    return (
        <Card
            bordered={false}
            className='h-100 shadow-none'
            style={{ backgroundColor: token.colorPrimaryBg }}
        >
            <Descriptions title='Summary' size={'default'} colon={false} column={{ span: 24 }}>
                <Descriptions.Item
                    span={3}
                    label='Total Items'
                    contentStyle={{ fontWeight: 'bold', justifyContent: 'end' }}
                >
                    {totalCartItems}
                </Descriptions.Item>
                <Descriptions.Item
                    span={3}
                    label='Total Amount'
                    contentStyle={{ fontWeight: 'bold', justifyContent: 'end' }}
                >
                    {numeral(itemsPrice).format('0,0.00')}
                </Descriptions.Item>
                <Descriptions.Item
                    span={3}
                    label='Delivery Charge'
                    contentStyle={{ fontWeight: 'bold', justifyContent: 'end' }}
                >
                    {numeral(shippingPrice).format('0,0.00')}
                </Descriptions.Item>
                <Descriptions.Item
                    span={3}
                    label='Total'
                    contentStyle={{
                        fontSize: token.fontSizeHeading4,
                        fontWeight: 'bold',
                        justifyContent: 'end',
                    }}
                >
                    {numeral(totalPrice).format('0,0.00')}
                </Descriptions.Item>
            </Descriptions>

            <Button
                onClick={onClickHandler}

                block
                type={'primary'}
            >
                Checkout
            </Button>

        </Card>
    );
};

export default OrderItemsSummary;
