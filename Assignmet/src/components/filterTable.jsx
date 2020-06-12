import React,{Component} from 'react';
import axios from 'axios';

class FilterTable extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[],
    }
  }

getTableData=async()=>{
  axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
  .then(res => {
      this.setState({
     data:res.data.data
     })
   })
}
  
  componentDidMount(){
    this.getTableData()
  }

  onSort(event, sortKey) {
    const data = this.state.data;
     data.sort((a,b)=>a[sortKey].localeCompare(b[sortKey]))
    this.setState({data})   
          
  }
  onSortReverse(event, sortKey){
    const data = this.state.data;
    data.sort((a,b) => b[sortKey].localeCompare(a[sortKey]))
    this.setState({data})
  }
  render(){
    return(
      <div className="container-fluid">
          <h2>Employee Details Table</h2>
        <p>Employee List</p>            
    <table class="table">
    <thead>
      <tr>
        <th>ID </th>
        <th>Employee Name <i onClick={e => this.onSort(e,'employee_name')}class="fa fa-caret-down"/>
        <i onClick={e => this.onSortReverse(e, 'employee_name')} class="fa fa-caret-up"/>
        </th>
        <th>Employee Salary</th>
        <th>Employee Age</th>
      </tr>
    </thead>
    <tbody>
      {
        this.state.data.map((item)=>{
          console.log("item",item)
          return<tr>
          <td>{item.id}</td>
          <td>{item.employee_name}</td>
          <td>{item.employee_salary}</td>
          <td>{item.employee_age}</td>
        </tr>
        })
      }
    </tbody>
  </table>
      </div>
    )
  }
}

export default FilterTable