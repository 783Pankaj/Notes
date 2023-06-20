import React, { useState } from "react";
import Display from "./Display";

const Notes = () => {
    const [notes, setNotes] = useState('');
    const [store, setStore] = useState([]);
    // const[storeAll, setStoreAll] = useState([]);
    const submitFun=()=>{
         setStore([...store, notes]);
    }
    return (
        <div>
            <textarea
                cols={30}
                rows={20}
                onChange={(e) => { setNotes(e.target.value) }}
                placeholder="enter your notes" 
                />

            <button type="submit"
                onClick={submitFun}>
                Submit</button>   

            <div>
                <table className="table">
                    <th>Your Notes</th>
                </table>
                <div>
                    {store.map((val,i) => (
                        <Display
                            key={i}
                            index={i}
                            store={val}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Notes;