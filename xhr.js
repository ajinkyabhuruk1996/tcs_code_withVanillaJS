//https://www.codegrepper.com/code-examples/javascript/vanilla+js+get+request

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous 
    xmlHttp.send(null);
  }


fetch('https://jsonplaceholder.typicode.com/posts').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});

var ColorDots = function(rows, dots) {
    // Properties
    this.numOfDots = dots;
    this.numOfRows = rows || 1;
    this.iconHtml = '<i class="fa fa-circle icon" aria-hidden="true"></i>';

    this.renderRows();

};    


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(function (data) {
    // This is the JSON from our response
    
    ColorDots.prototype.renderDots = function(products) { 
        this.rowTemplate = '<div class="color-dot row"> '+ 
                '$brand'+
                '$category'+
                '$description'+
                '$discountPercentage'+
                '$price'+
                '$rating'+
                '$thumbnail'+
                '$images'+
        '</div>';
        this.iconTemplate = '<i class="fa fa-circle icon" aria-hidden="true"></i>';     

        for ( let r = 0; r < products.length; r++) {
            
            let rowTemplate = '<div class="color-dot row"> '+ 
                '$brand'+
                '$category'+
                '$description'+
                '$discountPercentage'+
                '$price'+
                '$rating'+
                '$thumbnail'+
                '$images'+
            '</div>';

            for (const [key, value] of Object.entries(products[r])) {
                debugger;
                //console.log(`${key}: ${value}`);
                if(key === 'thumbnail'){
                    var imageTemplate = '<img src='+ value+ 'alt="Girl in a jacket" width="500" height="600">'
               
                    rowTemplate = rowTemplate.replace('$' +`${key}` , imageTemplate +''+ '</br>');
                }
                else{
                    rowTemplate = rowTemplate.replace('$' +`${key}` , value +''+ '</br>');
                }   
            }
            document.getElementById('frame').innerHTML += rowTemplate;                  
        }    
    };
    ColorDots.prototype.renderDots(data.products);
	console.log(data);
})
.then(console.log);

