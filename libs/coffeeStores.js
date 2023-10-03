import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  const baseUrl = "https://api.foursquare.com/v3/places/nearby";
  return `${baseUrl}?ll=${latLong}&query=${query}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const { response: { results = [] } = {} } = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 10,
  });

  return results.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async (latLong = "43.65267326999575,-79.39545615725015") => {
  try {
    const photos = await getListOfCoffeeStorePhotos();
    const limit = 8;
    const query = "coffee stores";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY}`,
      },
    };

    const response = await fetch(getUrlForCoffeeStores(latLong, query, limit), options);
    const data = await response.json();

    if (data.results?.length > 0) {
      return data.results.map((venue, index) => ({
        ...venue,
        imageUrl: photos[index],
      }));
    }
  } catch (error) {
    console.error("Something Went Wrong fetching CoffeeStore", error);
    return [];
  }
};
