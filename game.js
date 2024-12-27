import{jsx as _jsx}from"react/jsx-runtime";import{useEffect,useState}from"react";// Constants
const groupId="32900359";const gameIds=["90363830187974","107400840408672","14379716011","16884631785","93270608557389","114400285065649","18900226764","18196050689","18854070920"]// Replace with your game IDs
;// Function to fetch group's games (place_ids)
async function fetchGroupGames(){try{const response=await fetch(`https://srv0.palfal.com:3000/groupgames/${groupId}`);const data=await response.json();const placeIds=data.data.map(game=>{var _game_rootPlace;return(_game_rootPlace=game.rootPlace)===null||_game_rootPlace===void 0?void 0:_game_rootPlace.id;}).filter(Boolean);//console.log("Fetched place IDs:", placeIds)
return placeIds;}catch(error){console.error("Error fetching group games:",error);return[];}}// Function to fetch universe IDs from place IDs
async function fetchUniverseIds(placeIds){const universeIds=[];for(const placeId of placeIds){//console.log("placeid", placeId)
try{const response=await fetch(`https://srv0.palfal.com:3000/universe/${placeId}`);const data=await response.json();//console.log("universeids", data)
if(data.universeId){universeIds.push(data.universeId);//console.log(`Fetched universe ID ${data.universeId} for place ID ${placeId}`)
}}catch(error){console.error(`Error fetching universe ID for place ID ${placeId}:`,error);}}//console.log("All fetched universe IDs:", universeIds)
return universeIds;}// Function to fetch game stats using universe IDs
async function fetchGameStats(universeIds){const universeIdsString=universeIds.join(",");try{const response=await fetch(`https://srv0.palfal.com:3000/stats/${universeIdsString}`);const data=await response.json();//console.log("Fetched game stats data:", data)
return data.data||[];}catch(error){console.error("Error fetching game stats:",error);return[];}}// Function for fetching the number of games
export function withTextChange(Component){return props=>{const[gamesCount,setGamesCount]=useState("Loading...");useEffect(()=>{async function updateGamesCount(){const placeIds=await fetchGroupGames();setGamesCount(placeIds.length.toString());}updateGamesCount()// Initial fetch
;const intervalId=setInterval(updateGamesCount,6e4)// Update every 60 seconds
;return()=>clearInterval(intervalId)// Clean up interval on unmount
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:gamesCount});};}export function withGameCount(Component){return props=>{const[gameCount,setGameCount]=useState("Loading...");useEffect(()=>{async function countGames(){setGameCount(gameIds.length.toString());}countGames()// Initial count
;return()=>{}// No interval or cleanup needed since it's a static count
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:gameCount});};}// Function for fetching the total number of players
export function withTextChange1(Component){return props=>{const[playersCount,setPlayersCount]=useState("Loading...");useEffect(()=>{async function updatePlayersCount(){const placeIds=await fetchGroupGames();const universeIds=await fetchUniverseIds(placeIds);const gamesData=await fetchGameStats(universeIds);let totalPlayersCount=0;gamesData.forEach(game=>{//console.log("Game data for players count:", game)
totalPlayersCount+=game.playing||0;});//console.log("Total players count:", totalPlayersCount)
setPlayersCount(totalPlayersCount.toString());}updatePlayersCount()// Initial fetch
;const intervalId=setInterval(updatePlayersCount,6e4)// Update every 60 seconds
;return()=>clearInterval(intervalId)// Clean up interval on unmount
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:playersCount});};}export function playersCount(Component){return props=>{const[playersCount,setPlayersCount]=useState("Loading...");useEffect(()=>{async function updatePlayersCount(){try{const universeIds=[];for(const gameId of gameIds){try{const response=await fetch(`https://srv0.palfal.com:3000/universe/${gameId}`);const data=await response.json();console.log("Fetched universeid data:",data);if(data.universeId){universeIds.push(data.universeId);}}catch(error){console.error(`Error fetching universe ID for game ID ${gameId}:`,error);}}const gamesData=await fetchGameStats(universeIds);let totalPlayersCount=0;gamesData.forEach(game=>{totalPlayersCount+=game.playing||0;});setPlayersCount(totalPlayersCount.toString());}catch(error){console.error("Error updating players count:",error);}}updatePlayersCount()// Initial fetch
;const intervalId=setInterval(updatePlayersCount,6e4)// Update every 60 seconds
;return()=>clearInterval(intervalId)// Clean up interval on unmount
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:playersCount});};}// Function for fetching the total number of visits
export function withTextChange2(Component){return props=>{const[visitsCount,setVisitsCount]=useState("Loading...");useEffect(()=>{async function updateVisitsCount(){const placeIds=await fetchGroupGames();const universeIds=await fetchUniverseIds(placeIds);const gamesData=await fetchGameStats(universeIds);let totalVisitsCount=0;gamesData.forEach(game=>{//console.log("Game data for visits count:", game)
totalVisitsCount+=game.visits||0;});// Format the total visits count with commas
const formattedVisitsCount=totalVisitsCount.toLocaleString();//console.log("Formatted total visits count:", formattedVisitsCount)
setVisitsCount(formattedVisitsCount);}updateVisitsCount()// Initial fetch
;const intervalId=setInterval(updateVisitsCount,6e4)// Update every 60 seconds
;return()=>clearInterval(intervalId)// Clean up interval on unmount
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:visitsCount});};}export function gameVisits(Component){return props=>{const[visitsCount,setVisitsCount]=useState("Loading...");useEffect(()=>{async function updateVisitsCount(){try{const universeIds=[];for(const gameId of gameIds){try{const response=await fetch(`https://srv0.palfal.com:3000/universe/${gameId}`);const data=await response.json();if(data.universeId){universeIds.push(data.universeId);}}catch(error){console.error(`Error fetching universe ID for game ID ${gameId}:`,error);}}const gamesData=await fetchGameStats(universeIds);let totalVisitsCount=0;gamesData.forEach(game=>{totalVisitsCount+=game.visits||0;});// Format the total visits count with commas
const formattedVisitsCount=totalVisitsCount.toLocaleString();setVisitsCount(formattedVisitsCount);}catch(error){console.error("Error updating visits count:",error);}}updateVisitsCount()// Initial fetch
;const intervalId=setInterval(updateVisitsCount,6e4)// Update every 60 seconds
;return()=>clearInterval(intervalId)// Clean up interval on unmount
;},[]);return /*#__PURE__*/_jsx(Component,{...props,text:visitsCount});};}
export const __FramerMetadata__ = {"exports":{"withTextChange2":{"type":"reactHoc","name":"withTextChange2","annotations":{"framerContractVersion":"1"}},"withGameCount":{"type":"reactHoc","name":"withGameCount","annotations":{"framerContractVersion":"1"}},"playersCount":{"type":"reactHoc","name":"playersCount","annotations":{"framerContractVersion":"1"}},"withTextChange":{"type":"reactHoc","name":"withTextChange","annotations":{"framerContractVersion":"1"}},"withTextChange1":{"type":"reactHoc","name":"withTextChange1","annotations":{"framerContractVersion":"1"}},"gameVisits":{"type":"reactHoc","name":"gameVisits","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Testing.map