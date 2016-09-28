var number, total;

hitung("dua ratus lima puluh empat ribu tiga ratus lima puluh enam", "dua ratus lima puluh empat ribu tiga ratus lima puluh dua");

function hitung(string1, string2){
	angka1 = convert_to_number(string1);
	angka2 = convert_to_number(string2);

	alert(angka1+angka2);
}

function convert_to_string(angka){

}

function convert_to_number(kata){
	total = 0;
	var array_kata = kata.split(" ");
	for (var i = 0; i < array_kata.length; i++) {
		string_to_number(array_kata[i]);
	};
	return total+number;
}

function string_to_number(kata){
	switch (kata){
		case "satu":
		number = 1;
		break;
		case "dua":
		number = 2;
		break;
		case "tiga":
		number = 3;
		break;
		case "empat":
		number = 4;
		break;
		case "lima":
		number = 5;
		break;
		case "enam":
		number = 6;
		break;
		case "tujuh":
		number = 7;
		break;
		case "delapan":
		number = 8;
		break;
		case "sembilan":
		number = 9;
		break;
		case "sepuluh":
		number = 10;
		break;
		case "sebelas":

		break;
		case "belas":

		break;
		case "puluh":
		total += number * 10;
		console.log("puluh = "+total);
		number = 0;
		break;
		case "seratus":
		
		break;
		case "ratus":
		total += number * 100;
		console.log("ratus = "+total);
		number = 0;
		break;
		case "seribu":

		break;
		case "ribu":
		total = (total + number) * 1000;
		console.log("ribu = "+total);
		number = 0;
		break;	
	}
	return number;
}

function number_to_string(angka){
	
	
	switch (angka){
		case "1":

		break;
		case "2":
		
		break;
		case "3":
		
		break;
		case "4":
		
		break;
		case "5":
		
		break;
		case "6":
		
		break;
		case "7":
		
		break;
		case "8":
		
		break;
		case "9":
		
		break;
		case "10":
		
		break;
		case "11":
		
		break;

	}
}