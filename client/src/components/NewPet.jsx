import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const NewPet = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        desc: "",
        skillA: "",
        skillB: "",
        skillC: ""
    })

    const [errors, setErrors] = useState ({})

    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit, please work", formInfo)
        axios.post('http://localhost:8000/api/things/create', formInfo)
            .then(res=>{
                console.log('***********')
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }
                else{
                    setErrors(res.data.errors)
                }

            })
            .catch(err=> console.log (err))
    }

    return (
        <div>
            <br />
            <Link to="/">Back to Home</Link>
            <br />
            <br />
            <h3>Know a Pet needing a Home?</h3>
            <form className="col-4 mx-auto"onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className="form-control" onChange={changeHandler} />
                </div>
                <p style={{color:"red"}}>{errors.name? errors.name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input type="text" name="type" className="form-control" onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.type? errors.type.message: ""}</p>
                
                <div className="form-group">
                    <label htmlFor="">Descriptoin:</label>
                    <input type="text" name="desc" className="form-control" onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.desc? errors.desc.message: ""}</p>
                <br/>
                <br/>

                <h4>(Optional)</h4>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" name="skillA" className="form-control" onChange={changeHandler}/> 
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" name="skillB" className="form-control" onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" name="skillC" className="form-control" onChange={changeHandler}/>
                </div>


                <button type="submit" className="btn btn-primary">Add a Pet</button>
            </form>

        </div>
    );
};

export default NewPet;