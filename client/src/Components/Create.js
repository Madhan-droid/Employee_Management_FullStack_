import Axios from 'axios';

async function CreateEmp (props) {
    if (props.empId === '')
     {
      alert('Enter employee ID');
     }
    else
     {
      try
       {
         const createResult = await Axios.post(props.empUrl,
            { empId : props.empId, firstName: props.firstName, surName:props.surName,
              email:props.email, dob: props.dob, gender: props.gender })
         console.log(createResult);
         alert(`Employee ${props.firstName+' '+props.surName} created successfully`);
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
             alert("Employee Id exist");
             console.log(error);
            }
       }
  }};
  

  export default CreateEmp;