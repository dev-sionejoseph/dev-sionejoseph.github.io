export default Put = (urlmap, id , body) => {

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
