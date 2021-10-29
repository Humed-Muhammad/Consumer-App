import CardConatiner from "@Components/Atoms/CardContainer";
import Container from "@Components/Atoms/Container";
import { Icons } from "@Components/Atoms/Icons";
import { colors } from "@Utils/Color/colors";
import React from "react";
import { Alert, Modal, } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { toogleReport } from "@Redux/Slices/ReportSlice";

const ModalView = ({ status, children, height, width, justify, onPress }) => {
    const dispatch = useDispatch()

    const iconStyle = {
        position: "absolute",
        zIndex: 10,
        right: 2,
        top: 2,
        height: 40,
        width: 40,
        borderColor: colors.gray,
        borderRadius: 50,
        borderStyle: "solid",
        borderWidth: 2,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    }

    return (
        <Container height="100%" bg="transparent" position="absolute">
            <Modal
                animationType="slide"
                transparent={true}
                visible={status}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    dispatch(toogleReport());
                }}
                style={{ flex: 1 }}
            >
                <Container bg="transparent" position="absolute" height="100%" >
                    <CardConatiner justify={justify} direction="column" padd="0px" height={height} width={width} >

                        <Icons style={iconStyle} color={colors.gray} size={30} name="close" onPress={() => onPress()} />
                        {children}
                    </CardConatiner>
                </Container>
            </Modal>
        </Container>
    );
};



export default ModalView;