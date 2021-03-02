import React,{useEffect} from 'react';
import {FlatList,StyleSheet} from 'react-native';

import {CATEGORIES} from "../data/dummy-data";

import CategoryGridTiles from "../components/CategoryGridTile"
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import * as action from "../store/actions/meals";
import {useDispatch} from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";


const CategoriesScreen=props=>{
const dispatch=useDispatch();

useEffect(() => {

  const tryLogin =async() => {
    try {
    const userData = await AsyncStorage.getItem("userData");
    if (!userData) {
  
      return;
    }
    const transformedData = JSON.parse(userData);
    const favorite = transformedData;
     
      dispatch(action.update(favorite));
     
    return;
  }
  catch(e) {

  }
  };

  tryLogin();
  
}, [dispatch]);
    const renderGridItem=(itemData)=>{
      

        return (<CategoryGridTiles 
            title={itemData.item.title}
            color={itemData.item.color}
            image={itemData.item.image}
            onSelect={()=>{
            props.navigation.navigate({routeName:"CategoryMeals",params:{
                categoryId:itemData.item.id
            }});
        }}/>
          
      );
    }; 
return(
 <FlatList 
 keyExtractor={(item,index)=>item.id}
 data={CATEGORIES} 
 renderItem={renderGridItem}
  numColumns={2}/>
);
};

CategoriesScreen.navigationOptions = (navData)=>{
   return{
    headerTitle:"Kategoriler",

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

const styles =StyleSheet.create({

screen:{
 flex:1,
 justifyContent:"center",
 alignItems:"center"
},


});

export default CategoriesScreen;