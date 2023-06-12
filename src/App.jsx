import { useState } from "react"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import Searchbar from "./components/Searchbar"
function App() {
  const [user,setUser] = useState({
    username : ""
  })
  function handleUser(event){
    const {name,value} = event.target
    setUser((prevUser) => {
      return{
      ...prevUser,
      [name] : value
      }
    })
  }
  return (
    <div className="bg-dark-navy-blue w-full min-h-screen flex flex-col justify-center items-center">
      <div className="xs:w-5/6 sm:w-3/4 lg:w-3/5 w-full max-w-full">
       <Navbar />
       </div>
       <div className="xs:w-5/6 w-full max-w-full sm:w-3/4 lg:w-3/5 max-w-508">
        <Searchbar 
        onChange = {handleUser}
        user = {user.username}/>
       </div>
       <div className="xs:w-5/6 w-full max-w-full sm:w-3/4 lg:w-3/5 max-w-508">
        <Profile 
        user = {user.username}/>
       </div>
    </div>
  )
}

export default App
