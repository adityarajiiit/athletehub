import axios from "axios";
import { Navigate} from "react-router-dom";
import { useMyContext } from "../context/context.jsx";
import { useEffect,useState } from "react";
const AuthCheck=({children})=>{
    const{islogin,setuser,setislogin,setcategory}=useMyContext()
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
const verification=async()=>{
    try{
        setLoading(true)
        const response=await axios.get('http://localhost:5000/api/auth/verify',{
            withCredentials:true})
        if(response.data.success){
            setuser(response.data.name||'')
            setcategory(response.data.category||'')
            setislogin(true)
        }
        else {
            setislogin(false)
            setuser('')
            setcategory('')
        }
    }
    catch(error){
        console.log(error.message)
        setislogin(false)
        setuser('')
        setcategory('')
    }
    setLoading(false)

}
verification()

    },[setuser,setislogin,setcategory])

if(loading){
    return <div>Loading................</div>
}
if(!islogin){
    return <Navigate to='/sign-in'/>
}
return children
}
export default AuthCheck;