import React from 'react';
import {TouchableOpacity,View,Text,StyleSheet,Platform,TouchableNativeFeedback,Image,ImageBackground} from 'react-native';


const CategoryGridTiles=props=>{
  let TouchableCmp=TouchableOpacity;
  if(Platform.OS === 'android' && Platform.Version>=21){
      TouchableCmp=TouchableNativeFeedback;
  }
    return(
        <View  style={styles.gridItem}>
        <TouchableCmp onPress={props.onSelect}>
         <Image source={props.image} style={{ flex:1,
        resizeMode:'repeat',
        }}></Image>
        </TouchableCmp>
        <TouchableCmp onPress={props.onSelect}>
        <View style={{...styles.container ,...{backgroundColor:props.color}}}><Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
        
        </TouchableCmp>
       
        </View>
    );

};

const styles = StyleSheet.create({

    gridItem:{
        flex:1,
        margin:15,
        height:170,
        borderRadius:10,
        overflow:Platform.OS==="android" && Platform.Version>=21 ?  "hidden":"visible",
        
        elevation:3,
    },

  container:{

borderRadius:10,

shadowColor:"black",
shadowOpacity:0.26,
shadowOffset:{width:0,height:2},
shadowRadius:10,
justifyContent:"flex-end",
alignItems:"flex-end",

width:"100%",

  },
  title:{
    fontFamily:"open-sans-bold",
    fontSize:19,
    textAlign:"center", 
  }
});

export default CategoryGridTiles;