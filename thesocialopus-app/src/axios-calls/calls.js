export const get = (urlmap, id="" , body) => {

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

export const post = (urlmap, body) => {

    let urlmap = urlmap;

    axios.post(urlmap, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}

export const put = (urlmap, id , body) => {

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

export const dlt = (urlmap, id) => {

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