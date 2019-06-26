function addfieldnumber() {
    var Container = document.getElementById("phones");
    var nameid = 1;
    while ($("#Tel" + nameid).length != 0) {
        nameid++;
    }
    if (nameid <= 3) {
        var input = document.createElement("input");
        input.type = "text";
        input.className = "form-control";
        input.id = "Tel" + nameid;
        input.placeholder = "Numero telefonico";
        var label = document.createElement("label");
        label.htmlFor = "Tel" + nameid;
        label.innerHTML = "Numero telefono/celular:";
        Container.appendChild(document.createElement("br"));
        Container.appendChild(label);
        Container.appendChild(input);
    }
}