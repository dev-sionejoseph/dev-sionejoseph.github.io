import axios from 'axios';

export const get = (urlmap, id="") => {

    let fullURL = `/${urlmap}/${id}`

   return axios.get(fullURL)
    .then(res => {
        let results = res.data
        return results
    }).catch((error)=>{
        return ["request error"]
   });
    
}

export const post = (urlmap, body) => {

    return axios.post(urlmap, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return ["error adding"]
   });
    
}

export const put = (urlmap, id , body) => {

    let fullURL = `/${urlmap}/${id}`

    return axios.put(fullURL, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return ["error updating"]
   });
    
}

export const dlt = (urlmap, id) => {

    let fullURL = `/${urlmap}/${id}`

    return axios.delete(fullURL).then(res => {
        return res.data
    }).catch((error)=>{
        return ["error deleting"]
   });
    
}