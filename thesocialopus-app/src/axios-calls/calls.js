import axios from 'axios';

export const get = (urlmap, id="") => {

    let fullURL = `/${urlmap}/${id}`

   return axios.get(fullURL)
    .then(res => {
        let results = res.data
        return results
    }).catch((error)=>{
        return null
   });
    
}

export const post = (urlmap, body) => {

    return axios.post(urlmap, 
        body   
    ).then(res => {
        console.log("getting through")
    }).catch((error)=>{
        return null
   });
    
}

export const put = (urlmap, id , body) => {

    let fullURL = `/${urlmap}/${id}`

    return axios.put(fullURL, {
        body   
    }).then(res => {
        return res.data
    }).catch((error)=>{
        return null
   });
    
}

export const dlt = (fullURL) => {

    return axios.delete(fullURL).then(res => {
        return "delete successful"
    }).catch((error)=>{
        return null
   });
    
}