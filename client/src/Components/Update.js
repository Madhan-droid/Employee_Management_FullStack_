import Axios from 'axios'
function UpdateEmp(props) {
if (props.empId === '')
alert('Enter employee ID');
else{
Axios.put((props.empUrl+'/'+props.empId) , { empId : props.empId, firstName: props.firstName, surName:props.surName, email:props.email, dob: props.dob, gender: props.gender }
    ).then((res)=>{
    console.log(res);
    alert('Employee updated successfully');
    },(error) => {
      if (!error.response) {
        console.log(error);
        alert('Server not connected')
    } else {
        alert("Unable to update employee details");
        console.log(error);
 }         
})
}}

export default UpdateEmp;