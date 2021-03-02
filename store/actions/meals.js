export const TOGGLE_FAVORITE="TOGGLE_FAVORITE";
export const SET_FILTERS="SET_FILTERS";
export const Update_Favorite="Update_Favorite"

 export const  toggleFavorite=(id)=>{
                
     return {type:TOGGLE_FAVORITE,mealId:id}

 };
            

 export const update=(favorites)=>{

  
    return {type:Update_Favorite,arrays:favorites};

  
 }


export const  setFilters=filtersSettings=>{
    return {type:SET_FILTERS,filters:filtersSettings};
    
    };
     