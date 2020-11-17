
export function Search() {

    var searchList = [];
    let jsondata;
    var obj;
    document.getElementById("button-addon2").addEventListener("click", () => {
        var index = 0
        var result = document.getElementById("result").innerHTML = ""
        var inputUser = document.getElementById("input-user").value
        fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=' + inputUser + '&limit=10&exchange=NASDAQ')
            .then(response => response.json())
            .then(data => {
                document.getElementById("loader").style.display = "block";
                var innerMarge;
                setTimeout(function () {
                    for (var index = 0; index <= data.length - 1; index++) {
                        SearchNasdaqStocks(index)

                    }
                    function SearchNasdaqStocks(index) {
                        fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/company/profile/' + data[index].symbol)
                            .then(res => res.json())
                            .then(data => obj = data)
                            .then(() => {
                                var ul = document.createElement('DIV');
                                ul.setAttribute('style', 'padding: 0; margin: 0;display:flex; justify-content:flex-start;  align-items: center; margin-top: 20px');
                                ul.setAttribute('id', 'theList');
                                var cont = document.getElementById('result');
                                var a1 = document.createElement('a');
                                var img = document.createElement("IMG");
                                var spanPre = document.createElement("SPAN");
                                spanPre.setAttribute("style", "font-weight: bold;")
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
                                var span2 = document.createElement("SPAN")
                                a1.setAttribute("style", "padding-left:2%;padding-right:2%;")
                                var yellow = data[index].symbol
                                span2.innerHTML = " (" + data[index].symbol + ")"
                                a1.innerHTML = data[index].name;

                                markWord()

                                function markWord() {

                                    inputUser = inputUser.toUpperCase()
                                    if (data[index].symbol.includes(inputUser)) {
                                        var possion = data[index].symbol.search(inputUser)
                                        for (var i = possion, j = 0; i <= data[index].symbol.length - 1; i++, j++) {
                                            if (data[index].symbol[i] === inputUser[j]) {
                                                span2.innerHTML = span2.innerHTML.replace(data[index].symbol[i], '<span style="background-color: yellow;">' + data[index].symbol[i] + '</span>');

                                            }
                                        }

                                    }

                                    data[index].name = data[index].name.toUpperCase()
                                    if (data[index].name.includes(inputUser)) {
                                        var possion = data[index].name.search(inputUser)
                                        for (var i = possion, j = 0; i <= data[index].name.length - 1; i++, j++) {
                                            if (data[index].name[i] === inputUser[j]) {
                                                a1.innerHTML = a1.innerHTML.replace(data[index].name[i], '<span style="background-color: yellow;">' + data[index].name[i] + '</span>');
                                            }
                                        }

                                    }

                                }

                                ul.appendChild(img);
                                ul.appendChild(a1);
                                ul.appendChild(span2)
                                ul.appendChild(spanPre)

                                cont.appendChild(ul);
                            })
                    }
                    document.getElementById("loader").style.display = "none";
                }, 2000);
            });
    })
};



//----------------------------------------------------------------------
//OLD V

// var text = inputUser;
// var query = new RegExp("(\\b" + text + "\\b)", "gim");
// var e = a1.innerHTML
// var enew = e.replace(/(<span>|<\/span>)/igm, "");
// a1.innerHTML = enew;
// var newe = enew.replace(query, "<span style = background-color: yellow;>$1</span>");
// a1.innerHTML = newe;




// for(var i=0 ; i<=inputUser.length-1; i++){
//     for(var j=0 ; j<=data[index].name.length-1; j++)
//         if(data[index].name[j] === inputUser[i]){
//          console.log(data[index].name[j]+ "===" +inputUser[i])

//             a1.innerHTML = a1.innerHTML.replace(data[index].name[j], '<span style="background-color: yellow;">'+data[index].name[j]+'</span>');

//     }

// }




function task(i) {
    setTimeout(function () {

    }, 2000 * i);
} 