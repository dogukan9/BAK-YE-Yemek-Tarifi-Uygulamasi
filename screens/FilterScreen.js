import React ,{useState,useEffect,useCallback} from 'react';
import {View,Text,StyleSheet,Switch} from 'react-native';
import {HeaderButtons,Item} from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import {useDispatch} from "react-redux";
import {setFilters} from "../store/actions/meals";
const FilterSwitch=props=>{
  return (<View style={styles.filterContainer}>
    <Text>{props.label}</Text>
    <Switch trackColor={{true:"blue"}}
    thumbColor={"blue"}
    value={props.state} onValueChange={props.onChange}/>
  </View>);
};
const FilterScreen=props=>{
 const[isMantar,setIsMantar]=useState(true);
 const[isEt,setIsEt]=useState(true);
 const[isPatates,setIsPatates]=useState(true);
 const[isDomates,setIsDomates]=useState(true);

 const dispatch=useDispatch();
 const saveFilters=useCallback(()=>{

  const appliedFilters={
    mantar:isMantar,
    et:isEt,
    patates:isPatates,
    domates:isDomates
  };
   dispatch(setFilters(appliedFilters));
 },[isMantar,isEt,isPatates,isDomates,dispatch]);
useEffect(()=>{
   props.navigation.setParams({
     save:saveFilters
   });
  
},[saveFilters])

return(
 <View style={styles.screen}>

<Text style={styles.title}>İstemediğin ürünün ışığını söndür.</Text>
  <FilterSwitch label="Mantar" state={isMantar}
 onChange={newValue =>setIsMantar(newValue)}>
  </FilterSwitch>

  <FilterSwitch label="Kırmızı/Beyaz Et" state={isEt}
 onChange={newValue =>setIsEt(newValue)}>
  </FilterSwitch>

  <FilterSwitch label="Patates" state={isPatates}
 onChange={newValue =>setIsPatates(newValue)}>
  </FilterSwitch>

  <FilterSwitch label="Domates" state={isDomates}
 onChange={newValue =>setIsDomates(newValue)}>
  </FilterSwitch>

 </View>




);
};

FilterScreen.navigationOptions = (navData)=>{
    return{
     headerTitle:"Filtreleme",
  
       headerLeft:()=>(
 <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title="Menu" iconName="ios-menu"
  onPress={()=>{
     navData.navigation.toggleDrawer();
  }}/>
    
 </HeaderButtons>
 
       ),
      headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
         <Item title="Save" iconName="ios-save"
         onPress={
            navData.navigation.getParam("save")
         
        
         }/>
           
        </HeaderButtons>
        
              )
     } 
 };

const styles =StyleSheet.create({

screen:{
 flex:1,
 alignItems:"center"
},
title:{

  fontFamily:"open-sans-bold",
  fontSize:20,
  margin:20,
  textAlign:"center"
},
filterContainer:{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  width:"100%",
  marginVertical:10
}


});

export default FilterScreen;