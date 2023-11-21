$(document).ready(()=>{
    getUsers()
})

const getUsers=()=>{
    $.ajax({
        url:`${api}/users`,
        method:"get",
        success:(res)=>{
            console.log(res)
           
            getData(res)
        },
        error:(err)=>{
            console.log(err)
        }
    })
}

const getData=(data)=>{
    $('.data').html("")
    data.map((item, key)=>{
     
     $(".data").append(`
              <tr>
                <th scope="row">${key+1}</th>
                <td>${isNullData(item.name)}</td>
                <td>${filterPhone(item.phone)}</td>
                <td>${filterAddress(item.address)}</td>
                <td>${filterCompany(item.company)}</td>
                <td><div class="btnBox"><a aria-disabled="${item.website==null}" target="_blank" href="https://${item.website}" class="btn btn-warning ${item.website==null?"disabled":""}" ><i class="fa fa-eye" aria-hidden="true"></i></a></div></td>
                <td><div class="btnBox"><a href="./html/todos.html?userId=${item.id}" class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></a></div></td>
              </tr>`)
    })
}