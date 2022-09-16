import React, {useState} from "react";
import linkedIn from "../../assets/img/linkedIn.png";
import GitHub from "../../assets/img/GitHub-Dark.png";
import stackOverflow from "../../assets/img/stackoverflow.png";

export default function Nav() {
const icons = [
    {
        href: "https://linkedin.com/in/robinostrowski",
        src: linkedIn,
        alt: "linkedIn Icon"
    },
    {
        href: "https://github.com/Bin-Ostrowski",
        src: GitHub,
        alt: "GitHub Icon"
    },
    {
        href: "https://stackoverflow.com/users/20006902/bin-ostrowski",
        src: stackOverflow,
        alt: "stack overflow Icon"
    },
]

const [currentIcon, setIcon] = useState(icons);

  return (
    <footer className="flex-row">
        <h2>Let's connect!</h2>
        {currentIcon.map((icons, i) => (

      <a
        href={icons.href} key={i}
        target="_blank"
        rel="noreferrer noopener"
        className="flex-wrap"
      >
        <img src={icons.src} style={{ width: "30" }} alt={icons.alt} />
      </a>
      
        ))}
    </footer>
  );
}
