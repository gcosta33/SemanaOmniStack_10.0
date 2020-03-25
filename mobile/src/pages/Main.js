import React, { useEffect,useState } from 'react';
import { StyleSheet } from 'react-native';

import MapView from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

function Main() {
    const [currentRegion, setCurrentRegion] = useState(null)

    useEffect(() => {
        async function loadInitialLocation(){
            const { granted } = await requestPermissionsAsync()

            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: false
                })

                const { latitude, longitude } = coords
                setCurrentRegion({
                    latitude,
                    longitude,
                    longitudeDelta,
                    longitudeDeltae
                })
            }
        }
    }, [])

    return(
       <MapView 
       style={ style.map }
       initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
       ></MapView>
    )
}

const style = StyleSheet.create({
    map: {
        flex:1
    }
})

export default Main;
