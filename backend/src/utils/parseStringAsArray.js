module.exports= (arrayAsString)=>{
    return arrayAsString.toUpperCase().split(',').map(string => string.trim());
}