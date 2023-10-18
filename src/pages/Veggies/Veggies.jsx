import axios from "axios";
import React, { useEffect, useState } from "react";

const Veggies = () => {

    // state to keep track of veggies
    const [veggies, setVeggies] = useState([])



    // useEffect to make request for veggies

    useEffect(()=> {
        axios({
            method: "GET",
            url: "/server/veggies"
        }).then((res)=> {
            setVeggies(res.data);
        })
    }, [])


    return (
        <div>
            SHow Veggies
            {
                veggies.map((veggie)=> {
                    return (
                        <div key={veggie._id}>
                            Name: {veggie.name}, Age: {veggie.age}, Color: {veggie.color}

                        </div>
                    )
                })
            }

        </div>
    )
};

export default Veggies;
