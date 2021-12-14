import Axios from 'axios';

async function ReadEmp(props) {
    if (props.empId === '')
      alert('Enter employee ID');
    else{
      console.log(props.empUrl);
       await Axios.get(props.empUrl+'/'+props.empId).then((res)=>{
         console.log(res);
         props.setfirstName(res.data.firstName);
         props.setsurName(res.data.surName);
         props.setEmail(res.data.email);
         props.setDob(res.data.dob);
         props.setGender(res.data.gender);
        }).catch(error => {
             if (!error.response) {
                 console.log(error);
                 alert('Server not connected')
           } else {
                 console.log(error);
                 alert("Employee ID not found");
      }
    })
  }}

  export default ReadEmp;