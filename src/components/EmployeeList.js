import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../services/EmployeeServices';

const EmployeeList = () => {
    const navigate=useNavigate();//Hooks use this one

     const [employees, setEmployees] = useState(null);
     const [loading, setloading] = useState(true);

     useEffect(() => {
      const fetchData = async() => {
        setloading(true);
        try{
          const response = await EmployeeServices.getEmployee();
          setEmployees(response.data)
        }catch(error){
          console.log(error)
        }
        setloading(false);
      }; 
      fetchData();
     }, [])
     
  return (
  <div className="container mx-auto my-8">
  <div className="h-12">
    <button
     onClick={()=> navigate("/addemployee")}
     className="rounded bg-slate-600 text-white px-6 py-7 font-semibold">
       AddEmployee</button>
    </div>
    <div className="flex shadow border-b">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="text-left font-meduim text-gray-500 uppercase tracking-wider py-3 px-3">First Name </th>
            <th className= "text-left font-meduim text-gray-500 uppercase tracking-wider py-3 px-3">Last Name </th>
            <th  className="text-left font-meduim text-gray-500 uppercase tracking-wider py-3 px-3">Email Id </th>
            <th  className="text-center font-meduim text-gray-500 uppercase tracking-wider py-10 px-6">Actions </th>

            
          </tr>
        </thead>
        {!loading && (
         <tbody className="bg-white">
          { employees.map((employee) => (
          <tr>
            <td className="text pc-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.firstname}</div>
              </td>
            <td className="text pc-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.lastname}</div>
              </td>
              
            <td className="text pc-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{employee.emailid}</div>
              </td>
              
            <td className="text-right  px-6 py-4 whitespace-nowrap font-medium text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4"/>
                Edit <a/>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 px-4"/>  Delete <a/>    
            </td>
          </tr>
          ))}
         </tbody>
         )}
      </table>
    </div>
  </div>
  );
};

export default EmployeeList;