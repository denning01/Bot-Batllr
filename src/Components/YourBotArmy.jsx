import React from "react";
import Bot from "./Bot";

function YourBotArmy({ army, handleDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          handleClick={() => {}}
          handleDischarge={handleDischarge}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
