import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from "react-navigation";
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import FilterScreen from '../screens/FilterScreen';

import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs"

const defaultStartNavigation={
    headerStyle: {
        backgroundColor:"purple"
  
    },
    headerTitleStyle:{
        fontFamily:"open-sans-bold"
    }
    ,
    headerTintColor:"white",
   
};
const MealsNavigator=createStackNavigator({
  
    Categories:{
        
     screen:CategoriesScreen,
     navigationOptions:{
        headerStyle: {
            backgroundColor:"purple"
            
        },
        headerTintColor:"white"
    }
    },
    CategoryMeals:{
        screen:CategoryMealsScreen,
        navigationOptions:{
            headerStyle: {
                backgroundColor:"purple"
                
            },
            headerTintColor:"white"
        }
    },
    MealDetail:MealDetailScreen
},

{
 
    defaultNavigationOptions:defaultStartNavigation
}

);

 const FavNavigation=createStackNavigator({
     
     Favorites:FavoritesScreen,
     MealDetail:MealDetailScreen,


    },{
        
         defaultNavigationOptions:defaultStartNavigation
     });
const tabScreenConfig={

    Meals:{
    screen:MealsNavigator,
    navigationOptions:{
        tabBarLabel:"Tarifler",
      tabBarIcon:(tabInfo)=>{
          return (<Ionicons
           name="ios-restaurant"
            size={25} 
            color={tabInfo.tintColor}/>
          )},
        tabBarColor:"orange",
    }

}, 
    Favorites:{
        
       screen:FavNavigation,
       navigationOptions:{
        tabBarLabel:"Favorilerim",
        tabBarIcon:(tabInfo)=>{
            return (<Ionicons
             name="ios-star"
              size={25} 
              color={tabInfo.tintColor}/>
             ) },
             tabBarColor:"orange"
       }
    }
   
}
const MealsFavTabNavigator=Platform.OS==="android"
?createMaterialBottomTabNavigator(tabScreenConfig,{
 
    activeColor:"black",
    shifting:true,

  
   barStyle:{
       backgroundColor:"purple"
   }

}):
createBottomTabNavigator(tabScreenConfig, 
{
    tabBarOptions:{
    activeTintColor:"orange"
    }
}
);

const FiltersNavigator=createStackNavigator(
   {
       Filters:FilterScreen

   } ,
   {
  
       defaultNavigationOptions:defaultStartNavigation
   }
);


const MainNavigator=createDrawerNavigator({
MealsFavs:{
    screen:MealsFavTabNavigator,
    navigationOptions:{
        drawerLabel:"TARİFLER"
               },
},
Filters:{
 screen: FiltersNavigator,
 navigationOptions:{
    drawerLabel:"FILTRELEME"
           },
}
},{
contentOptions:{
    activeTintColor:"orange"
}

});
 
export default createAppContainer(MainNavigator);