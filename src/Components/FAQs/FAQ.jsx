import React from "react";
import "./FAQ.css";
import Accordion from "./Accordian";


export default function FAQs() {
  const rules = [
    {
      title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
    },
    {
        title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
      },    {
        title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
      },    {
        title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
      },    {
        title: " Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus metus, porta ac ipsum ornare, ornare consequat augue. Integer ornare mollis bibendum. Nunc in rutrum sem, a bibendum ex. Donec nec placerat ante, vitae ornare.",
      },
  ];
  return (
    <div className="rules-container">
    
      <div className="rules-h">FAQs</div>
      {rules.map((rule)=>(
        <div>
         <Accordion  title={rule.title}>
      {rule.desc}
    </Accordion>
      </div>
      ))}
      
     
    </div>
  );
  
}