import React, { Fragment } from "react";
import Array from "../Studentsjourney/data.js";
import {Button, Table} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link, useNavigate} from "react-router-dom"

 function Home(){
 let history = useNavigate();
 const handleEdit = (id,name,age,email) => {
      localStorage.setItem('name',name)
      localStorage.setItem('age',age)
      localStorage.setItem('email',email)
      localStorage.setItem('id',id)
    

 }

const handleDelete = (id) =>{
    var index = Array.map(function(e){
        return e.id
    }).indexOf(id);

    Array.splice(index,1);
    history('/students');

}
      return(
         <Fragment>
            <div style={{margin:"10rem"}}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array && Array.length > 0
                            ?
                            Array.map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Link to={'/students/edit'}>
                                            <Button onClick={()=>handleEdit(item.id , item.name , item.age , item.email)}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No Data"
                        }
                    </tbody>

                </Table>
                <br/>
                <Link className="d-grid-gap-2" to={'/students/create'}>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
         </Fragment>


      )

 }
 export default Home;