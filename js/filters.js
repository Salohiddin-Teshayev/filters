const filterPhone=(phone)=>{
    if(phone!=null){
        return(phone.slice(0, phone.indexOf(" x")))
    }
    else{
        return("-")
    }
}

const filterAddress=(address)=>{
    if(address!=null){
        const {street, suite, city}=address
        var str=""
        if(city!=null){
            str+=city+", "
        }
        if(street!=null){
            str+=street+", "
        }
        if(suite!=null){
            str+=suite
        }else{
            str=str.slice(0, str.lastIndexOf(", "))
        }
        

        return(str)
    }else{
        return("-")
    }
    
}

const filterCompany=(company)=>{
    if(company!=null){
        return(isNullData(company.name))
    }else{
        return("-")
    }
}

const isNullData=(a)=>{
    if(a==null){
        return("-")
    }else{
        return(a)
    }
}