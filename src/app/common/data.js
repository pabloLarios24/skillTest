export var orders = {
    statusFilter:"",
    speciesFilter:"",
    typeFilter:"",
    genderFilter:""
}


export async function getOrder(tableId){
    const index = orders.findIndex((item)=>{
        return item.tableId === tableId
    })
    if(index >= 0){
        nowOrder = orders[index]
        return nowOrder.id
    }
}

export async function setOrder(tableId, numberComensal){
    zone.map((zoneItem)=>{
        zoneItem.tables.map((table)=>{
            if(tableId === table.id){
                table.status = 'inProgress';
            }
        })
    })
    if(orders.length){
        const id = orders.length + 1
        const order = {
            id,
            numberComensal,
            tableId,
            products:[],
            division:[]
        }
        orders.push(order)
        nowOrder=order
        console.log(order)
        return id;
    }else{
        const order = {
            "id":0,
            numberComensal,
            tableId,
            products:[],
            division:[]
        }
        nowOrder=order
        orders.push(order)
        return 0;
    }
}