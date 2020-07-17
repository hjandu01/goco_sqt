$(document).ready(function() {
    $('.btn-hpbx-bsft').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#hpbx_bsft option:selected").attr("value1");
        var desc_val = $("#hpbx_bsft option:selected").attr("value2");
        var price_val = $("#hpbx_bsft option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc form-cost' value=" + price_val +
                     " readonly></td><td><input class='form-calc form-qty' ></td><td><input class='form-line' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblProducts').append(markup);
      //  $( "#tblProducts #myTable" ).load( "#tblProducts #myTable" );

      });

    $('.btn-msteams').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#msteams option:selected").attr("value1");
        var desc_val = $("#msteams option:selected").attr("value2");
        var price_val = $("#msteams option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc form-cost' value=" + price_val +
                     " readonly></td><td><input class='form-calc form-qty'></td><td><input class='form-line' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblProducts').append(markup);
      //  $( "#tblProducts #myTable" ).load( "#tblProducts #myTable" );

      });

    $('.btn-hpbx-cc').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#hpbx_cc option:selected").attr("value1");
        var desc_val = $("#hpbx_cc option:selected").attr("value2");
        var price_val = $("#hpbx_cc option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc form-cost' value=" + price_val +
                     " readonly></td><td><input class='form-calc form-qty' ></td><td><input class='form-line' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblProducts').append(markup);
      //  $( "#tblProducts #myTable" ).load( "#tblProducts #myTable" );

      });

    $('.btn-sipt').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#sipt option:selected").attr("value1");
        var desc_val = $("#sipt option:selected").attr("value2");
        var price_val = $("#sipt option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc form-cost' value=" + price_val +
                     " readonly></td><td><input class='form-calc form-qty' ></td><td><input class='form-line' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblProducts').append(markup);
      //  $( "#tblProducts #myTable" ).load( "#tblProducts #myTable" );

      });

      $('.btn-add-on').click(function() {
          //The HTML of the TR row that we want to add to our table.
          var sku_val = $("#addon option:selected").attr("value1");
          var desc_val = $("#addon option:selected").attr("value2");
          var price_val = $("#addon option:selected").attr("value3");
          var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                       "</td><td><input class='form-calc form-cost' value=" + price_val +
                       " readonly></td><td><input class='form-calc form-qty' ></td><td><input class='form-line' readonly></td></tr>";

          //Add the HTML after the last row by using tr:last.
          $('#tblProducts').append(markup);
        //  $( "#tblProducts #myTable" ).load( "#tblProducts #myTable" );

        });


    $('.btn-hw').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#hw option:selected").attr("value1");
        var desc_val = $("#hw option:selected").attr("value2");
        var price_val = $("#hw option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc-hw form-cost-hw' value=" + price_val +
                     " readonly></td><td><input class='form-calc-hw form-qty-hw'></td><td><input class='form-line-hw' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblNRC').append(markup);
    //    $( "#tblProducts #myTable" ).load( "orders_form.html #tblProducts #myTable" );

      });

    $('.btn-phone').click(function() {
        //The HTML of the TR row that we want to add to our table.
        var sku_val = $("#phone option:selected").attr("value1");
        var desc_val = $("#phone option:selected").attr("value2");
        var price_val = $("#phone option:selected").attr("value3");
        var markup = "<tr id='row_id_" +sku_val+ "'><td>" + sku_val + "</td><td>" + desc_val +
                     "</td><td><input class='form-calc-hw form-cost-hw' value=" + price_val +
                     " readonly></td><td><input class='form-calc-hw form-qty-hw'></td><td><input class='form-line-hw' readonly></td></tr>";

        //Add the HTML after the last row by using tr:last.
        $('#tblNRC').append(markup);
    //    $( "#tblProducts #myTable" ).load( "orders_form.html #tblProducts #myTable" );

      });
});

$(document).ready(function() {
    $("#tblProducts").on("keyup", ".form-calc", function() {
        var parent = $(this).closest("tr");
        var price_tmp = parent.find(".form-cost").val();
        var price = price_tmp.replace("C$", "");
        parent.find(".form-line").val((parent.find(".form-qty").val() * parseFloat(price)).toFixed(2));
        var total = 0;
        $(".form-line").each(function(){
            total += parseFloat($(this).val()||0);
        });
        $("#total").text(total.toFixed(2));
    });
});

$(document).ready(function() {
    $("#tblNRC").on("keyup", ".form-calc-hw", function() {
        var parent = $(this).closest("tr");
        var price_tmp = parent.find(".form-cost-hw").val();
        var price = price_tmp.replace("C$", "");
        parent.find(".form-line-hw").val((parent.find(".form-qty-hw").val() * parseFloat(price)).toFixed(2));
        var total = 0;
        $(".form-line-hw").each(function(){
            total += parseFloat($(this).val()||0);
        });
        $("#nrc_grdtot").text(total.toFixed(2));
    });
});

  function exportToExcel(tableID, filename = ''){
      var downloadurl;
      var dataFileType = 'application/vnd.ms-excel';
      var tableSelect = document.getElementById(tableID);
      var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');

      // Specify file name
      filename = filename?filename+'.xls':'export_excel_data.xls';

      // Create download link element
      downloadurl = document.createElement("a");

      document.body.appendChild(downloadurl);

      if(navigator.msSaveOrOpenBlob){
          var blob = new Blob(['\ufeff', tableHTMLData], {
              type: dataFileType
          });
          navigator.msSaveOrOpenBlob( blob, filename);
      }else{
          // Create a link to the file
          downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;

          // Setting the file name
          downloadurl.download = filename;

          //triggering the function
          downloadurl.click();
      }
  }


          var wb = XLSX.utils.table_to_book(document.getElementById('tblProducts'), {sheet:"Sheet JS"});
          var wbout = XLSX.write(wb, {bookType:'xlsx', bookSST:true, type: 'binary'});
          function s2ab(s) {
                          var buf = new ArrayBuffer(s.length);
                          var view = new Uint8Array(buf);
                          for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
                          return buf;
          }
          $("#button-a").click(function(){
          saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), 'sales_quote.xlsx');
          });

  $(document).ready(function(){
      $("#btnExport").click(function() {
          let table = document.getElementsByTagName("tblProducts");
          TableToExcel.convert(table[0], { // html code may contain multiple tables so here we are refering to 1st table tag
             name: `export.xls`, // fileName you could use any name
             sheet: {
                name: 'Sheet 1' // sheetName
             }
          });
      });
  });

function createPDF() {
    var sTable = document.getElementById('tab').innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.
}
