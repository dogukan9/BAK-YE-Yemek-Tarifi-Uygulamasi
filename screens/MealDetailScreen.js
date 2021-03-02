import React,{useEffect,useCallback} from 'react';
import {Text,Image,StyleSheet,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {toggleFavorite} from "../store/actions/meals";
const MealDetailScreen=props=>{
    const availableMeals=useSelector(state=>state.meals.meals);
const mealId=props.navigation.getParam("mealId");
const currentMealIsFavorite=useSelector(state=>state.meals.favoriteMeals.some(meal=>meal.id===mealId));
const selectedMeal=availableMeals.find(meal=>meal.id===mealId);
//some true false dondurur
 
 const dispatch=useDispatch();

 const toggleFavoriteHandler=useCallback(()=>{
     dispatch(toggleFavorite(mealId));
 },[dispatch,mealId]);

useEffect(()=>{
   props.navigation.setParams({
      toggleFav:toggleFavoriteHandler
      });
},[toggleFavoriteHandler]);

useEffect(()=>{
    props.navigation.setParams({isFav:currentMealIsFavorite})
},[currentMealIsFavorite]);
return(
    <ScrollView>
        <Image source={selectedMeal.imageUrl} style={styles.image} />
        
          <Text style={styles.title}>Malzemeler</Text>
           {selectedMeal.ingredients.map(ingredient =>(
               <Text  style={styles.option} key={ingredient}>{ingredient}</Text>
           ))}
        
          <Text style={styles.title}>Hazırlanış</Text>
         
           {selectedMeal.steps.map(step =>(
               <Text style={styles.option} key={step}>{step}</Text>
           ))}
   



 </ScrollView>
);
};

MealDetailScreen.navigationOptions=(navigationData)=>{
 
const mealTitle=navigationData.navigation.getParam("mealTitle");
  
const toggleFavorite=navigationData.navigation.getParam("toggleFav");
const isFavorite=navigationData.navigation.getParam("isFav");
    return {
 headerTitle:mealTitle,
 headerRight:()=>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
     <Item title="Favorite" 
      iconName={isFavorite ? "ios-star":"ios-star-outline"}
      onPress= {toggleFavorite}
      />
          
 </HeaderButtons>)
 };

};
const styles =StyleSheet.create({

screen:{
 flex:1,
 justifyContent:"center",
 alignItems:"center"
},
image:{
    width:"100%",
    height:200
},

detail:{
     flexDirection:"row",
     padding:15,
     justifyContent:"space-around",

},
title:{
    fontFamily:"open-sans-bold",
    fontSize:20,
    textAlign:"center",
    

},
option:{
    marginVertical:10,
    marginVertical:20,
    borderColor:"#ccc",
    borderWidth:1,
    padding:10

}

});

export default MealDetailScreen;