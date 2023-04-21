import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import { TextInput } from 'react-native-gesture-handler'

const Home = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [name, setName] = useState('')
    const [currWeather, setCurrWeather] = useState()
    const [icon, setIcon] = useState()
    const [city_name, setcity_Name] = useState()


    const getWeather = () => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=58a96997d29f4f29bb4165349232004&q=${name}`, {
            method: "GET",
            headers: {
                'Accept-Type': 'application/json',
                Accept: 'application/json'
            }
        }).then((res) => res.json()).then((resp) => {
            console.log(resp)
            const curr = resp.current.condition.text
            setCurrWeather(curr)
            const icon = resp.current.condition.icon
            setIcon(icon)
            const city = resp.current.location.name
            console.log(city)
        })
    }

    const getLocation = () => {
        Geolocation.getCurrentPosition((position) => {
            console.log(position)
            const lat = position.coords.latitude
            const long = position.coords.longitude
            
            setLatitude(lat)
            setLongitude(long)
            getWeather()
        })
    }
    return (
        <View style={{ flex: 1, marginTop:20 }}>
            <>
                <TextInput style={styles.search} placeholder='Enter' onChangeText={(text) => setName(text)} />
                <TouchableOpacity style={styles.btn} onPress={getLocation}>
                    <Text style={{ color: 'white' }}>Press</Text>
                </TouchableOpacity>
                <Text>{city_name}</Text>
                <Image style={{ resizeMode: 'contain', height: 60, width: 60 }} source={{ uri: `http:${icon}` }}></Image>
            </>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        height: 40,
        width: '90%',
        marginHorizontal:20,
    },
    btn: {
        backgroundColor: "#462A9F",
        width: '90%',
        marginHorizontal:20,
        height: 40,
        marginTop: 10,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'

    }
})