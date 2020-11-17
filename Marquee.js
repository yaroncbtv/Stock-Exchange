
export function Marquee() {
    fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/stock/list')
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i <= 100; i++) {
                var newSpan = document.createElement('span');
                newSpan.setAttribute("style", "padding-right: 4px;")
                var demodiv = document.getElementById('list-compain');
                newSpan.innerHTML = data[i].symbol + " "
                demodiv.appendChild(newSpan);
                var newSpan2 = document.createElement('span');
                newSpan2.setAttribute("style", "color: green; font-weight: bold; padding-right: 30px;")
                var demodiv2 = document.getElementById('list-compain');
                newSpan2.innerHTML = data[i].price + "$ "
                demodiv2.appendChild(newSpan2);
            }
        });
}; 