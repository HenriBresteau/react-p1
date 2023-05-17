import { useCallback, useEffect, useState } from "react";

const roles = [
    "admin",
    "user",
    "moderateur",
    "comptable",
    "directeur",
    "secretaire",
];

function Roles() {
    const [critere, setCritere] = useState("");
    const handleChange = useCallback((event) => {
        setCritere(event.target.value);
    }, []);

    const [rolesFiltered, setRolesFiltered] = useState([]);

    useEffect(() => {
        setRolesFiltered(
            roles.filter((role) =>
                role.toLowerCase().includes(critere.toLowerCase())
            )
        );
    }, [critere]);

    return (
        <div>
            <input
                type="text"
                placeholder="recherche"
                name=""
                id=""
                value={critere}
                onChange={handleChange}
            />
            <br />
            {rolesFiltered.length
                ? rolesFiltered.map((role, index) => (
                      <li key={index}>{role}</li>
                  ))
                : "Aucune correspondance"}
        </div>
    );
}

export default Roles;
