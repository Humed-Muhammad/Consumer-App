import React from 'react';
import { Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { colors } from '@Utils/Color/colors';
import { addSelectedLocation, removeSelectedLocation } from '@Redux/Slices/PickUpSlice';
import { useDispatch, useSelector } from 'react-redux';


// const apiKey = process.env.API_KEY;

const GooglePlacesInput = ({ top, from, setFrom }) => {

    const dispatch = useDispatch();

    return (
        <GooglePlacesAutocomplete
            placeholder="Pickup location"
            fetchDetails
            GooglePlacesDetailsQuery={{
                fields: "geometry"
            }}
            query={{
                key: "AIzaSyB5vdGUoozI7wAQvuEb4bwoTp4EStiemEs",
                language: 'en', // language of the results
            }}
            styles={{
                powered: {
                    display: "none",

                },
                textInputContainer: {
                    width: "90%",
                },
                listView: {
                    width: "90%",

                    backgroundColor: colors.white,
                    zIndex: 100,
                    position: "absolute",
                    top: top || -270
                },
                container: {
                    display: "flex",
                    justifyContent: "center",
                }

            }}
            onPress={(data, { geometry }) => {

                if (data && geometry) {
                    setFrom({
                        latitude: geometry.location.lat,
                        longitude: geometry.location.lng,
                        mainLocation: data.description,
                    })
                }
                console.log("geom " + JSON.stringify(geometry.location))
            }}
            textInputProps={{
                InputComp: Input,
                errorStyle: { color: 'red' },

            }}

        />
    );
};

export default GooglePlacesInput;