let result = document.getElementById('screen');

function display(num) {
    result.value += num;
}
function calculate() {
    try {
        result.value = eval(result.value);

    }
    catch (arr) {
        alert('Invalid')
    }
}
function Clear() {
    result.value = '';
}
function del() {
    result.value = result.value.slice(0, -1);
}
function devid() {
    result.value = result.value.toFixed(2);
    function display(num) {
        result.value += num;
    }
}