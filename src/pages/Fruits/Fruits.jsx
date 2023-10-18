import axios from "axios";
import { useEffect, useState } from "react";

const Fruit = () => {
    const [fruits, setFruits] = useState([])


    useEffect(()=> {
        axios({
            method: "get",
            url: "/server/fruits"
        }).then((res)=> {
            console.log(res.data);
            setFruits (res.data)
        })

    }, [])


    return (
        <div>
            {
                fruits.map((fruit)=> {
                    return <li key={fruit.name}>
                        <p>Fruit Name: {fruit.name}</p>
                        <p>Fruit Color: {fruit.color}</p>
                        <p>Fruit Age: {fruit.age}</p>
                        <p>Ready To Eat{fruit.readyToEat}</p>
                    </li>
                })
            }
            Show Fruits
        </div>
    )
};

export default Fruit;