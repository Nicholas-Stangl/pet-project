import React, { useState, useEffect } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const EditPet = (props) => {
    const [formInfo, setFormInfo] = useState({
        tname: "",
        type: "",
        desc: "",
        skillA: "",
        skillB: "",
        skillC: ""
    })

    const [errors, setErrors] = useState ({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/things/${props.petId}`)
        .then(res => {
            console.log('************')
            console.log(res)
            console.log('************')
            setFormInfo(res.data.results)
        })
        .catch(err=> console.log (err))

    }, []);




    const changeHandler = (e) =>{
        console.log("********CHANGING********")
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }

    // const submitHandler = (e) =>{
    //     e.preventDefault()
    //     console.log("getting ready to submit, please work.", formInfo)
    //     axios.put(`http://localhost:8000/api/things/update/${props.petdId}`, formInfo)
    //         .then(res=>{
    //             console.log('***********')
    //             console.log(res)
    //             navigate(`/products/${props.petId}`)
    //         })
    //         .catch(err=> console.log (err))
    // }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("getting ready to submit", formInfo)
        axios.put(`http://localhost:8000/api/things/update/${props.petId}`, formInfo)
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
            <h3>Edit {formInfo.name} </h3>
            <form className="col-4 mx-auto"onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" className="form-control" value={formInfo.name} onChange={changeHandler} />
                </div>
                <p style={{color:"red"}}>{errors.name? errors.name.message: ""}</p>

                <div className="form-group">
                    <label htmlFor="">Type:</label>
                    <input type="text" name="type" className="form-control" value={formInfo.type} onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.type? errors.type.message: ""}</p>
                
                <div className="form-group">
                    <label htmlFor="">Descriptoin:</label>
                    <input type="text" name="desc" className="form-control" value={formInfo.desc} onChange={changeHandler}/>
                </div>
                <p style={{color:"red"}}>{errors.desc? errors.desc.message: ""}</p>
                <br/>
                <br/>

                <h4>(Optional)</h4>
                <div className="form-group">
                    <label htmlFor="">Skill 1:</label>
                    <input type="text" name="skillA" className="form-control" value={formInfo.skillA} onChange={changeHandler}/> 
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill 2:</label>
                    <input type="text" name="skillB" className="form-control" value={formInfo.skillB} onChange={changeHandler}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Skill 3:</label>
                    <input type="text" name="skillC" className="form-control" value={formInfo.skillC} onChange={changeHandler}/>
                </div>


                <button type="submit" className="btn btn-primary">Edit Pet Info</button>
            </form>
            <br/>
            <br/>
            <br/>

        </div>
    );
};

export default EditPet;