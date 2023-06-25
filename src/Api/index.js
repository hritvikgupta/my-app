import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': 'ece039ee78mshf9c17bb324d2c67p1a24a0jsn9b52cb11c686',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async()=>{
    try{
        const {data:{data}}  = await axios.get(URL, options);
        return data
    }catch(error){
        console.log("error")
    }
}