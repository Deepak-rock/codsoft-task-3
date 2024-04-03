let outputEl = document.getElementById("output");

function display(num) {
    outputEl.value += num;
}

function Calculate() {
    try {
        outputEl.value = eval(outputEl.value);
    } catch (error) {
        outputEl.value = "Invalid";
    }
}

function Clear() {
    outputEl.value = "";
}

function del() {
    outputEl.value = outputEl.value.slice(0, -1);
}