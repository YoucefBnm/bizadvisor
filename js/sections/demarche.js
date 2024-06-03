import { demarcheEtapes } from "../../constants";
import { accordionItem } from "../components/accordionItem";

export const demarcheContent = demarcheEtapes
  .map((demarch, index) => {
    const { id, title, description } = demarch;
    const step = index + 1;
    return accordionItem(id, step, title, description);
  })
  .join("");
