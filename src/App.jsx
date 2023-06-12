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
    <div className="bg-dark-navy-blue w-full min-h-screen flex flex-col justify-center items-center py-20">
      <div className="w-11/12 xs:w-5/6 sm:w-3/4 lg:w-120 ">
       <Navbar />
       </div>
       <div className="xs:w-5/6 w-11/12 sm:w-3/4 lg:w-120">
        <Searchbar 
        onChange = {handleUser}
        user = {user.username}/>
       </div>
       <div className="xs:w-5/6 w-11/12 sm:w-3/4 lg:w-120">
        <Profile 
        user = {user.username}/>
       </div>
    </div>
  )
}

export default App
