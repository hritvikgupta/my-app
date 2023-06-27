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
                'X-RapidAPI-Key': '81a7faad76msh7a3c64585c1b837p1ad653jsn5727882021d9',
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