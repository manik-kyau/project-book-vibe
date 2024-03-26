import { toast } from "react-toastify";

const getStoredData = () =>{
    const storedData = localStorage.getItem('books');
    if(storedData){
        return JSON.parse(storedData);
    }
    return [];
}

const saveDataToLS = (id) =>{
    const storedBooks = getStoredData();
    const isExist = storedBooks.find(data => data == id)
    if(!isExist){
        storedBooks.push(id);
        localStorage.setItem('books',JSON.stringify(storedBooks));
        toast.success('Added succesfull');
    }
    else{
        toast.error('Allready added');
    }

}

export { getStoredData,saveDataToLS }