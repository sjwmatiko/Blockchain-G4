// Define the translations for English and Swahili
	var translations = {
		"english": {
			"home": "Home",
			"about": "About Us"
		},
		"swahili": {
			"home": "Nyumbani",
			"about": "Tujue"
		}
	};

	// Set the default language to English
	var currentLanguage = localStorage.getItem("language") || "english";

	// Function to switch swahili language
	function switchSwahili() {
		// Toggle the language between English and Swahili
		if (currentLanguage === "english") {
			currentLanguage = "swahili";
		}

		// Get all the elements with a "data-translate" attribute
		var elements = document.querySelectorAll("[data-translate]");

		// Loop through each element and replace the text with the corresponding translation
		for (var i = 0; i < elements.length; i++) {
			var key = elements[i].getAttribute("data-translate");
			elements[i].textContent = translations[currentLanguage][key];
		}

		//Store the current language in the local storage
		localStorage.setItem("language", currentLanguage);
	}

	// Function to switch english language
	function switchEnglish() {
	// Toggle the language between Swahili and English 
	if (currentLanguage === "swahili") {
		currentLanguage = "english";
	} 

	// Get all the elements with a "data-translate" attribute
	var elements = document.querySelectorAll("[data-translate]");

	// Loop through each element and replace the text with the corresponding translation
	for (var i = 0; i < elements.length; i++) {
		var key = elements[i].getAttribute("data-translate");
		elements[i].textContent = translations[currentLanguage][key];
	}

	//Store the current language in the local storage
	localStorage.setItem("language", currentLanguage);
}
