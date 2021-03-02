import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen=props=>{
  let favMeals=useSelector(state=>state.meals.favoriteMeals);
 
  if (favMeals.length===0 || !favMeals){
    return <View style={styles.content}>
      <Text>Favori yemeğiniz yok.</Text>
    </View>
  }
return(
<MealList listData={favMeals} navigation={props.navigation} />

);
};
 
 FavoritesScreen.navigationOptions = (navData)=>{
     return{
      headerTitle:"Favorilerim",
   
        headerLeft:()=>(
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
   <Item title="Menu" iconName="ios-menu"
   onPress={()=>{
      navData.navigation.toggleDrawer();
   }}/>
   
  </HeaderButtons>
  
        )
      } 
  };
 
  const styles = StyleSheet.create({
    content: {
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    }
  })
 
 export default FavoritesScreen;