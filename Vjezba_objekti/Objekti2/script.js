const auto = {
	brend: {
		tip: 'Volvo',
		model: 'V40',
	},
	boja: 'crvena',
	brzina: 60,
	maxBrzina: 160,
	godinaProizvodnje: 1998,
    ubrzaj: function(brojSekundi){
		while (brojSekundi && this.brzina <= this.maxBrzina) {
			this.brzina += 5; 
			brojSekundi--;
		}
		return this.brzina;
	},
	zakoci: function(brojSekundi){
		while (brojSekundi && this.brzina > 0) {
			this.brzina -= 20; 
			brojSekundi--;
		}
		return this.brzina;
	},
	promijeniBoju: function(boja) {
		this.boja = novaBoja;
		return this.boja;
	}
}
document.getElementById("app").innerHTML=auto.brend.tip;
const myJSON = JSON.stringify(auto);
document.getElementById("app2").innerHTML=myJSON;


console.log(auto.zakoci(4));
console.log(auto.ubrzaj(10));

for (key in auto) {
	const value = auto[key];
	
	if (auto.propertyIsEnumerable(key)) {
		return "key + ': ' + value";
	}
}


document.getElementById("app3").innerHTML='Boja mog ' + auto.brend.tip + ' auta je ' + auto.boja;
