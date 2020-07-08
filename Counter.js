document.addEventListener('DOMContentLoaded', (event) => {
    function range(start, end) {
        var result = []
        var start = document.getElementById("first").nodeValue;
        start = parseInt(start)
        var end = document.getElementById("last").nodeValue;
        end = parseInt(end)
        for (let i = start; i <= end; i++) {
            result.push(i)
        }

        document.getElementById("result").innerHTML = result
    }
})