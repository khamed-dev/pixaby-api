
import { URL } from '../API/PIXABAY_API';
import { useEffect, useContext, useState,useMemo } from "react";
import { InputContext } from '../contexts/InputContext';
import ListWithUrl from './ListWithUrl';

function _isValid(input) {
    return input.length >= 3;
}


const Body = () => {

    const [resourceURL, setResourceURL] = useState("");
    const { inputOfSearch, inputOfImage } = useContext(InputContext);
   
    const options = useMemo( () => ({
        resourceURL,
        dataRetriever:(response)=> response.hits
    }), [resourceURL]);


    useEffect(() => {
        if (_isValid(inputOfSearch) || _isValid(inputOfImage))
        setResourceURL(`${URL}&q=${inputOfSearch}&image_type=${inputOfImage}`)

    }, [inputOfSearch, inputOfImage]);
    
    return  !!resourceURL.length ? <ListWithUrl options={options} /> : null;

}


export default Body;