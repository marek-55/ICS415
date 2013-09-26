function countTags(){
	var userInput = $("#div1").find("input[name='url']").val();
	$.get(userInput, function(data){ 
			$("#tagTable").remove();
			var table = "<table border='1' id='tagTable'>";
			table += "<thead><tr><td>Tag</td><td>Count</td></tr></thead>";
			table += appendCount("a", data);
			table += appendCount("p", data);
			table += appendCount("ol", data);
			table += appendCount("ul", data);
			table += appendCount("img", data);
			table += appendCount("table", data);
			table += appendCount("dl", data);
			table += appendCount("form", data);
			table += appendCount("iframe", data);
			table += appendCount("dl", data);
			table += appendCount("br", data);
			table += appendCount("h1", data);
			table += appendCount("h2", data);
			table += appendCount("h3", data);
			table += appendCount("h4", data);
			table += appendCount("h5", data);
			table += appendCount("h6", data);
			table += appendCount("article", data);
			table += appendCount("div", data);
			table += appendCount("header", data);
			table += appendCount("object", data);
			table += appendCount("script", data);
			table += "</table>";
			$("#div1").append(table);
	});
	return false;
}

function appendCount(tag, data, appendTo){
	var count = $(data).find(tag).size();
	return "<tr><td>" + tag + "</td>" + "<td>" + count + "</td></tr>";
}

function externalJavaScriptList(){
	var userInput = $("#div1").find("input[name='url']").val();
	$.get(userInput, function(data){
		var scripts = $(data).find("head").attr("script");
		alert(scripts);
	});
}
