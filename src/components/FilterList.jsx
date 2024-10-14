import { useState } from "react";
import SelectLanguages from "./SelectLanguages.jsx";
import SelectLevelKnowledge from "./SelectLevelKnowledge.jsx";
import SelectPrice from "./SelectPrice.jsx";

export default function FilterList() {
  const [language, setLanguage] = useState("french");
  const [levelKnowledge, setLevelKnowledge] = useState("a1");
  const [price, setPrice] = useState("30");

  console.log(language);
  console.log(levelKnowledge);
  console.log(price);

  return (
    <ul className="flex gap-[20px]">
      <li>
        <SelectLanguages language={language} setLanguage={setLanguage} />
      </li>
      <li>
        <SelectLevelKnowledge
          levelKnowledge={levelKnowledge}
          setLevelKnowledge={setLevelKnowledge}
        />
      </li>
      <li>
        <SelectPrice price={price} setPrice={setPrice} />
      </li>
    </ul>
  );
}
