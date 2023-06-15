import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Searchbar from "./components/Searchbar"
import Loader from "./components/Loader"
function App() {
  const [user,setUser] = useState({
    username : ""
  })
  const [loading,setLoading] = useState(true)
  const [input,setInput] = useState("octocat")
  const [error,setError] = useState(false)
  const [theme,setTheme] = useState(true)
  function handleUser(event){
    const {name,value} = event.target
    setUser((prevUser) => {
      return{
      ...prevUser,
      [name] : value
      }
    },
    )
  }

  const [github,setGithub] = useState([])
  useEffect(() => {
    async function getProfile(){
      const res = await fetch(`https://api.github.com/users/${input}`)
      if(res.status == 200){
      const data = await res.json()
      setError(false)
      console.log(data)
      setGithub(data)
      const timerId = setTimeout(() => {
        setLoading(false)
      },2000)
      return () => clearTimeout(timerId)
    }
    else{
      console.log(res.status);
      setLoading(false)
      setError(true)
    }
  
  }
    getProfile()
  },[input])
 const [profile,setProfile] = useState({
  name : "",
  avatar_url : "",
  login : "",
  created_at : "",
  bio : "",
  public_repos : "",
  followers : "",
  following : "",
  location : "",
  blog : "",
  twitter_username : "",
  company : "",
  message : ""
 })
 function toggleTheme(){
  setTheme(prevTheme => !prevTheme)
 }
 useEffect(() => {
  setProfile((prevProfile) => {
    return{
    ...prevProfile,
    name : github.name,
    avatar_url : github.avatar_url,
    login : github.login,
    created_at : github.created_at,
    bio : github.bio,
    public_repos : github.public_repos,
    followers : github.followers,
    following : github.following,
    location : github.location,
    blog : github.blog,
    twitter_username : github.twitter_username,
    company : github.company,
      }})
 },[github])

  function handleClick(event){
    event.preventDefault()
    setInput(user.username)
  }
  return (
    <div className={`${theme ? "bg-dark-navy-blue" : "bg-whitish-blue"} w-full min-h-screen flex flex-col justify-center items-center py-20`}>
      {loading ? <Loader
      dark = {theme}/> : <>
      <div className="w-11/12 xs:w-5/6 sm:w-110 600:w-100 lg:w-120 ">
       <Navbar 
       onClick = {toggleTheme}
       dark = {theme}/>
       </div>
       <div className="xs:w-5/6 w-11/12 sm:w-110 600:w-100 lg:w-120 ">
        <Searchbar 
        onChange = {handleUser}
        user = {user.username}
        onClick = {handleClick}
        error = {error}
        dark = {theme}/>
       </div>
       <div className ="xs:w-5/6 w-11/12 600:w-100 sm:w-110 lg:w-120 ">
        <Profile 
        input = {input}
        user = {user.username}
        profile = {profile}
        dark = {theme}
        />
       </div>
       </>}
    </div>
    
  )
}

export default App
