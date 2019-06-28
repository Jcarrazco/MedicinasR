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

function confirmbtn(answer) {
    var container = document.getElementById("formdirection");
    var element = document.getElementById("group1");
    element.parentNode.removeChild(element);

    var inputrfc = document.createElement("input");
    inputrfc.type = "text";
    inputrfc.className = "form-control";
    inputrfc.id = "rfcf4";
    inputrfc.required = true;
    var labelrfc = document.createElement("label");
    labelrfc.htmlFor = "rfcf4";
    labelrfc.innerHTML = "* R.F.C. ";

    var btn = document.createElement("input");
    btn.type = "submit";
    btn.className = "btn btn-success";
    btn.value = "Siguiente";
    var label = document.createElement("label");
    label.htmlFor = "namef4";
    label.innerHTML = "Nombre o razon social: ";
    var input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.id = "namef4";
    if (answer) {
        input.placeholder = "Jose Perez dueño";
    }

    container.appendChild(labelrfc);
    container.appendChild(inputrfc);

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "statef4";
    label.innerHTML = "Estado (entidad federativa): ";
    input.id = "statef4";
    if (answer) {
        input.placeholder = "Jalisco";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "City1f4";
    label.innerHTML = "Municipio o Delegacion: ";
    input.id = "city1f4";
    if (answer) {
        input.placeholder = "Guadalajara";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "City2f4";
    label.innerHTML = "Ciudad o Poblacion: ";
    input.id = "city2f4";
    if (answer) {
        input.placeholder = "Guadalajara";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "codepf4";
    label.innerHTML = "Codigo Postal: ";
    input.id = "codepf4";
    if (answer) {
        input.placeholder = "45400";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "locatif4";
    label.innerHTML = "Direccion: ";
    input.id = "locatif4";
    if (answer) {
        input.placeholder = "Loma del norte #328";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;

    label.htmlFor = "colf4";
    label.innerHTML = "Colonia: ";
    input.id = "colf4";
    if (answer) {
        input.placeholder = "Loma bonita";
    }

    container.innerHTML += label.outerHTML + input.outerHTML;
    container.appendChild(document.createElement("br"));
    container.appendChild(btn);

}

function addp() {
    var container = document.getElementById("formcontain");
    var nameid = 1;
    while ($("#namebuyer" + nameid).length != 0 && nameid <= 2) {
        nameid++;
    }
    if (nameid <= 2) {
        container.appendChild(document.createElement("br"));

        var ielement = document.createElement("input");
        ielement.type = "text";
        ielement.className = "form-control";
        ielement.id = "namebuyer" + nameid;
        ielement.placeholder = "Nombre completo";

        var ilabel = document.createElement("label");
        ilabel.htmlFor = "namebuyer" + nameid;
        ilabel.innerHTML = "Nombre del encargado de compras: ";

        container.innerHTML += ilabel.outerHTML + ielement.outerHTML;

        ilabel.htmlFor = "emailbuyer" + nameid;
        ilabel.innerHTML = "Correo electronico: ";
        ielement.id = "emailbuyer" + nameid;
        ielement.placeholder = "Correo@correos.com";

        container.innerHTML += ilabel.outerHTML + ielement.outerHTML;

        ilabel.htmlFor = "phonbuyer" + nameid;
        ilabel.innerHTML = "Numero telefonico: ";
        ielement.id = "phonbuyer" + nameid;
        ielement.placeholder = "044-phone number";

        container.innerHTML += ilabel.outerHTML + ielement.outerHTML;

        ilabel.htmlFor = "extbuyer" + nameid;
        ilabel.innerHTML = "Numero de extension: ";
        ielement.id = "extbuyer" + nameid;
        ielement.placeholder = "0000";

        container.innerHTML += ilabel.outerHTML + ielement.outerHTML;
        container.appendChild(document.createElement("br"));

        var form = document.createElement("div");
        form.className = "form-inline";
        ilabel.htmlFor = "schebuyer1" + nameid;
        ilabel.innerHTML = "Horarios para contactar: De  ";
        var lbl = document.createElement("label");
        lbl.htmlFor = "schebuyer2" + nameid;;
        lbl.innerHTML = "  a  ";

        form.appendChild(ilabel);
        

        var select = document.createElement("select");
        select.id = "schebuyer1" + nameid;
        select.className = "form-control";

        for (var c = 0; c <= 12; c++) {
            var option = document.createElement("option");
            option.innerHTML = c + ":00";
            select.appendChild(option);
        }


        form.innerHTML += select.outerHTML;

        select.id = "schebuyer2" + nameid;
        form.appendChild(lbl);
        form.innerHTML += select.outerHTML;

        container.appendChild(form);
    }
}

function mapok() {
    var container = document.getElementById("addcomment");
    var form = document.createElement("form");
    var label = document.createElement("h4");
    var textarea = document.createElement("textarea");
    var btn = document.createElement("input");
    label.innerHTML = "Observaciones de entrega:";
    textarea.name = "comment";
    textarea.rows = "10";
    textarea.cols = "50";
    textarea.autofocus = true;
    textarea.placeholder = "Describa detalles que faciliten la entrega";
    btn.className = "form-control btn btn-success";
    btn.type = "submit";
    btn.value = "Enviar";

    form.action = "http://localhost:50050/Client/Form7?";
    form.appendChild(label);
    form.appendChild(textarea);
    form.appendChild(document.createElement("br"))
    form.appendChild(btn);
    container.appendChild(form);
}

function mapnok() {
    window.location.href = "http://localhost:50050/Client/Form4?";
}