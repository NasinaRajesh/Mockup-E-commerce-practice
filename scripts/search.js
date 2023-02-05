//search logic 
const search$ = document.getElementById("search") ;
search$.addEventListener("keyup",function(event) {
    const term = search$.value ;
    //console.log(term) 
    const termLowercased = term.toLowerCase() 
    //console.log(termLowercased); 

    const productFiltered  = productsModified.filter(function(product){
        const titleLowerCased = product.title.toLocaleLowerCase() ; 
        return titleLowerCased.indexOf(termLowercased) !=-1;
    });
    renderProductCards(productFiltered)
})