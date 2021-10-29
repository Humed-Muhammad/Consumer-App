import React from "react"
import {
    Select,
    VStack,
    CheckIcon,
    Center,
    NativeBaseProvider,
} from "native-base"
import { colors } from "@Utils/Color/colors"

const Dropdown = ({ placeholder }) => {
    let [service, setService] = React.useState("")
    return (

        <Select
            selectedValue={service}
            minWidth="90%"
            borderWidth="0"
            accessibilityLabel="Choose Service"
            placeholder={placeholder}
            _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
        >
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
        </Select>

    )
}

export default Dropdown
