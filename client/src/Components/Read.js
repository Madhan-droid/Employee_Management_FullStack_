import Axios from 'axios';

async function ReadEmp(props) {
    if (props.empId === '')
     {
      alert('Enter employee ID'); 
      }
    else
    {
      try
       {
       const readResult = await Axios.get(props.empUrl+'/'+props.empId)
         console.log(readResult);
         props.setfirstName(readResult.data.firstName);
         props.setsurName(readResult.data.surName);
         props.setEmail(readResult.data.email);
         props.setDob(readResult.data.dob);
         props.setGender(readResult.data.gender);
        }
      catch(error)
       {
         if (!error.response) 
          {
            console.log(error);
            alert('Server not connected')
           }
         else 
          {
            console.log(error);
            alert("Employee ID not found");
           }
       }
    }
  }

  export default ReadEmp;