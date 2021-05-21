import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios'

const ShowAll = () => {
    const [allPets, setAllPets] = useState([])

    const [deleteClicked, setDeleteClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/things")
            .then(res => {
                console.log('*************')
                console.log(res)
                console.log('*************')
                setAllPets(res.data.results)
            })
            .catch()

    }, [deleteClicked]);


    return (
        <div>
            <div className="container">
                <Link to="/pets/new">Add a Pet to the Shelter.</Link>
                <h3>These Pets are looking for a good home.</h3>
                <br/>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPets.map((pet, idx) => {
                                return <tr key={idx}>
                                <th scope="row">{pet.name}</th>
                                <td>{pet.type}</td>
                                <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default ShowAll;