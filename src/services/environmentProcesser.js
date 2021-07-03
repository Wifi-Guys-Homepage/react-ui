function processUrl(url, environment){
  return 'localhost:8000/api/'
}

function processVariable(){

}

const getData=(jsonfile)=>{
    fetch(jsonfile
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
    }

export { processUrl, processVariable };