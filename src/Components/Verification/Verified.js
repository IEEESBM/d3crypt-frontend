import axios from "axios";
import "./Verified.css";
import React, { useEffect,useState } from "react";
import {Redirect,useParams} from "react-router-dom";
import ConsoleHelper from "../consolelogger";


const style1 = {
    padding: '36px 24px 0', 
    fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
}
const style2= {
    margin: 0,
     fontSize: '32px',
      fontWeight: '700',
       letterSpacing: '-1px',
        lineHeight: '48px',
         color:'#FFB800'
}
const style3  ={
    padding: '24px',
     fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontSize: '16px',
       lineHeight: '24px'
}

const style4={
    margin: 0,
    color:'#fff'
}
const style5 = {
    padding: '24px',
     fontFamily: 'Source Sans Pro, Helvetica, Arial, sans-serif',
      fontSize: '16px',
       lineHeight: '24px'
}

function Verified() {
    const [ctr,setCtr] = useState(5);
    const {token} = useParams();


function countdown(ctr) {
    if (ctr<=0) {
        window.location.href = 'https://d3crypt.ieeemanipal.com/signin';
    }
    if (ctr!=0) {
    setCtr(ctr-1);
    }
}
    useEffect(()=>{
        axios.get("https://d3crypt-backend.herokuapp.com/verify-email",{
            // axios.get("http://localhost:4000/verify-email",{
        headers: {
                'x-access-token': token
              }
        })
        .then(()=>{
            ConsoleHelper('Done')
        })
        .catch((err)=>{

        })
    },[])

    useEffect(()=>{
        setInterval(function(){ countdown(ctr); },1000);
    },[ctr])
  return (
    <>
      <div style={{backgroundColor: '#1b1b1b'}}>
      <table border="0" cellPadding="0" cellSpacing="0" width="100%">
          <tbody>
    <tr>
      <td align="center" bgcolor="#1b1b1b">
        <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: '600px'}}>
          <tbody>
          <tr>
            <td align="center" valign="top" style={{padding: '36px 24px'}}>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#1b1b1b">
        <table border="0" bgcolor="#292929" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: '600px'}}>
         <tbody>
          <tr>
            <td align="left" bgcolor="#1b1b1b" className="style1">
              <h1 className="style2">Email Verified</h1>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#1b1b1b">
        <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: '600px'}}>
          <tbody>
          <tr>
            <td align="left" bgcolor="#1b1b1b" className="style3">
              <p className="style4">You will be redirected to the login page in <span id="counter">{ctr}</span> seconds</p>
            </td>
          </tr>
          <tr>
            <td align="left" bgcolor="#1b1b1b">
              <table border="0" cellPadding="0" cellSpacing="0" width="100%">
              </table>
            </td>
          </tr>
          <tr>
            <td align="left" bgcolor="#1b1b1b" className="style5">
              <p className="style4">If that doesn't work, click on the link below:</p>
              <p style={{margin: 0}}><a href="https://d3crypt.ieeemanipal.com/signin" target="_blank">D3crypt</a></p>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#1b1b1b" style={{padding: '24px'}}>
        <table border="0" cellPadding="0" cellSpacing="0" width="100%" style={{maxWidth: '600px'}}>
        </table>
      </td>
    </tr>
    </tbody>
  </table>     
      </div>
    </>
  );
}

export default Verified;