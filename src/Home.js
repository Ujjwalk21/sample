import { useState } from "react";

const Home = () => {
    const [name, setName]= useState("Ujjwal");
    const [age, setAge] = useState(20);
    const handleClick = () =>
    {
        setName("Utsav");
        setAge(30);
    }


    return ( 
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>click me</button>

            <p>{ name } is {age } years old.</p>
        </div>
        
     );
}
 
export default Home;