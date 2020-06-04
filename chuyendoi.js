function tiente() {
    var tien = document.getElementById('tien').value;
    var x = document.getElementById('quocgia').value;
    var tienchuyendoi;
    if (x === 'vietnam') {
        tienchuyendoi = tien / 23000;
        document.getElementById("result").innerHTML = 'Result la' + tienchuyendoi + '$';
    } else {
        tienchuyendoi = tien * 23000;
        document.getElementById("result").innerHTML = 'Result la' + tienchuyendoi + 'VND';
    }
}