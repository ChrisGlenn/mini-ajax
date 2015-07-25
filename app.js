//Get Current Users STEP 1
$('#getUsers').on('click', function(){
	return $.ajax({
		method: 'Get',
		url: 'http://reqr.es/api/users?page=1',
		success: function(res){
			console.log(res);
			insertData(res.data);
		}
	})
})

//Parsing data into the DOM
var insertData = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      $('#userInfo' + (i + 1)).html('<div>' + 'User Info:' + '<li>' + 'First name: ' + arr[i].first_name + '</li>' + '<li>' + 'Last name: ' + arr[i].last_name + '</li>' + '<hr>' + '</div>')
    };
  }

 //Submit button STEP 2
 $('#addUser').on('click', function(){
 	var userName = $('#name').val();
 	var userJob = $('#job').val();
 	return $.ajax({
 		method: 'POST',
 		url: 'http://reqr.es/api/users',
 		data: {}
 	})
 })