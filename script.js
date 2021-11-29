var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["IDCurso"] = document.getElementById("IDCurso").value;
    formData["Curso"] = document.getElementById("Curso").value;
    formData["Descricao"] = document.getElementById("Descricao").value;
    formData["Professor"] = document.getElementById("Professor").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.IDCurso;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Curso;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Descricao;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Professor;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEditar(this)">Editar</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("IDCurso").value = "";
    document.getElementById("Curso").value = "";
    document.getElementById("Descricao").value = "";
    document.getElementById("Professor").value = "";
    selectedRow = null;
}

function onEditar(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("IDCurso").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Curso").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Descricao").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Professor").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.IDCurso;
    selectedRow.cells[1].innerHTML = formData.Curso;
    selectedRow.cells[2].innerHTML = formData.Descricao;
    selectedRow.cells[3].innerHTML = formData.Professor;
}

function onDelete(td) {
    if (confirm('Deseja deletar as informacoes ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("IDCurso").value == "") {
        isValid = false;
        document.getElementById("IDCursoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IDCursoValidationError").classList.contains("hide"))
            document.getElementById("IDCursoValidationError").classList.add("hide");
    }
    return isValid;
}