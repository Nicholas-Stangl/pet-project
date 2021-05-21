import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios'

const OnePet = (props) => {
    const [petInfo, setPetInfo] = useState({})
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/things/${props.petId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setPetInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);

    const deletePet = (e, id) =>{
        console.log('delete pett number = ', id)
        axios.delete(`http://localhost:8000/api/things/delete/${props.petId}`)
            .then(res => {
                console.log('*******DELETED*****')
                console.log(res)
                navigate("/")
            
            })
            .catch(err=> console.log (err))
    }







    return (
        <div>
            <div className="container">
                <br /><br />
                <Link to="/">Back to Home</Link>
                <br />
                <h3>Details About: {petInfo.name}</h3>
                <br/>
                <button className="btn btn-success" onClick={(e)=>deletePet(e, petInfo._id)} >Adopt this Pet</button>
                <br/>
                <br/>
                <div className="col-4 mx-auto">

                    <div className="card">
                        <div className="card-body">
                            <p style={{fontWeight: "bold", fontSize: "20px", color: "blue"}}>Pet type: {petInfo.type}!</p>
                            <p style={{fontWeight: "bold", fontSize: "20px", color: "blue"}}>Description: {petInfo.desc}</p>
                            <p style={{fontWeight: "bold", fontSize: "20px", color: "red"}}>Skills:</p>
                            <p>1. {petInfo.skillA}</p>
                            <p>2. {petInfo.skillB}</p>
                            <p>3. {petInfo.skillC}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OnePet;