import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import OrderCard from "@Components/Organisms/OrderCard"
import Container from '@Components/Atoms/Container'
import { useDispatch, useSelector } from 'react-redux'
import ModalView from '@Components/Organisms/Modal'
import Text from '@Components/Atoms/Text'
import Input from '@Components/Atoms/Inputs'
import Button from '@Components/Atoms/Button'
import Dropdown from "../Components/Organisms/Dropdown"
import { toogleReport } from '@Redux/Slices/ReportSlice'


const OrderList = () => {
    const { report } = useSelector((state: any) => state.report)

    let [orders, setOrders] = useState([
        {
            orderNumber: "00050",
            date: "04/03/21, 3:00pm",
            pickup: [{ first: "bole" }, { second: "piassa" }],
            dropoff: "Jemo",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },
        {
            orderNumber: "00060",
            date: "03/05/21, 6:00pm",
            pickup: [{ first: "bole" }, { second: "jemo" }],
            dropoff: "Piass",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },
        {
            orderNumber: "00070",
            date: "04/03/21, 3:00pm",
            pickup: [{ first: "Gelan" }, { second: "piassa" }],
            dropoff: "Kaliti",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },
        {
            orderNumber: "00070",
            date: "04/03/21, 3:00pm",
            pickup: [{ first: "Gelan" }, { second: "piassa" }],
            dropoff: "Kaliti",
            estimation: { date: "04/03/21, 3:00pm", price: "350" },
            isClicked: false
        },

    ])
    const dispatch = useDispatch()

    const handleClick = (index) => {
        let newOrders = [...orders]
        newOrders[index].isClicked = !newOrders[index].isClicked;

        newOrders.map(item => {
            if (orders.indexOf(item) != index) {
                item.isClicked = false
            }
        })

        setOrders(newOrders)
    }

    const list = orders.map((item, index) => (
        <OrderCard key={index} handleClick={handleClick} index={index} item={item} />
    ))

    return (
        <Container height="100%" direction="column" justify="flex-start">
            <ScrollView  >
                {list}
            </ScrollView>
            {report.status && <ModalView onPress={() => dispatch(toogleReport())} justify="space-around" height="60%" width="90%" status={report.status} >
                <Dropdown placeholder="Select report type" />
                <Input width="80%" height="50%" placeholder="Additional information" />
                <Button text="Submit" width="80%" />
            </ModalView>}
        </Container>
    )
}

export default OrderList
