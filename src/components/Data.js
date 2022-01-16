import React, {useState, useEffect} from 'react';

function Data() {
    const [projectData, setProjectData] = useState([]);

    Data.getData = () => {
        fetch('config.json',
            {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                   }
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(responseData) {
                setProjectData(responseData);
                console.log(responseData);
                // setUpdateData('updated');
            });
        return projectData;
    }
    console.log(Data.getData);
}
export default Data;