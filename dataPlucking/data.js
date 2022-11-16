const data = require('./data.json') 


const objConfig = {
    pricePoint: 11.99,
    targetTerritory: "pnw",
    manufactureCode: 1232
}

//
function getDeals(obj) {
    
    let priceInTerritory, code
    
    const deals = data.data.filter((item) => {
        priceInTerritory = item.pricing.territory.cus[obj.targetTerritory]
        code = item.manufacturing.origin[0].pnw.manufactureCode
        if(obj.pricePoint < parseInt(priceInTerritory) && parseInt(code) === obj.manufactureCode) {
            return item
        }
    })
    console.log(deals)
}

getDeals(objConfig)
