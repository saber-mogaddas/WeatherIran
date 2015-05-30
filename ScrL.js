

$(document).ready(function () {

			            var wSelect = $("#mySelect").val();
			            $('#test').weatherfeed([wSelect]);
			            $('#mySelect').change(function () {
			               
			                    $('.Loading-Txt').fadeIn(400).delay(50).fadeOut(200);
			            
			            $('#SVG').selector.reload(true);
			            });
			        });
