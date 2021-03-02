import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVORITE,SET_FILTERS,Update_Favorite} from "../actions/meals";
import AsyncStorage from "@react-native-community/async-storage";

const initalState={
    meals:MEALS,
    filteredMeals:MEALS,
    favoriteMeals:[],
  
   
};

const go=async (x)=>{
    console.log("islem tamam");
    try {
    
        await AsyncStorage.setItem("userData",JSON.stringify(x));

    } catch (e) {
        
    }

}
const mealsReducer=(state=initalState,action) =>{
    switch(action.type){
        case TOGGLE_FAVORITE:
             const existingIndex=state.favoriteMeals.findIndex(meal=>meal.id===action.mealId);
             if(existingIndex>=0){
                 const updatedFavMeals=[...state.favoriteMeals];
                 updatedFavMeals.splice(existingIndex,1);
                 go(updatedFavMeals);
                
                return {...state,favoriteMeals:updatedFavMeals}
             }
             else{
                 const mymeal=state.meals.find(meal=>meal.id===action.mealId);
                 go(state.favoriteMeals.concat(mymeal));
                 
                  return {...state,favoriteMeals:state.favoriteMeals.concat(mymeal)}
             }
         case Update_Favorite:
             return {...state,favoriteMeals:action.arrays}

        case SET_FILTERS:
            const appliedFilters=action.filters;
            const updatefilteredMeals=state.meals.filter(meal=>{
                if(!appliedFilters.mantar && meal.mantar){
                    return false;
                }
                if(!appliedFilters.et && meal.et){
                    return false;
                }
                if(!appliedFilters.patates && meal.patates){
                    return false;
                }
                if(!appliedFilters.domates && meal.domates){
                    return false;
                }
                return true;
            });
            return {...state,filteredMeals:updatefilteredMeals};
         default:
            return state
    }
    return state;


}

export default mealsReducer;