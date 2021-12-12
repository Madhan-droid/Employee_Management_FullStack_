import './App.css';
import { useState} from "react";
import CreateEmp from './Components/Create';
import ReadEmp from './Components/Read';
import UpdateEmp from './Components/Update';
import DeleteEmp from './Components/Delete';
import validator from "validator";


function App(props) {
  const [empId, setEmpId] = useState(props.empId);
  const [firstName, setfirstName] = useState(props.firstName);
  const [surName, setsurName] = useState(props.surName);
  const [email, setEmail] = useState(props.email);
  const [dob, setDob] = useState(props.dob);
  const [gender, setGender] = useState(props.gender);
  const [buttonState , setButtonState] = useState(props.buttonState);
  const [status , setStatus] = useState(props.status);
  const [hideEmpId , setHideEmpId] = useState(props.hideEmpId);
  const [create , setCreate] = useState(props.create);
  const [read , setRead] = useState(props.read);
  const [update , setUpdate] = useState(props.update);
  const [deletee , setDltee] = useState(props.deletee);

  const empUrl=props.empUrl;
  const empData ={
    firstName,surName,email,dob,gender,empId,empUrl,setfirstName,setsurName,setEmail,setDob,setGender,setEmpId, buttonState,
  }
  
  
  const readUpdateDeleteEmp = (mode) => {
    clearFields();
    switch(mode){
      case 'Read':
        setStatus( 'Read Existing Employee');
        setButtonState("Read");
        setRead(true);
        break;

       case 'Update' :
         setStatus("Update Existing Employee");
         setButtonState("Update");
         setUpdate(true);
         break;

       case 'Delete':
         setStatus( "Delete Existing Employee");
         setButtonState("Delete");
         setDltee(true);
         break;
           
       default:
         setStatus('Create New Employee');
         setButtonState("Create");
         setHideEmpId(true);
         setCreate(true);
    } 
  }

const clearFields = () =>{
  setEmpId(props.empId);
  setfirstName(props.firstName);
  setsurName(props.surName);
  setEmail(props.email);
  setDob(props.dob);
  setGender(props.gender);
  setHideEmpId(false);
  setCreate(props.create);
  setRead(props.read);
  setUpdate(props.update);
  setDltee(props.deletee);
}

const createEmp = () => {
  CreateEmp(empData);
}
const readEmp = () => {
       ReadEmp(empData);
}
const updateEmp = () => {
  UpdateEmp(empData);
}
const deleteEmp = () => {
  DeleteEmp(empData);
}

const emailValidation = () =>{
  if (buttonState !== 'Delete') {
    if(validator.isEmail(email))
       {
           updateDelEmployee();
        } 
    else {
          alert("Incorrect email");
      }}
else{
       updateDelEmployee();
}
}


const updateDelEmployee = () =>{
  switch(buttonState){
  case 'Update' :
       updateEmp();
     break;

  case 'Delete' :
        deleteEmp();
         break;

  default:
      createEmp(empData);
}}



const showButtonUp = hideEmpId ?{display :'none'} :{display:'block' ,float:'right'};
const showButtonDown = buttonState==='Read' ? {display:'none' }: {display:'block' ,float:'right'};
const createButtonActive = create ? "CreateButton" : " ";
const readButtonActive = read ? "ReadButton" : " ";
const updateButtonActive = update ? "UpdateButton" : " ";
const deleteButtonActive = deletee ? "DeleteButton" : " ";
      
return (
    <div className="App">
      <div className="App-header">
        <h1>Employee Management </h1> 
        <h3>Open Book Assignment by Madhan Kumar T</h3>
        <button className={createButtonActive} onClick={(e)=> readUpdateDeleteEmp('Create')} >Create</button>
        <button className={readButtonActive} onClick={ (e) => readUpdateDeleteEmp('Read')} >Read</button>
        <button className={updateButtonActive} onClick={(e) => readUpdateDeleteEmp('Update')} >Update</button>
        <button className={deleteButtonActive} onClick={(e) => readUpdateDeleteEmp('Delete')} >Delete</button> <hr />
       
       </div>
       <div className='Status-Updater'>
       <p>{status}</p>   
       <hr />
      
       </div>
       <div className='information'>
       <table>
        <tbody>
         <tr>
          <td> 
            <label htmlFor='myEmpId' style = {{ fontWeight : "bold"}}>Employee ID  :</label>
         </td>
         <td>
        <input type="text" value={empId} id='myEmpId' onChange={(event)=>{
          setEmpId(event.target.value);}}   />
        </td>
      </tr>
      </tbody>

      <tbody>
      <tr>
            <td></td>
            <td style={showButtonUp}><input type='button' value='Read'  onClick={ readEmp } /></td> 
           </tr>  
        </tbody>
        </table>
        <hr />
        <table>
      <tbody>
      <tr>
      <td> 
        <label htmlFor='myFirstName'> First Name   : </label>
        </td>
      <td>
        <input type="text" value={firstName} id='myFirstName' onChange={(event)=>{
          setfirstName(event.target.value); }}  required/>
        </td>  
      </tr>
      </tbody>

      <tbody>
      <tr>
      <td> 
        <label htmlFor='myLastName'> Last Name  :</label>
        </td>
      <td>
        <input type="text" value={surName} id='myLastName' onChange={(event)=>{
          setsurName(event.target.value); }} required />
        </td>
      </tr>
      </tbody>

      <tbody><tr>
      <td> 
        <label htmlFor='myEmail'> E-Mail  :</label>
        </td>
      <td>
        <input type="email" value={email} id='myEmail' onChange={(event)=>{
          setEmail(event.target.value); }} required/>
        </td>
      </tr>
      </tbody>

      <tbody><tr>
      <td> 
        <label htmlFor='myDob'> DOB  :</label>
        </td>
      <td>
        <input type="date" value={dob} id='myDob' onChange={(event)=>{
          setDob(event.target.value); }}  required/>
        </td>
      </tr>
      </tbody>
      
      <tbody>
      <tr>
      <td> 
        <label htmlFor='myGender'> Gender  :</label>
        </td>
      <td>
        <input style={{fontSize:20}} type="radio" value='Male' id='myGender' checked={gender==='Male'} onChange={(event)=>{
          setGender(event.target.value);  }}  required/>
        <label> Male </label>
        <input type="radio" value="Female" id='myGender' checked={gender==='Female'} onChange={(event)=>{
          setGender(event.target.value); }}  required/>
        <label> Female</label>
        </td>
      </tr>
      </tbody>
      
      <tbody>
        <tr>
          <td></td>
          <td>
          <input type='button'  style={showButtonDown} value={buttonState  } onClick={ emailValidation } />
          </td>
        </tr>
      </tbody>
     </table>
      </div>
    </div>
  );
}

export default App;
