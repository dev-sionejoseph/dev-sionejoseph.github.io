export default Delete = (urlmap, id) => {

    let urlmap = urlmap;
    let id = id;
    let fullURL = `/${urlmap}/${id}`

    axios.post(fullURL, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}