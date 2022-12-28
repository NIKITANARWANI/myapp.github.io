import NavBar from "./NavBar.js";
import {useState} from "react";
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
export default function ChangePassword(){
	const nav=useNavigate();
	const[pw1,setPw1]=useState("");
	const[pw2,setPw2]=useState("");
	const[ans,setAns]=useState("");
	
	useEffect(()=>{
			const un=localStorage.getItem("un");
			if(un==null)
				nav("/login");
	},[]);
	const save=(event)=>{
		event.preventDefault();
		if(pw1==pw2)
		{
			const auth=getAuth();
			onAuthStateChanged(auth,(user)=>{
				updatePassword(user,pw1)
				.then(res=>{
					localStorage.clear();
					nav("/login")
				})
				.catch(err=>setAns("Issue: "+err));
			})
		}
		else
		{
			setAns("Passwords did not match");
		}
		
	}
	return(
	<>
	<center>
	<NavBar/>
	<h1>Change Password</h1>
	<form onSubmit={save}>
	<input type="password" placeholder="Enter New Password" />
	<br/><br/>
	<input type="password" placeholder="Confirm New Password" />
	<br/><br/>
	<input type="submit" value="Change Password"/>
	</form>
	<h1>{ans}</h1>
	</center>
	</>
	)
}
	
	
