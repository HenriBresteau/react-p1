import { screen, render } from "@testing-library/react";
import Roles from "./Roles";

test("Afifcher le titre des roles", () => {
    render(<Roles />);
    const linkElement = screen.getByText("Liste des roles");
    expect(linkElement).toBeInTheDocument();
});

test("Afifcher un element de la liste", () => {
    render(<Roles />);
    const linkElement = screen.getByText("Utilisateur");
    expect(linkElement).toBeInTheDocument();
});
