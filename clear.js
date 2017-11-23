//Callback after removing some browser data
var callback = function () {
        console.log("Succes")
        document.getElementById("succes").innerHTML = "Succes!"
        document.getElementById("succes").className = "succes"
      };

function clear_cache() {
	//Clear browser history
	chrome.browsingData.removeCache({
    	"since": 0
    }, callback);
}

function clear_history() {
	//Clear browser Cache	
	chrome.browsingData.removeHistory({
		"since": 0
	}, callback);
}

//Add a listener to the html object with the id "cache"
document.getElementById("cache").addEventListener("click", clear_cache);

//Add a listener to the html objects width the id "history"
document.getElementById("history").addEventListener("click", clear_history);