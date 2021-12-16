import Axios from 'axios';

async function UpdateEmp(props) {
   if (props.empId === '')
    {
      alert('Enter employee ID');
     }
   else
    {
      try{
          const updateResult =  await Axios.put((props.empUrl+'/'+props.empId) ,
           { empId : props.empId, firstName: props.firstName, surName:props.surName,
            email:props.email, dob: props.dob, gender: props.gender })
          console.log(updateResult);
          alert('Employee updated successfully');
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
              alert("Unable to update employee details");
              console.log(error);
           }         
         }
    }
  }

export default UpdateEmp;