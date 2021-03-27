import {useState} from 'react'
import Axios from '../http-common'
import {Link} from "react-router-dom"


function Login(props){
    const [User_ID, setUser_ID] = useState('')
    const [Message, setMessage] = useState('')

    const axios_function = (url) =>{
        
        const variables = {
            user_id: User_ID
        }
        Axios.post(url,variables)
        .then(resoponse =>{
            setMessage(JSON.stringify(resoponse.data))
        }).catch(
            function(){
                console.log('Error')
            }
        )
    }
    const onSubmit = () =>{
        axios_function('/home')
    }
    
    return(
        <div>
            <Link to = "/" style={{ marginRight: 10 }}>Login</Link>
            <Link to = "/home" style={{ marginRight: 10 }}>Home</Link>
            <h1>Welcome to Backlog!</h1>
            <p>Please enter your User ID</p>
            <p>
                User ID: 
                <input type = "text" name = "user_id" placeholder= "User ID" value = {User_ID} 
                    onChange = {function (e){
                        setUser_ID(e.target.value)
                    }}></input>
            </p>
            <p>
            <button onClick ={onSubmit}>Submit</button>
            </p>


            <p>Posted by: Anthony Langley</p>
        <p>Contact Information: <a href="mailto:langlant@mail.gvsu.edu">
            langlant@mail.gvsu
        </a></p>
        <p>
            {Message}
        </p>
        </div>

    )
}

export default Login