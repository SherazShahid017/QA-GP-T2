import React, {useState} from 'react'
import axios from 'axios'
import TraineeIssue from './TraineeIssue'

const ManageIssues = () => {

    const [data, setData] = useState("");
    const [backendpoint, setBackEndPoint] = useState("http://localhost:8081");
    const [traineeId, setBackEndPoint] = useState("http://localhost:8081");

    const openIssues = document.getElementById("out_myOpenIssues");
    const closedIssues = document.getElementById("out_myClosedIssues");
    // making a get request which pulls the issues from the database - NOT SURE IF THIS WORKS. please Fix!
    axios.get(backendpoint + "/tickets/findById/" + traineeId)
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
        <div name="openIssues" id="out_myOpenIssues">
 
        </div>

        <div name="closedIssues" id="out_myClosedIssues">

        </div>
        </>
    );
}
export default ManageIssues;