export const API_KEY = 'AIzaSyACjrCFC8Q8XZ1fUjT_v22tn-LrDkVhkvs';


 export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}