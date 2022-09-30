import { useState, useEffect } from 'react';

export const REQUEST_STATUS ={
    LOADING : "loading",
    SUCCESS: "success",
    FAILURE: "failure"
}

const _getFetch = (url,options) => {
    const { method, body } =  options;
    let secondeParam = {
        method,
    }

    if(method==='POST' || method ==='PUT'){
        secondeParam= {...secondeParam, body: JSON.stringify(body) };
    }

    return fetch(url,secondeParam);
}

export const useFetch = ({ resourceURL, method="GET", body, dataRetriever = res => res }) => {
    const [resources, setResources] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    

    useEffect(() => { 
        (async () => {
            try {
                const response = await _getFetch(resourceURL,method,body);
                const data = await response.json();
                setResources(dataRetriever(data));
                setRequestStatus(REQUEST_STATUS.SUCCESS)
            } catch (error) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
            }
        })();
    }, [resourceURL]);

    return [requestStatus, resources];
}