import React, { Component } from 'react'
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground,Image} from 'react-native';


const MealItem =props=>{
return(
    <View style={styles.mealItem}>
<TouchableOpacity onPress={props.onSelectMeal}>
    <View>
      <View style={{...styles.mealRow, ...styles.mealHeader}}>
      <ImageBackground style={styles.bgImage} source={props.image}>
  <View style={styles.titleContainer}>
    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
    </View>
       </ImageBackground>
      </View>
      <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>Kişilik: {props.person}</Text>
                <Text >Pişirme Süresi: {props.duration} dakika</Text>
               
            
          </View>
         </View>
            </TouchableOpacity>
            </View>

   );

}

const styles =StyleSheet.create({
    bgImage:{
        height:"100%",
        
        width:"100%",
        justifyContent:"flex-end"
    },
mealItem:{
    height:200,
    width:"100%",
    backgroundColor:"#f5f5f5",
    borderRadius:20,
    overflow:"hidden",
    marginVertical:10,
},
mealRow:{
    flexDirection:"row",
},
mealHeader:{
    height:"85%",
    
},
mealDetail:{
 paddingHorizontal:10,
 justifyContent:"space-between",
 alignItems:"center"

},
titleContainer:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingHorizontal:12,
    paddingVertical:5,
},
title:{
    fontFamily:"open-sans-bold",
    fontSize:20,
    color:"white",
   
    textAlign:"center"
},


})

export default MealItem
