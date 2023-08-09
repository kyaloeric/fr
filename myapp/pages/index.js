import React, {useState} from "react";


const InputElement = () => {


    // how to use useState commonly in React apps
    // when setInputText function is called  
    const [inputText,setInputText] = useState("");
    const [historyList, setHistoryList] = useState([]);




    return <div> <input 
        onChange={(e) => {
            setInputText(e.target.value)

            // track the history of the changes of the rendered text
            setHistoryList([...historyList,e.target.value]);
        }} 
        placeholder="Enter some Text my guy"></input> <br/>
        {inputText }
        <hr/><br/>
        <ul>
            {historyList.map((rec) => {
                return <div>{rec}</div>
            }
            )}
        </ul>

    </div>


};

export default InputElement;