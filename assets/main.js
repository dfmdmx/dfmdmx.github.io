
function apiCall(module,app,payload){
	
	var data_callback_url = 'https://api.dfmd.mx/'

	var form_data = new FormData();
	form_data.append('m',module);
	form_data.append('a',app);
	form_data.append('p',JSON.stringify(payload));

	return $.ajax({
			type: 'POST',
			url: data_callback_url,
			data: form_data,
			contentType: false,
			cache: false,
			processData: false,
			success: function(data){
				//console.log('apiCall success');
			},
			error: function(jqXHR){
				if (jqXHR.status == 0){
					console.log('apiCall error: api server down')
				}else{
					console.log('apiCall error: ' + jqXHR.status)
				}
			},
			dataFilter: function(data){
				// data = JSON.parse(data);
				// Aqui se puede hacer la evaluaci;on de otras cosas que se manda en el json aparte de payload
				// La funcion solo regresa el payload
				return data
			},
	})
}

$( document ).ready(function() {
	apiCall('mainframe','echo',{'hello':'world'}).done(function(response){
		console.log(response);
	}).fail(function(){console.log('handhsake failed')});
});