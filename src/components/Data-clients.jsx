import { useState, useEffect } from 'react';

function DataClients() {
    let [gets, setGets] = useState([]);

    useEffect(() => {
        fetch("https://649115f02f2c7ee6c2c7b868.mockapi.io/clients")
        .then(response => response.json())
        .then(data => {
            data.map(item => {
                
            })
            })
        }, []);

    return (
        <>
        </>
    )

    };
export default DataClients;