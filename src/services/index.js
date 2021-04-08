// Endpoints //
const mainUrl = "https://api.github.com/";
const rateAPIEnd = `${mainUrl}rate_limit`;
const userAPIEnd = `${mainUrl}users/`;

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

const fetchUser = async (user) => {
  try {
    const response = await fetch(`${userAPIEnd}${user}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchFollowers = async (user) => {
  try {
    const followersAPIEnd = `${mainUrl}users/${user}/followers?per_page=100`;
    const response = await fetch(followersAPIEnd);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const fetchRepos = async (user) => {
  try {
    const reposAPIEnd = `${mainUrl}users/${user}/repos?per_page=100`;
    const response = await fetch(reposAPIEnd);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchRateLimit, fetchUser, fetchFollowers, fetchRepos };
