// Endpoints //
const mainUrl = "https://api.github.com/";
const rateAPIEnd = `${mainUrl}rate_limit`;

//Fetch functions//
const fetchRateLimit = async () => {
  const response = await fetch(rateAPIEnd);
  const data = await response.json();
  const {
    rate: { remaining },
  } = data;
  return remaining;
};

export { fetchRateLimit };
