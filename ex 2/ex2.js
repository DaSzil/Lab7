
		function changeProfile(){
			NameToJob();
			educationToAchievements();
			oldToNewImage();
			changeBodyBackgroundColor();
		}
		
		function NameToJob(){
		//
			document.getElementById("NumePrenume").innerHTML = "Inginer Hardware - NVIDIA";
		}
		
		function educationToAchievements(){
		
		//schimbare primul rand tabel
		var r1 = document.getElementById("realizare_r1");
		var p1 = document.getElementById("perioada_r1");
		var l1 = document.getElementById("link_r1");
		r1.innerHTML = "Intership";
		p1.innerHTML = "04.06.2024 - 28.09.2024";
		l1.innerHTML = "https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/";
		
		//schimbare al doilea rand tabel
		var r2 = document.getElementById("realizare_r2");
		var p2 = document.getElementById("perioada_r2");
		var l2 = document.getElementById("link_r2");
		r2.innerHTML = "Cea mai buna lucrare de licenta";
		p2.innerHTML = "26.06.2026";
		l2.innerHTML = "https://etti.utcluj.ro/finalizare-studii.html";
		
		//schimbare al treilea rand tabel
		var r3 = document.getElementById("realizare_r3");
		var p3 = document.getElementById("perioada_r3");
		var l3 = document.getElementById("link_r3");
		r3.innerHTML = "Voluntariat";
		p3.innerHTML = "04.06.2024 - 28.09.2024";
		l3.innerHTML = "https://osut.ro/info-studenti/oportunitati/oportunitati-de-voluntariat";
		}
		
		function oldToNewImage(){
		//
			var img = document.getElementById("pozeprofil");
			img.src = "./image2.jpg";
			img.style.opacity = 0.9;
			img.style.borderWidth = "10px";
			img.style.borderStyle = "solid";
			img.style.borderColor = "blue";
			img.style.right = "100px";
			
			var gif = document.getElementById("Romania");
			gif.src = "./romania-flag.gif";
			img.style.opacity = 1;
			img.style.right = "100px";
		}
		
		function changeBodyBackgroundColor(){
			var body = document.getElementById("body");
			body.style.backgroundColor = "#f0bf2b";
			body.style.fontFamily = "Tahoma";
			
			var header = document.getElementById("header");
			header.style.backgroundColor = "#bf1b2b";
			header.style.fontFamily = "Tahoma";
			
			var footer = document.getElementById("footer");
			footer.style.backgroundColor = "#bf1b2b";
			footer.style.fontFamily = "Tahoma";
			
			var birthday = document.getElementById("birthdate");
			birthday.style.backgroundColor = "#bf1b2b";
			birthday.style.fontFamily = "Tahoma";
		}
		






function AddNewItem() {
// call all functions
addBirthDate();
createEmailTextBox();
}



function addBirthDate() {
	//Creaza casuta in care se afiseaza data nasterii si varsta
	
	var tag = document.createElement("h3");
	tag.id = "date-years";
	var text = document.createTextNode("09-03-2003");
	var element = document.getElementById("birthdate");
	tag.appendChild(text);
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);
}

function birthToYears() {
	//Calculeaza varsta folosind data calendaristica a utilizatorului
	var currentTime = new Date();
	var vv = document.getElementById("date-years");
	var year = currentTime.getFullYear()
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));
	vv.innerHTML = "Varsta: " + numYears;
}

function handleMouseOut() {
	//Afiseaza varsta cand utilizatorul da hover asupra casutei
		document.getElementById("date-years").innerHTML = '09-03-2003';
	}

function createEmailTextBox() {
	//Creaza casuta in care utilizatorul isi poate introduce e-mail-ul
	var input = document.createElement("input");
	input.type = "email";
	input.id = "email-box";
	input.value = "abc@xyz.com";
	input.style.width = "300px";
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {
	//inspecteaza daca e-mail-ul introdus este valid (este de forma text@text.com)
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");

  	} else {
    	alert("Invalid email address!");
  	}
}
