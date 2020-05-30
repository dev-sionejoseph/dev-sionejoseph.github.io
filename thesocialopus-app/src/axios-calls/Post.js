export default Post = (urlmap, body) => {

    let urlmap = urlmap;

    axios.post(urlmap, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}