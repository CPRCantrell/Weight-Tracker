import React, { useState } from 'react';


const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = { weight: weight, date: date}
        props.logNewEntry(newEntry)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>weight</label>
            <input type="number" value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
            <label>Date</label>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
            <button type='submit'>Log</button>
        </form>
    );
}

export default AddEntryForm;