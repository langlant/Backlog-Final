import {useState} from 'react'
import Axios from '../http-common'
import {Link} from "react-router-dom"


function Home(props){
    const [Title, setTitle] = useState('')
    const [Media,setMedia] = useState('')
    const [Description,setDescription] = useState('')
    const [Genre,setGenre] = useState('')
    const [Bstatus,setBstatus]= useState('')
    const [Message, setMessage] = useState('')    

    const axios_function = (url) =>{
        const variables = {
            title:Title,
            media: Media,
            description:Description,
            genre: Genre,
            bStatus: Bstatus
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

    const onCreate = () =>{
        axios_function('/create')
    }
    const onRead = () =>{
        axios_function('/read')
    }
    const onUpdate = () =>{
        axios_function('/update')
    }
    const onDelete = () =>{
        axios_function('/delete')
    }
    const onSearch = () =>{
        axios_function('/search') 
    }
    

    return(
        <div>
            <Link to = "/" style={{ marginRight: 10 }}>Login</Link>
            <Link to = "/home" style={{ marginRight: 10 }}>Home</Link>
            <Link to = "/backlog" style={{ marginRight: 10 }}>Backlog</Link>
            <h1>Welcome USER_ID!</h1> {/*Need to figure out how to pass on user_id*/}
            <p>
                Title:
            </p>
            <p>
                <input type = "text" name = "title" value = {Title} 
                    onChange = {function (e){
                        setTitle(e.target.value)
                    }}></input>
                <button onClick ={onSearch}>Search</button>

                    
            </p>
            <p>
                Genre:
            </p>
            <p>
                <input type = "text" name = "genre" value = {Genre} 
                    onChange = {function (e){
                        setGenre(e.target.value)
                    }}></input>
            </p>

            <p>
                <label for="media">Media Type</label>
                    <select name="media" id="media">
                        <option value="movie">Movie</option>
                        <option value="tv">TV</option>
                        <option value="book">Book</option>
                        <option value="videogame">Video Game</option>
                        <option value="podcast">Podcast</option>
                        <option value="comic">Comic</option>
                        <option value="audiobook">Audio Book</option>
                        <option value="other">Other</option>
                    </select>
            </p>
            <p>
                Description:
            </p>
            <p>
              <textarea name = 'desc' value = {Description}
                onChange = {function (e){
                    setDescription(e.target.value)
                }}></textarea>
            </p>
            <p>
                <label for="bstatus">Choose a status</label>
                <select name="bstatus" id="status">
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="backlog">Backlog</option>
                </select>
            </p>
            <p>
                <button onClick ={onCreate}>Create</button>
                <button onClick ={onRead}>Read</button>
                <button onClick ={onUpdate}>Update</button>
                <button onClick ={onDelete}>Delete</button>
            </p>

            <p>Posted by: Anthony Langley</p>
    <p>Contact Information: <a href="mailto:langlant@mail.gvsu.edu">
        langlant@mail.gvsu
    </a></p>
            <div>{ Message }</div>
        </div>
    )


}

export default Home