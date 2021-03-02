import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
import {enableScreens} from "react-native-screens"
import MealsNavigator from "./navigations/MealsNavigator";
import {createStore,combineReducers, applyMiddleware} from "redux"
import mealsReducer from "./store/reducers/meals"
import {Provider} from "react-redux";
import ReduxThunk from  "redux-thunk"

enableScreens();

const rootReducer=combineReducers({
  meals:mealsReducer
})
const store=createStore(rootReducer,applyMiddleware(ReduxThunk));


const fetchFonts = () =>
{
 return Font.loadAsync({
    "open-sans":require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold":require("./assets/fonts/OpenSans-Bold.ttf")
  });
}
export default function App() {
const[fontLoaded,setFontLoaded]=useState(false);
if(!fontLoaded){
  return <AppLoading startAsync={fetchFonts}
  onFinish={()=>setFontLoaded(true)}
  onError={(err) => console.log(err)}/>
}

  return (
    <Provider store={store}>
      <MealsNavigator /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
