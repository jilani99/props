import React from "react";
import {Button } from 'react-bootstrap'
function Dat(props){
    const aler=() => alert("this my bio ")
    return (
        <>
        <div className="or">
<div className="on">
        <h1>Hello my name is {props.name}  im  {props.age} , and i m {props.filed} </h1>
        <Button variant="dark" onClick={aler}>bio</Button>
        </div>
        <div className="to">
        {props.children}
        </div>
       
        </div>
        <div className="az">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magni hic culpa quam quasi, cupiditate saepe odit vero minus. Cupiditate reiciendis nisi saepe ducimus facere accusamus asperiores quas dolorum consequuntur!</p>
            </div>
        <div className="im" >
            <img src={props.i}/>
            <img src={props.a}/>
            <img src={props.z}/>


            </div>


        </>
    )
}
export default Dat