import React, {Component, useState,useEffect} from 'react'
import   {GetData} from './apiCalls/getData'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import './App.css';

function App() {

  // let jsonData = null
  // console.log(jsonData)


  let [jsonData, setJsonData] = useState(null)

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

  // useEffect(()=>{
  //     debugger;
  //   jsonData = test()
  // },[])


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
        <Table tableData={check}  />
      </>

  );
}

export default App;
