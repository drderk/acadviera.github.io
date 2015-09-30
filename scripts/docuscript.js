function load_page(name){
	var contentPane = document.getElementById("content");
	contentPane.setAttribute("src", "docs\\" + name);
	console.log("Loaded page" + name);
	return;
}