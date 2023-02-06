export const calculatePayment = (items, deliveryChargeLimit) => {
    const payment = {};

    payment.totalCartItems = items?.length;
    payment.itemsPrice = items?.reduce(
        (a, c) => a + c.qty * c.price,
        0
    );
    payment.shippingPrice =
        payment.itemsPrice >= deliveryChargeLimit ? 0 : 10;
    payment.totalPrice = payment.itemsPrice + payment.shippingPrice;
    return payment;
};

