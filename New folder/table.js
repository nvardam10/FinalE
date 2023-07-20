var arr = [];

function addEmp(){
    event.preventDefault();
    let x=validate();
    console.log(x);
    // if(validate()==false) return false;
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let designation = document.getElementById("role").value;
    let image = document.getElementById("img").value;
    let table = document.getElementById("table");
    let add = {};

    add['id'] = id;
    add['name'] = name;
    add['age'] = age;
    add['gender'] = gender;
    add['role'] = designation;
    add['img'] = image;
    add['table'] = table;
    if(x){
        arr.push(add);
    }
        
    console.log(arr)
        let str = " ";
        for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "viewEmp(${i})" class = "btn btn-view btn-info btn-sm">View</button>
                <button onclick = "updateEmp(${i})" class="btn btn-edit btn-success btn-sm">Edit</button>
                <button onclick = "deleteEmp(${i})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
            </td>
            </tr>`;
}
// console.log(str);
document.getElementById("table-body").innerHTML=str;
}

function viewEmp(id) {
    let pop = document.getElementById("view-popup");
    pop.style.display = 'flex';

    
    document.getElementById("idv").value=arr[id].id;
    document.getElementById("namev").value=arr[id].name;
    document.getElementById("agev").value=arr[id].age;
    document.getElementById("genderv").value=arr[id].gender;
    document.getElementById("rolev").value=arr[id].designation;
    // document.getElementById("imagev").value=arr[id].image;
}

function updateEmp(id) {
    let pop = document.getElementById("popup");
    pop.style.display = 'flex';

    document.getElementById("e").value=id;
    document.getElementById("ide").value=arr[id].id;
    document.getElementById("namee").value=arr[id].name;
    document.getElementById("agee").value=arr[id].age;
    document.getElementById("gendere").value=arr[id].gender;
    document.getElementById("rolee").value=arr[id].designation;
    document.getElementById("imagee").value=arr[id].image;

let str = " ";
        for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>${arr[i].image}</td>
                <td>
                <button onclick = "viewEmp(${i})" class = "btn btn-view btn-info btn-sm">View</button>
                <button onclick = "updateEmp(${i})" class="btn btn-edit btn-success btn-sm">Edit</button>
                <button onclick = "deleteEmp(${i})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
            </td>
            </tr>`;
}

document.getElementById("table-body").innerHTML=str;

}
        
function deleteEmp(id) {
    console.log(id);
    let index = arr.findIndex((e)=>parseInt(id)===id);
    arr.splice(index, 1);
    
    let str = " ";
    for(let i = 0; i< arr.length; i++) {
    str += `<tr>
                <td>${arr[i].id}</td>
                <td>${arr[i].name}</td>
                <td>${arr[i].age}</td>
                <td>${arr[i].gender}</td>    
                <td>${arr[i].designation}</td>
                <td>
                <button onclick = "updateEmp(${arr[i].id})" class="btn btn-edit btn-success btn-sm">EDIT</button>
                <button onclick = "deleteEmp(${arr[i].id})" class = "btn btn-delete btn-danger btn-sm">Delete</button>
                <button class = "btn btn-view btn-info btn-sm">View</button>
            </td>
            </tr>`;
}

document.getElementById("table-body").innerHTML=str;
}

function shut() {
    let pop_edit=document.getElementById("popup");
    let pop_view=document.getElementById("view-popup");
    pop_edit.style.display = 'none';
    pop_view.style.display = 'none';

}