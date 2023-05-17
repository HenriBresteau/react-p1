import { useCallback, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [values, setValues] = useState([]);

    const historyValues = useCallback(
        (newCount) => {
            setValues([...values, count]);
            setCount(newCount);
        },
        [count, values]
    );

    const pair = count % 2 == 0 ? "Pair" : "Impair";
    return (
        <div className="my-3 card">
            <div className="card-header">
                <h2>Compteur</h2>
            </div>
            <div className="card-body text-center">
                <div className="badge text-bg-primary fs-2"> {count} </div>
                <div className="text-infos"> Le compteur est {pair} </div>
                <p className="mt-4">Historique : </p>
                <ol className="list-group list-group-numbered">
                    {values.map((value, index) => (
                        <li key={index} className="list-group-item">
                            {value}
                        </li>
                    ))}
                </ol>
            </div>
            <div className="card-footer d-flex justify-content-center gap-4">
                <button
                    className="btn btn-outline-success"
                    onClick={() => historyValues(count + 1)}
                >
                    +
                </button>
                <button
                    className="btn btn-outline-danger"
                    onClick={() => historyValues(count - 1)}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default Counter;
