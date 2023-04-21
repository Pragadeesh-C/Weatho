import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={{backgroundColor:'#462D9E',flex:1}}>
        
      <Text style={{color:'white'}}>Today</Text>
      <Text style={{color:'white'}}>Thu 21 Apr</Text>
      <Text style={{color:'white'}}>30*C</Text>
      <Text style={{color:'white'}}>Chennai, Tamilnadu</Text>
      <Text style={{color:'white'}}></Text>
      <View style={{backgroundColor:'white',height:300,top:500,borderRadius:20}}>  
         <Text style={{color:'#462D9E',marginTop:10}}>        Today                Tomorrow            Next 7 Days</Text>
    <View style={{backgroundColor:'#E3DCFA',height:150,width:50,marginLeft:20,borderRadius:20,marginTop:20}}>

    </View>
      </View>
      
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})

