import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


export const getPlacesData = async (sw, ne) => {
  if (!sw || !sw.lat || !sw.lng || !ne || !ne.lat || !ne.lng) {
    console.log('Invalid sw or ne values');
    return;
  }

  try {
    const { data } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        bl_longitude: sw.lng,
      },
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    // console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
