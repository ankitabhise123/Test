
import React,{Component} from 'react';
import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';
import './Style.css'

class Table extends Component{
  constructor(props){
    super(props)
    this.state={
            row:    [],
      tableList:    [],
       
    }
  }
  getStateList=async()=>{
    const  datatable=
    {
       columns: [
   {
        label: 'ID',
        field: 'id',
        sort: 'disabled', 
        width: "25%",
    },
    {
        label: 'Employee Name',
        field: 'employee_name',
        sort: 'disabled',
        width: "25%",
    },
    {
        label: 'Employee Salary',
        field: 'employee_salary',
        sort: 'disaled',
        width: "25%",
    },
    {
        label: 'Employee_Age',
        field: 'employee_age',
        sort: 'disabled',
        width: "25%",
    },
],
    rows: [] ,
}    
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
    .then(res => {
        datatable.rows=res.data.data
        this.setState({
        tableList:datatable
        })
        
     })
  }

  componentDidMount(){
    this.getStateList()
  }
  
    render(){
        return(
           <div className="container-fluid">
             <MDBDataTableV5  hover entriesOptions={[5, 20, 25]} entries={5} data={this.state.tableList} pagesAmount={4} materialSearch searchTop searchBottom={false} barReverse/>
            </div>
        )
    }
}

export default Table




