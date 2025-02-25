import { useState } from "react";

const AddUser = ({setUsers,users}) => {
    
       const handleForm=(e)=>{
            e.preventDefault();
            const form=e.target;
            const name=form.name.value;
            const email=form.email.value;
            console.log(name,email);
            // user
            const user={name,email}

            fetch('http://localhost:5000/users',{
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log("POST apip sent=>",data);
                const newUsers=[...users,data]
                setUsers(newUsers)
                form.reset()
            })

    }
  return (
    <div>
      <form onSubmit={handleForm} className="w-1/2 mx-auto rounded-lg mt-10 border-2 border-teal-500 rounded-sm">
        
      <div className="mb-5 mt-5">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="ml-2 pl-2 justify-end border-2 border-teal-500" placeholder="Enter Name" required />
        </div>
        <div className="mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="ml-2 pl-2 justify-end border-2 border-teal-500"
            placeholder="Enter email"
            required
          />
        </div>
       
        <div className="mb-5">
          <input type="submit" name="submit" className="btn-primary font-semibold bg-teal-500 rounded-md p-2 m-2" value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
