import axios from 'axios';

export const get = (urlmap, id="") => {

    let fullURL = `/${urlmap}/${id}`

    axios.get(fullURL)
    .then(res => {
        let results = res.data
        return results
    }).catch((error)=>{
        return error
   });
    
}

export const post = (urlmap, body) => {

    axios.post(urlmap, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}

export const put = (urlmap, id , body) => {

    let fullURL = `/${urlmap}/${id}`

    axios.put(fullURL, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}

export const dlt = (urlmap, id) => {

    let fullURL = `/${urlmap}/${id}`

    axios.delete(fullURL).then(res => {
        return res.data
    }).catch((error)=>{
        return error
   });
    
}