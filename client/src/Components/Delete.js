import Axios from 'axios';

function DeleteEmp(props) {
if (props.empId === '')
alert('Enter employee ID');
else{
Axios.delete(props.empUrl+'/'+props.empId).then((res)=>{
 console.log(res);
 alert('Employee deleted successfully');
  },
  (error) => {
   if (!error.response) {
     console.log(error);
     alert('Server not connected')
 } else {
  
     alert("Unable to delete employee");
     console.log(error);
}
})}

}
export default DeleteEmp;
