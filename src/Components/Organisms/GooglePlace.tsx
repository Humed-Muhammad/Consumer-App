// import React from 'react';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const GooglePlacesInput = () => {
//     return (
//         <GooglePlacesAutocomplete
//             placeholder='Search'
//             onPress={(data, details = null) => {
//                 // 'details' is provided when fetchDetails = true
//                 console.log(data, details);
//             }}
//             query={{
//                 key: 'YAIzaSyB5vdGUoozI7wAQvuEb4bwoTp4EStiemEs',
//                 language: 'en',
//             }}
//             currentLocation={true}
//             currentLocationLabel='Current location'
//         />
//     );
// };

// export default GooglePlacesInput;

import React from 'react';
import { Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { colors } from '@Utils/Color/colors';


// const apiKey = process.env.API_KEY;

const GooglePlacesInput = () => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Pickup location"
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
                    top: -270
                },
                container: {
                    display: "flex",
                    justifyContent: "center",
                }

            }}
            onPress={(data, details) => console.log("Data " + data, "Detail " + JSON.stringify(details))}
            textInputProps={{
                InputComp: Input,
                errorStyle: { color: 'red' },
            }}
        />
    );
};

export default GooglePlacesInput;