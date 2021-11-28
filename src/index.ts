require('dotenv').config();
import fetch from 'node-fetch';

const getAPIList = `http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/`;
const getPlayerSummaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_ID}`;
const getRecentlyPlayedGames = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
const getOwnedGames = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
const getFriendList = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&relationship=friend`;
const getAppDetails = `https://store.steampowered.com/api/appdetails?appids=${process.env.APP_ID}`;
const getLogo = `https://steamcdn-a.akamaihd.net/steam/apps/${process.env.APP_ID}/header.jpg`;

(async () => {
  const response = await fetch(getAPIList);
  const contentType = response.headers.get("content-type");

  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
    console.log(JSON.stringify(data, null, 1));
  } else {
    const data = await response.text();
    console.log(data)
  }
})();