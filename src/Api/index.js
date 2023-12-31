import axios from 'axios';


export const getPlacesData = async(selectedType, sw, ne)=>{
    try{
        const {data:{data}}  = await axios.get(`https://travel-advisor.p.rapidapi.com/${selectedType}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              } 
          });
        return data
    }catch(error){
        console.log("error")
    }
}


// export const getWeatherData = async()=>{
//     try{
//         const {data} = await axios.gey("")

//     }
//     catch(erro){

//     }
// }