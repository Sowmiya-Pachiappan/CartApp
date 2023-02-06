import { Button, Popconfirm } from 'antd';
import React, { useEffect, useState } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';

const StyledCounter = (props) => {
  const productId = props.product;
  const size = props.size;
  const qtyValue = props.qty;
  const [counter, setCounter] = useState(qtyValue);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const increaseHandler = () => {
    setCounter((prev) => Number(prev) + 1);

  };

  useEffect(() => {
    props.onChange(counter, productId);
  }, [counter]);

  const decreaseHandler = () => {
    if (counter === 1) {
      setOpen(true);
    } else {
      setCounter((prev) => Number(prev) - 1);
    }
  };

  const confirm = (id, size) => {
    dispatch(removeFromCart(id, size));
    setOpen(false);
  };
  const cancel = () => {
    setOpen(false);
  };
  return (
    <Button.Group>
      <Popconfirm
        open={open}
        title='Remove this Product from Cart?'
        description='Are you sure to delete this Product from Cart?'
        onConfirm={() => {
          confirm(productId, size);
        }}
        onCancel={cancel}
        okText='Yes'
        cancelText='No'
      >
        <Button onClick={decreaseHandler} icon={<Dash />} />
      </Popconfirm>

      <Button className='overflow-hidden'>{qtyValue}</Button>
      <Button onClick={increaseHandler} icon={<Plus />} />
    </Button.Group>
  );
};

export default StyledCounter;
