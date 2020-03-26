import React, { useEffect,useState } from 'react';
import { StyleSheet,Image,View,Text,TextInput,TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import MapView, { Marker,Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

import { MaterialIcons } from '@expo/vector-icons'

function Main({ navigation }) {
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
                    longitudeDelta: 0.04,
                    latitudeDelta: 0.04
                })
            }
        }
        loadInitialLocation()
    }, [])

    if(!currentRegion){
        return null
    }
    return(
        <>
            <MapView
                style={ styles.map }
                initialRegion={ currentRegion }
            >
                <Marker coordinate={{
                    latitude: -3.7849662,
                    longitude: -38.4927577,
                }}>
                    <Image style={styles.avatar} source={{ uri:'https://avatars2.githubusercontent.com/u/52605864?s=460&u=579edeeebc775700fa86f80e7b419e8d194bb348&v=4' }}></Image>
                    <Callout onPress={() => {
                        navigation.navigate('Profile', { github_username: 'gcosta33' })
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName} >Guilherme Costa</Text>
                            <Text style={styles.devBio} >Sou um programador apaixonado pelo que faço, estou sempre buscando novos conhecimentos e aprimorando os existentes. Amo o processo de aprendizagem.</Text>
                            <Text style={styles.devTechs} >PHP, Pyton, NodeJS</Text>
                        </View>
                    </Callout>
                </Marker>

            </MapView>
            {/* <View style={styles.searchForm}> */}
            <KeyboardAvoidingView
                style={styles.searchForm}
                behavior='padding'
                keyboardVerticalOffset={100}
                >
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                ></TextInput>
                <TouchableOpacity onPress={()=>{}} style={styles.loadButton}>
                    <MaterialIcons
                    name="my-location"
                    size={20}
                    color="#FFF"
                    ></MaterialIcons>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex:1
    },
    avatar:{
        width: 54,
        height:54,
        borderRadius:4,
        borderWidth:3,
        borderColor:'#000'
    },
    callout: {
        width:260,
    },
    devName:{
        fontWeight: 'bold',
        fontSize:16
    },
    devBio: {
        color: '#666',
        marginTop: 5
    },
    devTechs: {
        marginTop:5
    },
    searchForm: {
        position: 'absolute',
         bottom: 20,
         left: 20,
         right: 20,
         zIndex: 5,
         flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        elevation: 3
    },
    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8D4DFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    }
})
git
export default Main;
