import axios from "axios";
import React, { useState } from "react";

const CreateVegies = () => {

    // we need state
    const [veggieData, setVeggieData] = useState({
        name: "",
        color: "",
        age: 0,
        isHealthy: true, 
        readyToEat: false
    })

    const [error, setError] = useState('')

    // handelSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!veggieData.name || !veggieData.color) {
            setError("404 error")
            return
        }

        console.log(veggieData);
        axios({
            method: "POST",
            url: "/server/veggies",
            data: veggieData // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
        }).then((res)=> {
            console.log(res);
            setVeggieData({
                name: '',
                color: '',
                age: 0,
                isHealthy: true,
                readyToEat: false
            })
            setError('')

        })
    }






    return (
        <div>
            <h1>Create Veggies</h1>
            {
                error && <div>{error}</div>
            }
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name="name" value={veggieData.name} onChange={(e) => setVeggieData({...veggieData, name: e.target.value})} /><br/>
                age: <input type="number" name="name" value={veggieData.age} onChange={(e) => setVeggieData({...veggieData, age: e.target.value})} /><br/>
                Color: <input type="text" name="color" value={veggieData.color} onChange={(e) => setVeggieData({...veggieData, color: e.target.value})} /><br/>
                Is Healthy: <input type="checkbox" name="isHealthy" value={veggieData.isHealthy} onChange={(e) => setVeggieData({...veggieData, isHealthy: e.target.value})} /><br/>
                Is Ready To Eat: <input type="checkbox" name="readyToEat" value={veggieData.readyToEat} onChange={(e) => setVeggieData({...veggieData, readyToEat: !veggieData.readyToEat})} /><br/>
                <button>Create Fruit</button>
             </form>
        </div>);
};

export default CreateVegies;
