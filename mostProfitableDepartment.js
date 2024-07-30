
// console.log(salesData.length)
export default function mostProfitableDepartment(data){
    let shopMap = {};
    
    for(let i in data){
        //save the whole data to variable sale
        const sale = data[i];
        //save every department in the shopmap object and gove them each a value of 0  
        shopMap[sale.department] = 0; 
    }
    //console.log(shopMap);
    
    for(let i in data){
        //save the whole data to variable sale
        const sale = data[i];
        //save every department in the shopmap object and gove them each a value of 0  
        // shopMap[sale.department] = 0;
    
        let currentDepartmentTotal = shopMap[sale.department];
        //add sales to the current department total.
        currentDepartmentTotal += sale.sales;
        //save the total of the  department sales total in the department
        shopMap[sale.department] = currentDepartmentTotal;
    
    
    }
    //console.log(shopMap);
    
    
    let highestSale = 0;
    let highestDepartment = "";
    //loop over the shopMap to compare the values of the sales
    for(let x in shopMap){
        //x returns the key values (name of departments)
        //console.log(x)
        //we display the sales values
        //console.log(shopMap[x])
        //set current department sale
        const currentDepartmentSale = shopMap[x];
    
        if(currentDepartmentSale > highestSale){
            //set the current department sales equal to highest if it is.
            highestSale = currentDepartmentSale;
            //set the corresponding department to highest department
            highestDepartment = x;
    
        }
    
    
    }
    
    // console.log(highestSale);
    return highestDepartment
    }