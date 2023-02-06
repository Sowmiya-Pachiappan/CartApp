import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const SuccessScreen = () => {
    return <Result
        status="success"
        title="Successfully Purchased"
        extra={[
            <Link to='/' key='success'><Button type="primary" key="console">
                Go Home
            </Button></Link>,

        ]}
    />
}

export default SuccessScreen