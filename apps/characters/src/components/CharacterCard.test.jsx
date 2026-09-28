import { fireEvent, render, screen } from "@testing-library/react";

import CharacterCard from "./CharacterCard";
// 1
test("muestra los datos del personaje", () => {
  const character = {
    id: 1,
    name: "Rick Sanchez",
    image: "rick.jpg",
    status: "Alive",
    species: "Human",
    gender: "Male",
  };

  render(<CharacterCard character={character} onSelect={() => {}} />);

  expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();

  expect(screen.getByText("Human")).toBeInTheDocument();

  expect(screen.getByText("Male")).toBeInTheDocument();
});
// 2
test("selecciona el personaje", () => {
  const handleSelect = jest.fn();

  const character = {
    id: 1,
    name: "Rick Sanchez",
    image: "rick.jpg",
    status: "Alive",
    species: "Human",
    gender: "Male",
  };

  render(<CharacterCard character={character} onSelect={handleSelect} />);

  fireEvent.click(
    screen.getByRole("button", {
      name: "Ver detalle",
    }),
  );

  expect(handleSelect).toHaveBeenCalledWith(1);
});
