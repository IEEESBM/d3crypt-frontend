import React from "react";
import "./Rules.css";

export default function Rules() {
  const rules = [
    {
      title: "Rule 1:",
      desc: "The event is a 1.5-day event, and you need to finish answering all the questions in the stipulated time",
    },
    {
      title: "Rule 2: ",
      desc: "The decision for extension in the duration of the event will be taken by the board.",
    },
    {
      title: "Rule 3:",
      desc: " In case of a dispute, the board will take the final decision.",
    },
  ];
  return (
    <div className="rules-container">
      <div className="rules-h">Rules</div>
      {rules.map((rule) => (
        <div className="rules-box">
          <div className="rules-q">{rule.title}</div>

          <div className="rules-a">{rule.desc}</div>
        </div>
      ))}
    </div>
  );
}
