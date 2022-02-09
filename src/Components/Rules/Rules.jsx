import React from "react";
import "./Rules.css";

export default function Rules() {
  const rules = [
    {
      title: "",
      desc: " 1. The contest tests your resolution to hunt down clues and ascertain the best solution. Channel your inner Sherlock Holmes and place your best guess by connecting the dots between the visual aids provided.",
    },
    {
      title: " ",
      desc: " 2. Starting on 13th February, 12pm, your quest ends in 36 hours. You need to finish answering all the questions within the allotted time.",
    },
    {
      title: " ",
      desc: "3. In case of a scoring dispute, the admin’s decision is final and absolute.",
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
