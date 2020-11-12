


var searchList = [];
let jsondata;
var obj;





document.getElementById("button-addon2").addEventListener("click", () => {
    index = 0
    var result = document.getElementById("result").innerHTML = ""
    var inputUser = document.getElementById("input-user").value

    fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=' + inputUser + '&limit=10&exchange=NASDAQ')
        .then(response => response.json())

        .then(data => {

            document.getElementById("loader").style.display = "block";
            var innerMarge;


            setTimeout(function () {
                
                    for(var index = 0 ; index <= data.length - 1; index++){
                        SearchNasdaqStocks(index)
                    }
                     

                    function SearchNasdaqStocks(index){
                        fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/' + data[index].symbol)
                        .then(res => res.json())
                        .then(data => obj = data)
                        .then(() => {
                            var ul = document.createElement('DIV');
                            ul.setAttribute('style', 'padding: 0; margin: 0;display:flex; justify-content:space-between;  align-items: center; margin-top: 20px');
                            ul.setAttribute('id', 'theList');
                            var cont = document.getElementById('result');
                            var a1 = document.createElement('a');
                            var img = document.createElement("IMG");
                            var spanPre = document.createElement("SPAN");
                            if (obj.profile.changes > 0) {
                                spanPre.style.color = "green"
                            } else {
                                spanPre.style.color = "red"
                            }
                            spanPre.innerHTML = obj.profile.changesPercentage
                            img.setAttribute("src", obj.profile.image);
                            img.setAttribute('width', 50);
                            img.setAttribute('height', 50);
                            a1.setAttribute("href", "/company.html?symbol=" + data[index].symbol);
                            innerMarge = data[index].name + " (" + data[index].symbol + ")";
                            a1.innerHTML = innerMarge
                            ul.appendChild(img);
                            ul.appendChild(a1);
                            ul.appendChild(spanPre)
                    
                            cont.appendChild(ul);
                        })
                    }

                    
                document.getElementById("loader").style.display = "none";


            }, 2000);

        });


})





