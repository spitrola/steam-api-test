require('dotenv').config();
import fetch from 'node-fetch';

const getPlayerSummaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API_KEY}&steamids=${process.env.STEAM_ID}`;
const getRecentlyPlayedGames = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
const getOwnedGames = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&format=json`;
const getFriendList = `http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_ID}&relationship=friend`;

(async () => {
  const response = await fetch(getFriendList);
  const data = await response.json();
  console.log(JSON.stringify(data));
})();