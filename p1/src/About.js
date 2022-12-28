import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import NavBar from "./NavBar"
export default function About()
{
	const nav=useNavigate();
	
	useEffect(()=>{
			const un=localStorage.getItem("un");
			if(un==null)/*Login nhi hai */
				nav("/login");
	},[]);
	return(
	<>
	<center>
	<NavBar/>
	<h1>About</h1>
	</center>
	</>
	);
}