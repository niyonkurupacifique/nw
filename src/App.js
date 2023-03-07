import React, { Component } from "react";
import JsonData from "./data.json";
import {Dropdown} from 'rsuite'

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      getdata:'',
      selectedValue:''
      
    };
  }

  componentDidMount() {
    this.setState({data:JsonData})
  }

  searchdata=(event)=>{
    const getdata=event.target.value.toLowerCase()
    this.setState({getdata:getdata})
  }
  handleChange=(event)=>{
   const valuee= event.target.value
   this.setState({selectedValue:valuee})
   


  }
  

  render() {
  
    const filtereddata=JsonData.filter((jsonItem)=>(
      jsonItem.name.toLocaleLowerCase().includes(this.state.getdata)
    ))
    const filteredatabySelection=JsonData.filter((selectionItem)=>(
      selectionItem.region.toLocaleLowerCase().includes(this.state.selectedValue)
    ))
    const dataToShow = filteredatabySelection.length > 0 ? filteredatabySelection : filtereddata;

    return(
      <div>
        <div className="flex justify-between p-5">
          <div className='p-3'>
            <input type='text' placeholder="Search for a country" className='h-10 w-64 px-2 rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent' onChange={this.searchdata} />
          </div>
          <div className='ml-12'>
          <select onChange={this.handleChange}>
        <option>{this.state.selectedValue}</option>
        <option>africa</option>
        <option>america</option>
        <option>asia</option>
        <option>australia</option>
      </select>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center p-9 w-full mt-3'>
          {dataToShow.map((dataitem)=>(
            <div className='bg-white rounded-md shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
              <img src={dataitem.flag} className='h-52 w-full object-cover rounded-t-md'></img>
              <div className='p-6'>
                <h3 className='text-lg font-semibold mb-2'>{dataitem.name}</h3>
                <p className='mb-2'><span className='font-semibold'>Population:</span> {dataitem.population}</p>
                <p className='mb-2'><span className='font-semibold'>Region:</span> {dataitem.region}</p>
                <p className='mb-2'><span className='font-semibold'>Capital:</span> {dataitem.capital}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Countries;
