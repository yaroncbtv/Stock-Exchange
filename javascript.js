


var searchList  = [];

 
document.getElementById("button-addon2").addEventListener("click", () => {
    
    var result = document.getElementById("result").innerHTML = ""
    var inputUser = document.getElementById("input-user").value
    
    fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query='+inputUser+'&limit=10&exchange=NASDAQ')
   .then(response => response.json())
   
   .then(data => {
    
    document.getElementById("loader").style.display = "block";
    var innerMarge;
    setTimeout(function(){ 
        var cont = document.getElementById('result');
        // create ul element and set the attributes.
        var ul = document.createElement('ul');
        ul.setAttribute('style', 'padding: 0; margin: 0;');
        ul.setAttribute('id', 'theList');
    
        for (var i = 0; i <= data.length - 1; i++) {
            var a = document.createElement('a');     // create a element.
            a.setAttribute("href", "/company.html?symbol="+ data[i].symbol);
            
            // searchList.push( "/company.html?symbol="+ data[i].symbol)

            innerMarge = data[i].name + " (" + data[i].symbol + ")" + "<hr>";
            a.innerHTML =  innerMarge
        
            ul.appendChild(a);     // append li to ul.
        }
            cont.appendChild(ul);       // add list to the container.
            document.getElementById("loader").style.display  = "none";
        
    }, 2000);

   });


   
})


