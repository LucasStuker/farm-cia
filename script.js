var meds = []
function addMed () {
    event.preventDefault( ) ;
    let newMed = {
        "medName": document.getElementById("fname").value,
        "medQtd": document.getElementById("fdisp").value ,
        "medClass": document.getElementById("fclass").value,

    }
    resetForm();
    meds.push(newMed);
    renderTable()
}
function removeMed(index){
    meds.splice(index,1);
    renderTable();
}
function renderTable() {
    let table = document.getElementById("dataTable");
    table.innerHTML = `<th>ID</Th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe do Medicamento</th>
    <th>Remover</th>`;

for(let i = 0; i < meds.length; i++)
{
    table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${meds[i].medName}</td>
        <td>${meds[i].medQtd}</td>
        <td>${meds[i].medClass}</td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removeMed(${i})"></td>
    </tr>`
}
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("fdisp").value = "";
    document.getElementById("fclass").value = "";
}

renderTable();