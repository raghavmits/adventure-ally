import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "37.848816",
    tr_latitude: "37.892550",
    tr_longitude: "-122.250537",
    bl_longitude: "-122.293773",
  },
  headers: {
    "X-RapidAPI-Key": "0dcbf70a95msh713d0acd139439bp18069bjsn764b549fe533",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async (sw, ne) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        tr_longitude: ne.lng,
        bl_longitude: sw.lng,
      },
      headers: {
        "X-RapidAPI-Key": "0dcbf70a95msh713d0acd139439bp18069bjsn764b549fe533",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
