import React from 'react'
import OrderCard from '@Components/Organisms/OrderCard'

const OrderDetail = ({ route, navigation }) => {
    let { data } = route.params
    return (
        <OrderCard height="95%" navigation={navigation} item={data} />
    )
}

export default OrderDetail
