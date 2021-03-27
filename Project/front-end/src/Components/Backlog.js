import {useState} from 'react'
import Axios from '../http-common'
import {Link} from "react-router-dom"

function Backlog(){

    const renderBacklog = (data) => {
        for (var i=0; i<data.length; i++){
            <div>
                <view>
                    <li>data[i].title</li>
                    <ul>
                        <li>"Genre: " + data[i].genre</li>
                        <li>"Media Type: " + data[i].media</li>
                        <li>"Status: " + data[i].bstatus</li>
                        <li>"Description: " + data[i].description </li>
                    </ul>   
                </view>
            </div> 
        }
    }
    return(
        <div>
            <Link to = "/" style={{ marginRight: 10 }}>Login</Link>
            <Link to = "/home" style={{ marginRight: 10 }}>Home</Link>
            <Link to = "/backlog" style={{ marginRight: 10 }}>Backlog</Link>
            <h1>Welcome USER_ID!</h1>
            <h3>Here is your backlog:</h3>
            <view>
                {renderBacklog()}
            </view> 
            <p>Posted by: Anthony Langley</p>
    <p>Contact Information: <a href="mailto:langlant@mail.gvsu.edu">
        langlant@mail.gvsu
    </a></p>
        </div>

    )
}

export default Backlog