import React, {useState} from 'react'
import axios from 'axios'
import TraineeIssue from './TraineeIssue'

const ManageIssues = () => {

    const [data, setData] = useState([]);
    const [backendpoint, setBackEndPoint] = useState("http://localhost:8081");
    const [traineeId, setId] = useState("0");

    const openIssues = document.getElementById("out_myOpenIssues");
    const closedIssues = document.getElementById("out_myClosedIssues");
    axios.get("http://localhost:8081/ticket/findById/")
        .then(response => {
            console.log(response.data);
            setData(response.data);

    }).then(data.forEach(function(issue){
        if(issue.status == "Open")
        {
            openIssues.appendChild(
        <TraineeIssue props={
            issue.title, 
            issue.topic, 
            issue.message, 
            issue.date, 
            issue.priority
        }/>);
    }else{
            closedIssues.appendChild(
        <TraineeIssue props={
            issue.title, 
            issue.topic, 
            issue.message, 
            issue.date, 
            issue.priority
        }/>);
    }
    }));

    return (

        <>
        <h2>My Issues</h2>
        <h3>Open Issues</h3>
        <div name="openIssues" id="out_myOpenIssues">
 
        </div>
        <br/>
        <h3>Closed Issues</h3>
        <div name="closedIssues" id="out_myClosedIssues">

        </div>
        </>
    );
}
export default ManageIssues;