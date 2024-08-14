import React from "react";
import Bot from "./Bot";

function BotCollection({ bots, handleEnlist }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          handleClick={handleEnlist}
          handleDischarge={() => {}}
        />
      ))}
    </div>
  );
}

export default BotCollection;
