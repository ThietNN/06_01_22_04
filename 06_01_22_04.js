function run() {
    let x = parseInt(document.getElementById("a").value);
    let y = parseInt(document.getElementById("b").value);
    let z = parseInt(document.getElementById("c").value);
    if (x >= y) {
        if (x >= z) {
            alert(x + " là số lớn nhất");
        } else if (y >= z) {
            alert(y + " là số lớn nhất");
        } else {
            alert(z + " là số lớn nhất");
        }
    }
    else if (y >= z) {
            alert(y + " là số lớn nhất");
        }
    else {
            alert(z + " là số lớn nhất");
    }
}