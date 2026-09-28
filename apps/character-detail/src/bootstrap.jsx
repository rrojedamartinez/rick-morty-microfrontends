import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import CharacterDetailApp from "./CharacterDetailApp";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div className="container py-4">
    <CharacterDetailApp characterId="1"/>
  </div>,
);
