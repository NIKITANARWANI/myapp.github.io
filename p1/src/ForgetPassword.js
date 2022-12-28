import NavBar from "./NavBar.js";
import {useState} from "react";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export default function ForgetPassword(){
	const nav=useNavigate();
	const[un,setUn]=useState("");
	const[ans,setAns]=useState("");
	
	useEffect(()=>{
			const un=localStorage.getItem("un");
			if(un!=null)
				nav("/home");
	},[]);
	const hUn=(event)=>{setUn(event.target.value);}
	const save=(event)=>{
		event.preventDefault();
			const auth=getAuth();
			sendPasswordResetEmail(auth,un)
			.then(res=>nav("/login"))
			.catch(err=>setAns("issue"+err))
		
	}
	return(
	<>
	<center>
	<NavBar/>
	<h1>Forget Password</h1>
	<form onSubmit={save}>
	<input type="email" placeholder="enter reg Email" onChange={hUn}/>
	<br/><br/>
	<input type="submit" value="Reset Password"/>
	</form>
	<h1>Check Ur Email</h1>
		<h1>{ans}</h1>
		</center>
		</>
	);
}
	
	
