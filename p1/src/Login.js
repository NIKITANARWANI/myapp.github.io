import NavBar from "./NavBar";
import {useState} from "react";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Login()
{
	const nav=useNavigate();
	
	useEffect(()=>{
			const un=localStorage.getItem("un");
			if(un!=null)
				nav("/home");
	},[]);
	const[ans,setAns]=useState("");
	const[un,setUn]=useState("");
	const [Pw,setPw]=useState("");
	//const nav=useNavigate();
	const hUn=(event)=>{setUn(event.target.value);}
	const hPw=(event)=>{setPw(event.target.value);}
	const check=(event)=>{
		event.preventDefault();
		const auth=getAuth();
		signInWithEmailAndPassword(auth,un,Pw)
		.then(res=>{
			localStorage.setItem("un",un);
			nav("/")
		})
		.catch(err=>setAns("issue"+err))
	}
	
	return(
	<>
	<center>
	<NavBar/>
	<h1>Login</h1>
	<form onSubmit={check}>
	<input type="email" placeholder="Enter reg email" onChange={hUn}/>
	<br/><br/>
	<input type="password" placeholder="Enter Password" onChange={hPw}/>
	<br/><br/>
	<input type="submit" value="Login"/>
	</form>
	<h1>{ans}</h1>
	</center>
	</>
	)
}