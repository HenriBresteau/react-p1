import { useCallback, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";

const users = ["Eva", "Aude", "Marc", "Anne"];
function UserList() {
    const [search, setSearch] = useState("");
    const [addUser, setAddUser] = useState("");

    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const handleAddUser = useCallback((event) => {
        setAddUser(event.target.value);
    }, []);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) =>
                user.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search]);

    const handleClick = useCallback(() => {
        setAddUser(addUser);
        setFilteredUsers([...filteredUsers, addUser]);
    }, [addUser, filteredUsers]);

    return (
        <div>
            <h2>Liste des utilisateurs</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            onChange={handleSearch}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            Nouvel Utilisateur
                        </span>
                        <input
                            type="text"
                            aria-label="First name"
                            className="form-control"
                            placeholder="Nom"
                            onChange={handleAddUser}
                        />
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                            id="button-addon2"
                            onClick={handleClick}
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </div>
            <div className="row gy-4">
                {filteredUsers.map((user, index) => (
                    <div className="col-md-6 col-lg-4" key={index}>
                        <UserProfile userData={user} />
                    </div>
                ))}
            </div>
            <div className="col-12 text-center mt-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default UserList;
