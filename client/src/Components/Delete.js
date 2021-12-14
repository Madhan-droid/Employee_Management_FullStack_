import Axios from 'axios';

async function DeleteEmp(props) {
if (props.empId === '')
alert('Enter employee ID');
else{
await Axios.delete(props.empUrl+'/'+props.empId).then((res)=>{
 console.log(res);
 alert('Employee deleted successfully');
  }).catch
  (error => {
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
