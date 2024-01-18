import React, { useState } from 'react';



type DepartmentKey = 'customer_service' | 'design';

interface Department {
 department: DepartmentKey;
 sub_departments: string[];
}

const Page2: React.FC = () => {
 const [data, setData] = useState<Department[]>([
 {
   department: "customer_service",
   sub_departments: ["support", "customer_success"],
 },
 {
   department: "design",
   sub_departments: ["graphic_design", "product_design", "web_design"],
 },
 ]);

 const [isVisible, setIsVisible] = useState<Record<DepartmentKey, boolean>>({
 customer_service: false,
 design: false,
 });

 const toggleVisibility = (department: DepartmentKey) => {
 setIsVisible({ ...isVisible, [department]: !isVisible[department] });
 };

 return (
 <div>
   {data.map((item, index) => {
     return (
       <div key={index}>
         <h1 onClick={() => toggleVisibility(item.department)}>
           {item.department}
           {isVisible[item.department] ? '-' : '+'}
         </h1>
         {isVisible[item.department] && (
           <ul>
             {item.sub_departments.map((subDepartment, subIndex) => (
               <li key={subIndex}>{subDepartment}</li>
             ))}
           </ul>
         )}
       </div>
     );
   })}
 </div>
 );
};

export default Page2;
