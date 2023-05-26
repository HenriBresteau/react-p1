import { useCallback, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserList() {
    const [search, setSearch] = useState("");
    const [addUser, setAddUser] = useState("");
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    const handleAddUser = useCallback((event) => {
        setAddUser(event.target.value);
    }, []);

    useEffect(() => {
        // Fetch
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then((result) => setUsers(result));

        //axios
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result) => setUsers(result.data));
    }, []);

    useEffect(() => {
        setFilteredUsers(
            users.filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    const handleClick = useCallback(() => {
        setAddUser(addUser);
        setFilteredUsers([...filteredUsers, addUser]);
    }, [addUser, filteredUsers]);

    const deleteUser = useCallback(
        (userId) => {
            setUsers(users.filter((user) => user.id !== userId));
        },
        [users]
    );
    const navigate = useNavigate();
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
                    <div
                        className="col-md-6 col-lg-4"
                        key={index}
                        onClick={() => navigate("/users/" + user.id)}
                        role="button"
                    >
                        <UserProfile userData={user} deleteUser={deleteUser} />
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
