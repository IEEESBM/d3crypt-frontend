import React from "react";
import "./Rules.css";

export default function Rules() {
  const rules = [
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
    },
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
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
