import React, { useState, useEffect } from "react";
import BotCollection from "./Components/BotCollection";
import YourBotArmy from "./Components/YourBotArmy";
import './App.css'; // Import CSS file for styling
import Bot from "./Components/Bot";


function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from the server
  useEffect(() => {
    fetch("http://localhost:5500/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // Handle enlisting a bot to the army
  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Handle discharging a bot from the army and deleting it from the backend
const handleDischarge = (botId) => {
  // Remove the bot from the army
  setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));

  // Delete the bot from the backend
  fetch(`http://localhost:5500/bots/${botId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        // Also remove the bot from the bot collection in the frontend
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
      } else {
        console.error("Failed to delete the bot.");
      }
    })
    .catch((error) => console.error("Error:", error));
};


  return (
    <div className="app-container">
      <h1>Bot Battlr</h1>
      <div className="bot-layout">
        <BotCollection bots={bots} handleEnlist={handleEnlist} />
        <YourBotArmy army={army} handleDischarge={handleDischarge} />
        {/* <Bot /> */}
      </div>
    </div>
  );
}

export default App;
