import axios from 'axios'; //axios isi a library that is going to help u make our call

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = {
//   method: "GET",
//   params: {
//     bl_latitude: "11.847676",
//     tr_latitude: "12.838442",
//     bl_longitude: "109.095887",
//     tr_longitude: "109.149359",

//   },
//   headers: { //where rapid api keys resides
//     "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
//     "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
//   },
// }; // static object



export const getPlacesData = async (sw, ne) => {
    try {
        //request
        const {
          data: { data },
        } = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            //where rapid api keys resides
            "X-RapidAPI-Key":
              "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        });
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

