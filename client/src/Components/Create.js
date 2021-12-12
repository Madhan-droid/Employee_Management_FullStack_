import Axios from 'axios';

function CreateEmp (props) {
    if (props.empId === '')
      alert('Enter employee ID');
    else{
      console.log(props.empUrl);
          Axios.post(props.empUrl, { empId : props.empId, firstName: props.firstName, surName:props.surName, email:props.email, dob: props.dob, gender: props.gender }
          ).then((res) =>{
          console.log(res);
          alert(`Employee ${props.firstName+' '+props.surName} created successfully`);
          },(error) => 
              {
                   alert("Employee Id exist");
                   console.log(error);
        
     })
  }};
  

  export default CreateEmp;