import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';
import './App.css';

function App() {

  const [enteries, setEntries] = useState([{weight: 270, date: "11-30-2022"}])

  function logNewEntry(entry){
    let tempEntries = [...enteries, entry]
    setEntries(tempEntries)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h1 style={{margin: '1em'}}>weight<small className='text-muted'>Tracker</small></h1>
        <div className='col-md-6'>
          <div className='border-box'>
            <AddEntryForm logNewEntry={logNewEntry}/>
          </div>
          <div className='border-box'>
            <DisplayEntries allEnteries={enteries} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='border-box'>
            <EntriesChartTracker allEnteries={enteries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;