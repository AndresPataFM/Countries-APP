import React from 'react';
import al from "sweetalert";
import validate from './Validate.jsx'
// necesita 'npm install sweetalert-react'
import styles from "./Form.module.css"



export default function  Form() {
  const [errors, setErrors] = React.useState({});
  const [input, setInput] = React.useState({
    firstname: "",
    lastname:"",
    mail: "",
    Githubuser:"",
    
  });
  function onSearch(input) {
    fetch(`https://api.github.com/users/${input}`)
      .then(r => r.json())
      .then((recurso) => {
        console.log(recurso)
  
        if(recurso.main !== undefined){
          const login = {
           name:recurso.name,
            id: recurso.id,
            
           
          };
          
        } 
      });
    }
    const btnswitch=document.querySelector(".switch");
    if(btnswitch){
      btnswitch.addEventListener("click",function(){
        document.body.classList.toggle("dark");
        btnswitch.classList.toggle("active");
       
      })
    }
    
  
  
  
  const paises=[
    {"pais":"Where are you from?"},{
    "pais":"Colombia"},{"pais":"Argentina"},{"pais":"Peru"},{"pais":"Bolivia"},{"pais":"Paraguay"},{"pais":"Ecuador"}
  ]
  
  const mostraralerta=()=>{
  
    al({title:"very good",
    text:"Thank you for sharing your information with us !",
    icon:"success",
  button:"Nice!",
  position:"absolute",
    }
    )
  }
  const handleInputChange = function(e) {
  
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }
  const handleSubmit= function(e) {
    
    e.preventDefault()
    mostraralerta()
    
  }
  
  return (
  <div className={styles.force}>
<h4><em>If you want to collaborate with this project, please leave us your information</em></h4>
    <form onSubmit={handleSubmit}>
<div>
    <input placeholder="firstname"
      type="text" name="firstname" onChange={handleInputChange} value={input.firstname} />
   </div> 
   <div>
    <input placeholder="Lastname"
      type="text" name="lastname" onChange={handleInputChange} value={input.lastname} />
</div>
        <div>
    <input type="text"  className={errors.password && 'danger'} name="mail" placeholder="mail"
       onChange={handleInputChange} value={input.mail} />
    {errors.mail && (
      <p className="danger">{errors.mail}</p>
    )}
</div>
       <div>
    <input placeholder="GitHub User"
      type="text" name="Githubuser" onChange={handleInputChange} on={onSearch} value={input.Githubuser}/> 
</div>
 <div  >
<select className={styles.row} name="paises" id="selpaises">
{
  paises.map((item,i)=>(
    <option key={"paises"+i}value={i}> {item.pais}</option>
  ))
  }
  </select>
</div>
<input className={styles.buton} type="Submit" value="Send" ></input>
      </form>  
  </div>
     )
    }