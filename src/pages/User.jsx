import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserProfile from "../components/UserProfile";

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => setUser(res.data));
    }, [id]);
    return (
        <div>
            {user.name ? (
                <UserProfile userData={user} complete></UserProfile>
            ) : (
                <div className="col-12 text-center mt-4">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default User;
