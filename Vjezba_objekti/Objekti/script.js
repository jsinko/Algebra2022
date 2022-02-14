var jeans = {
    brand:{
        manufacturer: 'Mustang',
        model:'regular',
    },
    color:{'blue', 'black', 'white'};
    price: 699,
    godina: 2021,
    checkPrice: function(){
        if(this.price > 500){
            return "Cijena je veća od 500 kn"; 
        }else{
            return "Cijena je manja od 500 kn";
        }
    }
}
console.log(jeans.brand.model);
document.getElementById("app").innerHTML="hjj" + jeans.price;