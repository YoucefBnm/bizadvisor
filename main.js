import { demarcheContent } from "./js/sections/demarche.js";
import { headerContent } from "./js/sections/header.js";
import { heroText } from "./js/sections/hero.js";
import "./style.css";

const hero = document.querySelector("#hero");
const header = document.querySelector("#header");
const accordion = document.querySelector("#accordion");

hero.innerHTML = heroText;
header.innerHTML = headerContent;
accordion.innerHTML = demarcheContent;
// setupCounter(document.querySelector('#counter'))
