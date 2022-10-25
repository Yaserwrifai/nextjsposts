import Navbar from "./Navbar";
import { Fragment } from "react";

 function Layout(props){
    return(
    <Fragment>
    <div>{props.childern}</div> 
    <Navbar />
    <h1>hallo from Layout</h1>
   
    <footer> footer</footer>
    </Fragment>
    )
}
export default  Layout