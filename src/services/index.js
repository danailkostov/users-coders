// Endpoints //
const mainUrl = "https://api.github.com/";
const rateAPIEnd = `${mainUrl}rate_limit`;

//Fetch functions//
const fetchRateLimit = async () => {
  try {
    const response = await fetch(rateAPIEnd);
    const data = await response.json();
    const {
      rate: { remaining },
    } = data;
    return remaining;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRateLimit };
