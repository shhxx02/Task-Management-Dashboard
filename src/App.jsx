import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Employeedashboard from './components/Dashboard/Employeedashboard'
import Admindashboard from './components/Dashboard/Admindashboard'
import { getLocalStorage, setLocalStorage } from './utils/localstorage'
import { AuthContext } from './context/AuthProvider'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  
  const [user,setUser]= useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const LoggedInUser = localStorage.getItem('loggedInUser')

    if(LoggedInUser){
      const UserData =  JSON.parse(LoggedInUser)
      setUser(UserData.role)
      setLoggedInUserData(UserData.data)
    }
  
  }, [])
  
  

  const handleLogin =(email, password)=>{

    if(email=="admin@me.com" && password=="123"){
      setUser("admin")
      localStorage.setItem('LoggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>e.email== email && e.password == password)
      if (!employee) return alert("Employee not found!");
      if(employee){
      setUser("employee")
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data:employee}))
      }
    }else{
      alert("invalid Credentials")
    }
  }
  
  return (
    <div>
      <>
      {!user?<Login handleLogin={handleLogin}/> :null}
      {user == 'admin'?<Admindashboard changeUser={setUser} /> : (user=='employee'? <Employeedashboard changeUser={setUser} data={LoggedInUserData}  setUserdata={SetUserData} /> : null)}
      <ToastContainer position="top-center" />

      </>
    </div>
  )
}

export default App