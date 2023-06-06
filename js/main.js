/* Para equilibrio.html */

function redireccionPresupuesto(){
    location.href = "/presupuesto.html";
}

function resetearEquilibrio(){
    let arregloInputs = [];
    arregloInputs.push(document.getElementById('costosFijos'));
    arregloInputs.push(document.getElementById('precioVenta'));
    arregloInputs.push(document.getElementById('costosVariables'));
    arregloInputs.push(document.getElementById('resultado'));
    arregloInputs.forEach(elemento => elemento.value = 0);
    document.getElementById('errorEq').classList.add("vhidden");
}

function calcularPE(){
    document.getElementById('errorEq').classList.add("vhidden");

    const formulario = document.getElementById('peForm');
    formulario.addEventListener("submit", (event) =>  {
        event.preventDefault();

        const costosFijosInput = document.getElementById('costosFijos');
        const precioVentaInput = document.getElementById('precioVenta');
        const costosVariablesInput = document.getElementById('costosVariables');
        const resultadoInput = document.getElementById('resultado');
    
        const costosFijos = parseFloat(costosFijosInput.value) || 0;
        const precioVenta = parseFloat(precioVentaInput.value) || 0;
        const costosVariables = parseFloat(costosVariablesInput.value) || 0;
        
        if (precioVenta - costosVariables === 0) {
            document.getElementById('errorEq').classList.remove("vhidden");
            resultadoInput.value = "";
            return;

        } else {
            document.getElementById('errorEq').classList.add("vhidden");
            const resultado = costosFijos / (precioVenta - costosVariables);
            resultadoInput.value = `$${resultado.toFixed(2)}`;
        }

    });
}

/* Para presupuesto.html */

function redireccionEquilibrio(){
    location.href = "/equilibrio.html";
}

function calcularPresupuesto(){
    document.getElementById('errorPre').classList.add("vhidden");

    const presupuestoInput = document.getElementById('ingresos');
    const presupuesto = parseFloat(presupuestoInput.value) || 0;
    const gastosNecesariosInput = document.getElementById('gastosNecesarios');
    const gastosOpcionalesInput = document.getElementById('gastosOpcionales');
    const ahorroInversionInput = document.getElementById('ahorroInversion');

    if (presupuesto === 0) {
        document.getElementById('errorPre').classList.remove("vhidden");
        gastosNecesariosInput.innerHTML = "";
        gastosOpcionalesInput.innerHTML = "";
        ahorroInversionInput.innerHTML = "";
        return;

    } else {
        document.getElementById('errorPre').classList.add("vhidden");
        gastosNecesariosInput.innerHTML = `$${(presupuesto * 0.5).toFixed(2)}`;
        gastosOpcionalesInput.innerHTML = `$${(presupuesto * 0.3).toFixed(2)}`;
        ahorroInversionInput.innerHTML = `$${(presupuesto * 0.2).toFixed(2)}`;
        document.getElementById('divPre').classList.add('contForm');
        document.getElementById('tablaPre').classList.remove('vhidden')
    }
}



function resetearPresupuesto(){
    document.getElementById('ingresos').value = 0;
    document.getElementById('errorPre').classList.add("vhidden");
    document.getElementById('divPre').classList.remove('contForm');
    document.getElementById('tablaPre').classList.add('vhidden')
}