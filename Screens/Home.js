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
    const [degree, setDegree] = useState()


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
            const degrees = resp.current.temp_c
            setDegree(degrees)
            console.log(degrees)
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
        <View style={{ backgroundColor: '#462D9E', flex: 1 }}>
            <TextInput style={{borderWidth:1,width:'90%',marginHorizontal:20,borderRadius:10,marginTop:20,backgroundColor:'white'}} onChangeText={(text) => setName(text)} placeholder='Enter Location' />
            <TouchableOpacity onPress={getLocation} style={{backgroundColor:'white',borderRadius:10,marginHorizontal:20,width:'90%',marginTop:10,alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#3B2776'}}>Check</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft:20,fontSize:50, color: 'white' }}>Today</Text>
            <Text style={{ marginLeft:20,fontSize:50,color: 'white' }}>Thu 21 Apr</Text>
            <Text style={{ marginLeft:20,color: 'white' }}>{currWeather}</Text>
            <Text style={{ marginLeft:20,color: 'white' }}>{name}</Text>
            <Text style={{ marginLeft:20,color: 'white' }}>{degree}°</Text>
            <Image style={{height:40,width:40,resizeMode:'contain'}} source={{uri:`http:${icon}`}}></Image>
            <Text style={{ color: 'white' }}></Text>
            <View style={{ backgroundColor: 'white',height: 300, top:350, borderRadius: 20 }}>
                <Text style={{ color: '#462D9E', marginTop: 10 }}>        Today                Tomorrow            Next 7 Days</Text>
                <View style={{ backgroundColor: '#E3DCFA', height: 150, width: 50, marginLeft: 20, borderRadius: 20, marginTop: 20 }}>

                </View>
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    search: {
        borderWidth: 1,
        height: 40,
        width: '90%',
        marginHorizontal: 20,
    },
    btn: {
        backgroundColor: "#462A9F",
        width: '90%',
        marginHorizontal: 20,
        height: 40,
        marginTop: 10,
        borderRadius: 9,
        justifyContent: 'center',
        alignItems: 'center'

    }
})