$("form").submit(function(event){
	event.preventDefault();
	var serviceUrl = $(this).attr("action");
	var formData = $(this).serializeArray();

	var requestData = {};
	formData.map(function(field){
		requestData[field.name] = field.value;
	});
	requestData = JSON.stringify(requestData);

	$.ajax({
		type : "POST",
		url : serviceUrl,
		data : requestData,
		dataType : "text",
		contentType : "application/json; charset=utf-8",
		success : function(data, status, xhr){
			alert("Success: " + xhr.responseText);
		},
		error : function(xhr, status, error){
			alert("Oops! An error occurred.");
		}
	});
});