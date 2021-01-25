// Produccion
const urlBase = "https://rickandmortyapi.com/api";

export async function getFilter(filter,model){
    let getAct = await fetch(urlBase+`/${model}?${filter}`,{
        method:"GET",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    let data = await getAct
    console.log(data)
    if(!data.error && data){
      return data.json()
    }else{
        return false
    }   
}