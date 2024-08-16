
import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState('batman');
    const [age,setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () =>{
        setName('nightwing')
        
    }
    const incrementAge = () =>{
        setAge(age+1)
    }
    const togglestatus = () =>{
        setIsEmployed(!isEmployed)
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}> Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}> Increment Age</button>

        <p>is Employed: {isEmployed?'Yes':'No'}</p>
        <button onClick={togglestatus}> Toggle</button>
    </div>)
}
export default MyComponent