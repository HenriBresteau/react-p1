import { screen, render } from "@testing-library/react";
import UserList from "./UserList";
import axios from "axios";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
    useNavigate: () => jest.fn(),
}));

test("Afifcher des utilisateurs", async () => {
    const mockUsers = [{ name: "Eva" }, { name: "Marc" }];
    const mockRes = { data: mockUsers };
    axios.get.mockResoltvedValue(Promise.resolve(mockRes));

    render(<UserList />);
    await screen.findByText("Eva");
    expect(screen.getByText("Eva")).toBeInTheDocument();
    expect(screen.getByText("Marc")).toBeInTheDocument();
});
