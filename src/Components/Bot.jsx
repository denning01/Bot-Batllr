import React from "react";

function Bot({ bot, handleClick, handleDischarge }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>

      

      <img src={bot.avatar_url} alt={bot.name} />
      <p>{bot.catchphrase}</p>
      <button onClick={() => handleClick(bot)}>Enlist</button>
      <button onClick={() => handleDischarge(bot.id)} style={{ backgroundColor: "red", color: "white" }}>x</button>
    </div>
  );
}

export default Bot;
