var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})(); 
var odd = 0;
var finished = true;
var selectedSubOrders = new Array;	
jQuery(function($) {

/*
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
    $('li').has('ul').mouseover(function(){
        $(this).children('ul').css('visibility','visible');
        }).mouseout(function(){
        $(this).children('ul').css('visibility','hidden');
        })
  }
*/
$(".options-2").click(function(){
	 $(this).toggleClass('selected');
	 var value = $(this).data("sub-order-id");
	
	 if(selectedSubOrders.indexOf(value)<0)
	 	selectedSubOrders.push(value);
	 else
	 	selectedSubOrders.splice( selectedSubOrders.indexOf(value), 1 );
	
	});
$("#process_documents").click(function() {
	//$("#id_"+$(this).data('field')).val($(this).data('id'));	
	
}); 

$('body').delegate('[name="all_barcodes[]"]', 'change', function () {
if($(this).is(':checked')){
print_array[$(this).val()]['quantity'] = print_array[$(this).val()]['quantity'] + 1;
}else{
print_array[$(this).val()]['quantity'] = print_array[$(this).val()]['quantity'] - 1;
}

});

$('body').delegate('[name="selectAll"]', 'change', function () {
if($(this).is(':checked')){
$.each( print_array, function( key, value ) {
	value['quantity'] = value['old_quantity'];
	value['old_quantity'] = 0;

});

$('[name="all_barcodes[]"]').each(function(){
		this.checked = true;
	});	
}else{
$.each( print_array, function( key, value ) {
	value['old_quantity'] = value['quantity'];
	value['quantity'] = 0;

});
/*

alert("before");
var datatable = $('.valuePicker table');
alert("before");



var nodes = datatable.fnGetNodes( );

alert("before");
$(nodes).attr("checked", "false");
alert("after");
*/	

$('[name="all_barcodes[]"]').each(function(){
		this.checked = false;
	});	
}

});

var availableCity = [
      "MUMBAI",
      "THANE"
   ];
$( "#city" ).autocomplete({
      source: availableCity
    });	


var availablState = [
	 "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"];
$( "#state" ).autocomplete({
      source: availablState
    });


var availableCountry = [
      "INDIA",
      "USA",
	  "UK"
    ];
$( "#country" ).autocomplete({
      source: availableCountry
    });	
var wWidth = $(window).width();
var dWidth = wWidth * 0.8; //this will make the dialog 80% of the
var wHeight = $(window).height();
var dHeight = wHeight * 0.8; //this will make the dialog 80% of the



 $( ".shopping_bag_container" ).hide();



$( ".valuePicker").dialog({autoOpen: false,modal: true,height: dHeight, width: dWidth });
$( ".valuePickerClients").dialog({autoOpen: false,modal: true,height: dHeight, width: dWidth });
$('.valuePicker table').DataTable();
$('.old').click(function(){
	document.location.href = '../../worker_production/'+$(this).data('id')+'/edit';
})

$('#view_all_entries').DataTable( {
        "aaSorting": [[ 0, "desc" ]],
        "iDisplayLength": 30,
      //  "sScrollY": 200,
       // "sScrollX": "100%",
       "iScrollLoadGap": 10,
        "iTabIndex": 1,
        "sPaginationType": "full_numbers"
    } );



$('body').delegate('#view_all_entries .options', 'click', function () {
var id = $(this).closest('tr').data('id');

if($(this).attr('data-edit'))
document.location.href = $('#route_path').val()+'/'+id ;
else
document.location.href = $('#route_path').val()+'/'+id + '/edit';
});


$('body').delegate('.valuePicker .options', 'click', function () {
	$("#"+$(this).data('field')).val($(this).data('val'));	
	$("#valuePicker_"+$(this).data('field') ).dialog( "close" );
});
  
$('body').delegate('.valuePickerClients .options', 'click', function () {
	$("#"+$(this).data('field')).val($(this).data('val'));	
	$("#valuePicker_"+$(this).data('field') ).dialog( "close" );
});

$( ".picker_agents .options").click(function() {
	$("#id_"+$(this).data('field')).val($(this).data('id'));	
}); 
 
$('body').delegate('.picker_opener', 'click', function () {
   $( "#"+$(this).data('id')).dialog( "open" );
});




var active_tab = 0;

if($("#active_tab").length)
	active_tab = parseInt($("#active_tab").val());
$("#accordion").accordion({ active: active_tab });

//$('#accordion').accordion('activate', 2);

/*
 $("#accordion").addClass("ui-accordion ui-accordion-icons ui-widget ui-helper-reset")
.find("h3")
.addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom")
    .hover(function() { $(this).toggleClass("ui-state-hover"); })

    .click(function() {
      $(this)
        .toggleClass("ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom")
        .find("> .ui-icon").toggleClass("ui-icon-triangle-1-e ui-icon-triangle-1-s").end()
      .next().toggleClass("ui-accordion-content-active").slideToggle();
      return false;
    })
    .next()
      .addClass("ui-accordion-content  ui-helper-reset ui-widget-content ui-corner-bottom");
*/
 $( document ).tooltip();
   		
$("#datepicker").datepicker();
$.datepicker.setDefaults({
     dateFormat: 'yy-mm-dd'
});

$(".datepicker").datepicker();
$.datepicker.setDefaults({
     dateFormat: 'yy-mm-dd'
});

$("#from").datepicker();
$.datepicker.setDefaults({
     dateFormat: 'yy-mm-dd'
});

$("#to").datepicker();
$.datepicker.setDefaults({
     dateFormat: 'yy-mm-dd'
});


 $("#uploadFile").on("change", function()
	{
    	//alert("Uploaded file");
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
 
        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file
 
            reader.onloadend = function(){ // set image data as background of div
         //   	alert("loading");
                $("#imagePreview").css("background-image", "url("+this.result+")");
          //  	alert("loaded");
            }
        }
    });

$("#imagePreview").click(function () {
    $("#uploadFile").click();
}); 

$( "input[type=submit], button, #downloadButton" ).button()
   $(".section").click(function(){
     $(this).next('.content').slideToggle();
});




$(".barcodeScanner").scroll(function(){
		var divend = $(this)[0].scrollHeight //+ $(this).offset().top; // full height of div (from top and actual div height).
        var pagescroll = $(this).scrollTop() + $(this).height(); // Total page scrolled.
		if(divend <= pagescroll)
              {
              	var newId = $('.barcodeScanner table tr:last').data('id') + 1;
              	var newRow = '<tr id="element-'+ newId +'" data-id="'+newId+'">';
              	newRow += '<td>'+newId+'</td>';
			   	newRow += '<td style="width:150px"><input type="text" class="barcode" id="barcode-'+newId+'" autocomplete="off" value=""></td>';
              	newRow += '<td contenteditable="true" class="design"></td>';
				newRow += '<td contenteditable="true" class="color"></td>';
				newRow += '<td contenteditable="true" class="size"></td>';
			    //newRow += '<td contenteditable="true" class="manufacturing_price" data-linked="manufacturing_prices"></td>';
			    //newRow += '<td contenteditable="true" class="wholesale_price" data-linked="wholesale_prices"></td>';
				//newRow += '<td contenteditable="true" class="other_website_price" data-linked="other_website_prices"></td>';
				newRow += '<td contenteditable="true" class="mrp"></td>';
              	// alert(newRow);
              	 $('.barcodeScanner table').append(newRow);
                 // alert(" Div End reached! "+$(this).offset().top);
                  //alert("Full DIV height: "+divend+" Scroll page Height: "+pagescroll); 
              }

    });
/*	
$("#agents").autocomplete({
	source: "{{ URL::route('allagentsbyname') }}",
	select: function( event, ui ) {
			
			}
});
*/

$("#sizes,#colors").change(function() {
		    var colors = $("#colors").val();
		    var sizes = $("#sizes").val();
		    if(colors=="" || sizes=="" ){
		    		$("#totalBarcodes").val("0");
		    		return false;
		    }		

		    var colorsA = colors.split("\n");
		    var sizesA = sizes.split("\n");
		    colorsA = colorsA.filter(function(e){return e}); 
		    sizesA = sizesA.filter(function(e){return e}); 
		 	var totalBarcodes = parseInt(colorsA.length)*parseInt(sizesA.length);
 			$("#totalBarcodes").val(totalBarcodes);
});

$("#colors, #sizes").keyup(function() {
		      var colors = $("#colors").val();
		    var sizes = $("#sizes").val();
		    if(colors=="" || sizes=="" ){
		    		$("#totalBarcodes").val("0");
		    		return false;
		    }		
		    var colorsA = colors.split("\n");
		    var sizesA = sizes.split("\n");
		    colorsA = colorsA.filter(function(e){return e}); 
		    sizesA = sizesA.filter(function(e){return e}); 
		 	var totalBarcodes = parseInt(colorsA.length)*parseInt(sizesA.length);
 			$("#totalBarcodes").val(totalBarcodes);
});



$('.scanOverview table tr th').click(function() {
	calculateTotal();
});


$('div.comingSoon').block({ 
                message: '<h1>Coming Soon...</h1>', 
                css: { border: '3px solid grey' } 
 				}); 




$("#unstitched").change(function(){
if($(this).is(':checked')){
	$("#tax").val(null);
		$("#tax_type").val(null);
		$("#tax_percentage").val(null);
		$("#taxRow").hide();
}
else{
	calculateTotal();
}
	//calculateTotal();

});

$(".barcode").change(function(){
calculateTotal();
});


});

function highlightIfEmpty(element){
	if(element.text() == "" || element.text() == null)
		{
			element.focus();
			//element.style("border-color:red")
			return false;
		}	
		else{
			return true;
		}
}

function calculateTotal(){
	var barcode = $("#element-1 .barcode").val();
	var i = 1;
	var sum = 0;
	var quantity = 0;
	while(barcode!="" && barcode!=null)
	{
		var mrp = $("#element-"+i+" .mrp").html();
		sum = sum + parseInt(mrp);
		i++;	
		quantity++;
		barcode = $("#element-"+i+" .barcode").val();
	}
	$('#billing_amount').val(sum);
	$('.shopping_bag_total_billing_amount').text(sum);
	$('.shopping_bag_total_items').text(quantity);
	$('#quantity').val(quantity);
	var total = parseFloat(sum).toFixed(2); 
	if($('#ethnicity_percentage').length){
		var ethnicity_percentage = $("#ethnicity_percentage").val();
		var ethnicity_amount = parseFloat(sum * ethnicity_percentage / 100).toFixed(2);
		$("#ethnicity_amount").val(ethnicity_amount);
		total = sum - ethnicity_amount;
	}

	var discount = 0;
	if($('#discount_percentage').length && $('#discount_percentage').val()!=""){
		discount_percentage = $('#discount_percentage').val();
		discount = parseFloat(total*discount_percentage/100).toFixed(2);
		$('#discount_percentage').val(discount_percentage);
		$('#discount_info').text("DISCOUNT - "+discount_percentage+"%")
		$('.shopping_bag_total_discount').text(discount);
		$('#discount').val(discount);
		total = +total - +discount;
	}	
	var unstitched = $("#unstitched").val();
	if($("#unstitched").is(':checked')){
		//do not add any taxes
		$("#tax").val(null);
		$("#tax_type").val(null);
		$("#tax_percentage").val(null);
		$("#taxRow").hide();

	}else{
	if($('#vat').length && $('#vat').val()!=""){
	$("#tax_type").val("vat");
	$("#tax_percentage").val($('#vat').val());
	var vat = parseFloat($('#vat').val()).toFixed(2);
	var vatAmount = parseFloat(vat*total/100).toFixed(2);
	$('.shopping_bag_tax_type').text("VAT");	
	$('.shopping_bag_tax_percentage').text(" - "+$('#vat').val()+"%");
	$('.shopping_bag_total_tax').text(vatAmount);
	
	$('#tax').val(vatAmount);
	total = +total + +vatAmount;
	}

	if($('#cst').length && $('#cst').val()!=""){
	$("#tax_type").val("cst");
	$("#tax_percentage").val($('#cst').val());
	var cst = parseFloat($('#cst').val()).toFixed(2);

	var cstAmount = parseFloat(cst*total/100).toFixed(2);
	$('.shopping_bag_tax_type').text("CST");	
	$('.shopping_bag_tax_percentage').text(" - "+$('#cst').val()+"%");
	$('.shopping_bag_total_tax').text(cstAmount);
	
	$('#tax').val(cstAmount);
	total = +total + +cstAmount;
	}
	}

	if($('#credit_amount').length && $('#credit_amount').val()!=""){
	var credit_amount = $('#credit_amount').val();
	$('.shopping_bag_credit_amount').text(credit_amount);
	total = +total - +credit_amount;
	//alert(total);
	}

	$('.shopping_bag_total').text(total);
	$('.shopping_bag').animate({
            color: "#99FF33"
        }, 250);
	$('.shopping_bag').animate({
            color: "#000000"
        }, 250);

	


		$('#total').val(total);
	

}

function old_calculateTotal(){
	var barcode = $("#element-1 .barcode").val();
	var i = 1;
	var sum = 0;
	while(barcode!="" && barcode!=null)
	{
		var mrp = $("#element-"+i+" .mrp");
		if(mrp.text()!="")
			sum = sum + parseInt(mrp.text());
		i++;	
		barcode = $("#element-"+i+" .barcode").val();
	}
	$('#sum').text(sum);
	var total = sum; 
	
	if($('#vat').text()!=""){
	var vat = parseInt($('#vat').text());
	var vatAmount = vat*sum/100;
	$('#taxAmount').text(vatAmount);
	total = total + vatAmount;
	}

	if($('#cst').text()!=""){
	var cst = parseInt($('#cst').text());
	var cstAmount = cst*sum/100;
	$('#taxAmount').text(cstAmount);
	total = total + cstAmount;
	}
	
	//var discount = parseInt($('#discount').text());
	$('#total').text(total);
}

function copyProductMasterContent() {

	$('button[type=submit], input[type=submit]').attr('disabled',true);
	$('button[type=submit], input[type=submit]').attr('disabled','disabled');
	$('button[type=submit], input[type=submit]').val('Please Wait .......');
	

/*
$("td[contenteditable='true']").each(function(){
	// var element =        
});
*/
	var barcode = $("#element-1 .barcode").text();
	var i = 1;
	while(barcode!="" && barcode!=null)
	{
		
		var design = $("#element-"+i+" .design");
		var ethnicity_design = $("#element-"+i+" .ethnicity_design");
		var color = $("#element-"+i+" .color");
		var size = $("#element-"+i+" .size");
		var manufacturing_price = $("#element-"+i+" .manufacturing_price");
		var wholesale_price = $("#element-"+i+" .wholesale_price");
		var other_website_price = $("#element-"+i+" .other_website_price");
		var mrp = $("#element-"+i+" .mrp");

		if(highlightIfEmpty(design) && highlightIfEmpty(ethnicity_design) && highlightIfEmpty(color) && highlightIfEmpty(size) && highlightIfEmpty(manufacturing_price) && highlightIfEmpty(wholesale_price) && highlightIfEmpty(other_website_price) && highlightIfEmpty(mrp))
		{
			$("#barcodes").val($("#barcodes").val() + "" + barcode + ";");
			$("#designs").val($("#designs").val()+ "" + design.text()+ ";");
			$("#ethnicity_designs").val($("#ethnicity_designs").val()+  "" + ethnicity_design.text()+ ";");
		    $("#colors").val($("#colors").val()+  "" + color.text()+ ";");
		    $("#sizes").val($("#sizes").val()+  "" + size.text()+ ";");
		    $("#manufacturing_prices").val($("#manufacturing_prices").val()+  "" + manufacturing_price.text()+ ";");
		    $("#wholesale_prices").val($("#wholesale_prices").val()+  "" + wholesale_price.text()+ ";");
		    $("#other_website_prices").val($("#other_website_prices").val()+  "" + other_website_price.text()+ ";");
		    $("#mrp").val($("#mrp").val()+ "" + mrp.text()+ ";");
		}
		else{
				event.preventDefault();
			return false;
		}		
		i++;	

		barcode = $("#element-"+i+" .barcode").text();
	}

}

function copySalesContent() {
	$('button[type=submit], input[type=submit]').attr('disabled',true);
	$('button[type=submit], input[type=submit]').attr('disabled','disabled');
	$('button[type=submit], input[type=submit]').val('Please Wait .......');
	var barcode = $("#element-1 .barcode").val();
	$(".modal").show();
	calculateTotal();
	var i = 1;
	while(barcode!="" && barcode!=null)
	{
		
		var design = $("#element-"+i+" .design");
		var color = $("#element-"+i+" .color");
		var size = $("#element-"+i+" .size");
		var mrp = $("#element-"+i+" .mrp");

		if(highlightIfEmpty(design) && highlightIfEmpty(color) && highlightIfEmpty(size) && highlightIfEmpty(mrp))
		{
			$("#barcodes").val($("#barcodes").val() + "" + barcode + ";");
			$("#designs").val($("#designs").val()+ "" + design.text()+ ";");
   			$("#colors").val($("#colors").val()+  "" + color.text()+ ";");
		    $("#sizes").val($("#sizes").val()+  "" + size.text()+ ";");
		    $("#billing_amounts").val($("#billing_amounts").val()+ "" + mrp.text()+ ";");
		}
		else{
				event.preventDefault();
				return false;
		}		
		i++;	

		barcode = $("#element-"+i+" .barcode").val();
	}
	$("#quantity").val(i-1);
}


function copyApprovalsContent(){
$('button[type=submit], input[type=submit]').attr('disabled',true);
	$('button[type=submit], input[type=submit]').attr('disabled','disabled');
	$('button[type=submit], input[type=submit]').val('Please Wait .......');
		var barcode = $("#element-1 .barcode").val();
	var i = 1;
	while(barcode!="" && barcode!=null)
	{	
		$("#barcodes").val($("#barcodes").val() + "" + barcode + ";");
		i++;	
		barcode = $("#element-"+i+" .barcode").val();
	}	
}


function copyWorkersContent(){

	var design = $("#element-1 .design").text();
	var i = 1;
	while(design!="" && design!=null)
	{			
		var billing_amount = $("#element-"+i+" .billing_amount");
		if(highlightIfEmpty(billing_amount)){
		$("#designs").val($("#designs").val() + "" + design + ";");
		$("#billing_amounts").val($("#billing_amounts").val() + "" + billing_amount.text() + ";");
		}
		else{
				event.preventDefault();
			return false;
		}
		i++;	
		design = $("#element-"+i+" .design").text();
	}	
}


function copyInwardsContent(){
	var design = $("#element-1 .design").text();
	var i = 1;
	while(design!="" && design!=null)
	{			
		var color = $("#element-"+i+" .color");
		var size = $("#element-"+i+" .size");
		var quantity = $("#element-"+i+" .quantity");
		var billing_amount = $("#element-"+i+" .billing_amount");
		if(highlightIfEmpty(color) && highlightIfEmpty(size) && highlightIfEmpty(billing_amount) && highlightIfEmpty(quantity)){
		$("#designs").val($("#designs").val() + "" + design + ";");
		$("#colors").val($("#colors").val() + "" + color.text() + ";");
		$("#sizes").val($("#sizes").val() + "" + size.text() + ";");
		$("#billing_amounts").val($("#billing_amounts").val() + "" + billing_amount.text() + ";");
		$("#quantities").val($("#quantities").val() + "" + quantity.text() + ";");
		}
		else{
			event.preventDefault();
			return false;
		}
		i++;	
		design = $("#element-"+i+" .design").text();
	}	
}


 function printBarcodes() {
 	var date = new Date();
	var date_string = date.getDate() + "." + parseInt(parseInt(date.getMonth())+1) + "." + date.getFullYear();
	var   totalBarcodes = 0;
	var subTotal = 0;
	
	var print = print_array;
	qz.append("N\n");
	qz.append("q1218\n");
	qz.append("Q303,26\n");
	qz.append('TDdd me y4\n'); 
		
	$.each( print, function( key, value ) {
		pB(key,value,date_string);
	});
  	if(odd){
     qz.append('\nP1,1\n');
     qz.append('END');
  	}else{
  	//	alert("not appending");
  	}
	 // Mark the end of a label, in this case  P1 plus a newline character
	 // qz-printknows to look for this and treat this as the end of a "page"
	 // for better control of larger spooled jobs (i.e. 50+ labels)
	 qz.setEndOfDocument("END");
	 // The amount of labels to spool to the printer at a time. When
	 // qz-print counts this many `EndOfDocument`'s, a new print job will 
	 // automatically be spooled to the printer and counting will start
	 // over.
	 qz.setDocumentsPerSpool("8");      
	 qz.print();
}

function pB(key, value, date_string){
	var quantity = value['quantity'];
	var design = value['design'];
    var color = value['color'];
    var size = value['size'];
    var mrp = value['mrp'];
 	var identifier= value['identifier'];
 	var category= value['category'];
    if(odd){
    qz.append('B325,0,0,1A,2,2,70,B,"'+key+'"\n');
    qz.append('A325,105,0,3,1,1,N,"VAMAS '+category+'"\n');
    qz.append('A325,130,0,4,1,1,N,"'+design+'"\n');
    qz.append('A325,162,0,3,1,1,N,"'+color+'"\n');
    qz.append('A545,162,0,3,1,1,N,"'+size+'"\n');
 	qz.append('A325,185,0,3,1,1,N,"'+identifier+'"\n');
    qz.append('A325,210,0,3,1,1,N,"M.R.P. Rs. '+mrp+'"\n');
    qz.append('A325,232,0,2,1,1,N,"(Inclu. of all taxes)"\n');
    qz.append('A325,255,0,1,1,1,N,"Pcs 1 Pkd. Dt: '+date_string+'"\n');
    qz.append('\nP1,1\n');
    qz.append('END');
    odd=0;
    quantity--;
    }
    if(quantity>0){
      var v = Math.floor(quantity/2);
      if(quantity % 2 == 0 || Math.floor(quantity/2)>0){ 
        var set = Math.floor(quantity/2);  
        var remaining = quantity % 2;
        qz.append('\nN\n');  
        qz.append('B0,0,0,1A,2,2,70,B,"'+key+'"\n');
        qz.append('B325,0,0,1A,2,2,70,B,"'+key+'"\n');

        qz.append('A0,105,0,3,1,1,N,"VAMAS '+category+'"\n');
        qz.append('A325,105,0,3,1,1,N,"VAMAS '+category+'"\n');
        
        qz.append('A0,130,0,4,1,1,N,"'+design+'"\n');
        qz.append('A325,130,0,4,1,1,N,"'+design+'"\n');
        
        qz.append('A0,162,0,3,1,1,N,"'+color+'"\n');
        qz.append('A325,162,0,3,1,1,N,"'+color+'"\n');

        qz.append('A190,162,0,3,1,1,N,"'+size+'"\n');
        qz.append('A545,162,0,3,1,1,N,"'+size+'"\n');

        qz.append('A0,185,0,3,1,1,N,"'+identifier+'"\n');
        qz.append('A325,185,0,3,1,1,N,"'+identifier+'"\n');

        qz.append('A0,210,0,3,1,1,N,"M.R.P. Rs. '+mrp+'"\n');
        qz.append('A325,210,0,3,1,1,N,"M.R.P. Rs. '+mrp+'"\n');

        qz.append('A0,232,0,2,1,1,N,"(Inclu. of all taxes)"\n');
        qz.append('A325,232,0,2,1,1,N,"(Inclu. of all taxes)"\n');
        
        qz.append('A0,255,0,1,1,1,N,"Pcs 1 Pkd. Dt: '+date_string+'"\n');
        qz.append('A325,255,0,1,1,1,N,"Pcs 1 Pkd. Dt: '+date_string+'"\n');
        qz.append('\nP'+set+',1\n');
        qz.append('END');
      }
      if(remaining || Math.floor(quantity/2)==0  ){
        qz.append('\nN\n');  
        qz.append('B0,0,0,1A,2,2,70,B,"'+key+'"\n');
        qz.append('A0,105,0,3,1,1,N,"VAMAS '+category+'"\n');
        qz.append('A0,130,0,4,1,1,N,"'+design+'"\n');
        qz.append('A0,162,0,3,1,1,N,"'+color+'"\n');
        qz.append('A190,162,0,3,1,1,N,"'+size+'"\n');
   		qz.append('A0,185,0,3,1,1,N,"'+identifier+'"\n');
    
        qz.append('A0,210,0,3,1,1,N,"M.R.P. Rs. '+mrp+'"\n');
        qz.append('A0,232,0,2,1,1,N,"(Inclu. of all taxes)"\n');
        qz.append('A0,255,0,1,1,1,N,"Pcs 1 Pkd. Dt: '+date_string+'"\n');
        odd = 1;
        remaining = 0;
      }
    }
}

function changeLocation(path){
	document.location.href = '../../'+path;
}

