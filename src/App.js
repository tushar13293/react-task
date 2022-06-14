import React, {Component, useState,useEffect} from 'react'
import   {GetData} from './apiCalls/getData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './components/Table';
import './App.css';
import {FileUploader} from "react-drag-drop-files";
import {Button} from "react-bootstrap";

function App() {

    let [jsonData, setJsonData] = useState(null)

    // const [file, setFile] = useState(null)
    // const fileTypes = ["JSON"];
    //
    // const handleChange = (fileparameter) => {
    //     const fileReader = new FileReader();
    //     fileReader.readAsText(fileparameter);
    //     fileReader.onload = e => {
    //         const temp = JSON.parse(e.target.result)
    //         setJsonData( temp )
    //         console.log( jsonData )
    //     };
    // };

    // const changeState = () => {
    //     const temp = {id:1}
    //     setJsonData( temp )
    //     console.log(jsonData)
    // }


    const test= () => {
    fetch('./invoice.json'
        ,{
          headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
    )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
            if(!jsonData)
                setJsonData(myJson)
        });
  }


    let check = null

    if (jsonData === null){
        check = {loading: true}
        test()
    }
    else {
        check = jsonData
    }

  return (
      <>
          {/*<FileUploader handleChange={handleChange} name="file" types={fileTypes} />*/}
          <Table tableData={check}  />
          {/*<Button variant="light" onClick={changeState}>Button</Button>*/}
      </>

  );
}

export default App;
