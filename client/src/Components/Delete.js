import Axios from 'axios';

async function DeleteEmp(props) {
  if (props.empId === '')
   {
    alert('Enter employee ID');
   }
  else
  {
    try
     {
       const deleteResult =  await Axios.delete(props.empUrl+'/'+props.empId)
       console.log(deleteResult);
       alert('Employee deleted successfully');
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
          alert("Unable to delete employee");
          console.log(error);
         }
   }
)}
}

export default DeleteEmp;
