import React,{Component} from 'react';
import Table from './components/Table'
import FilterTable from './components/filterTable'


class App extends Component{
  render(){
    return(
      <div>
        <Table/>
        {/* <FilterTable/> */}
      </div>
    )
  }
}

export default App