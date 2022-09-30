import { createContext } from 'react';

const InputContext = createContext();

function InputProvider({children, inputOfSearch, onChangeSearch, inputOfImage, onChangeImage}){
       return (
                <InputContext.Provider value={{ inputOfSearch, onChangeSearch, inputOfImage, onChangeImage }}>
                   {children}
                </InputContext.Provider>
        );
}

export { InputContext, InputProvider };