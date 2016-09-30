var number, total;

hitung("dua ratus lima puluh empat ribu tiga ratus lima puluh enam", "dua ratus lima puluh empat ribu tiga ratus lima puluh dua");


function hitung(string1, string2){
	angka1 = convert_to_number(string1);
	angka2 = convert_to_number(string2);

	var jumlah = angka1 + angka2;
	hasil_terbilang= convert_to_string(jumlah);


	alert(hasil_terbilang);
}

function convert_to_string(angka){
	hasil = number_to_string(angka);
	return hasil;
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

function number_to_string(bilangan){
	
	bilangan    = String(bilangan);
	var angka   = new Array('0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0');
	var kata    = new Array('','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan');
	var tingkat = new Array('','Ribu');

	var panjang_bilangan = bilangan.length;

	/* pengujian panjang bilangan */
	if (panjang_bilangan > 9) {
		kaLimat = "Diluar Batas";
		return kaLimat;
	}

	/* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
	for (i = 1; i <= panjang_bilangan; i++) {
		angka[i] = bilangan.substr(-(i),1);
	}

	i = 1;
	j = 0;
	kaLimat = "";


	/* mulai proses iterasi terhadap array angka */
	while (i <= panjang_bilangan) {

		subkaLimat = "";
		kata1 = "";
		kata2 = "";
		kata3 = "";

		/* untuk Ratusan */
		if (angka[i+2] != "0") {
			if (angka[i+2] == "1") {
				kata1 = "Seratus";
			} else {
				kata1 = kata[angka[i+2]] + " Ratus";
			}
		}

		/* untuk Puluhan atau Belasan */
		if (angka[i+1] != "0") {
			if (angka[i+1] == "1") {
				if (angka[i] == "0") {
					kata2 = "Sepuluh";
				} else if (angka[i] == "1") {
					kata2 = "Sebelas";
				} else {
					kata2 = kata[angka[i]] + " Belas";
				}
			} else {
				kata2 = kata[angka[i+1]] + " Puluh";
			}
		}

		/* untuk Satuan */
		if (angka[i] != "0") {
			if (angka[i+1] != "1") {
				kata3 = kata[angka[i]];
			}
		}

		/* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
		if ((angka[i] != "0") || (angka[i+1] != "0") || (angka[i+2] != "0")) {
			subkaLimat = kata1+" "+kata2+" "+kata3+" "+tingkat[j]+" ";
		}

		/* gabungkan variabe sub kaLimat (untuk Satu blok 3 angka) ke variabel kaLimat */
		kaLimat = subkaLimat + kaLimat;
		i = i + 3;
		j = j + 1;

	}

	/* mengganti Satu Ribu jadi Seribu jika diperlukan */
	if ((angka[5] == "0") && (angka[6] == "0")) {
		kaLimat = kaLimat.replace("Satu Ribu","Seribu");
	}

	return kaLimat;
}