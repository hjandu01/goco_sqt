

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
                     " readonly></td><td><input class='form-calc-hw form-qty-hw'></td><td><input class='form-line-hw' readonly '$'></td></tr>";

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
        var qty = parent.find(".form-qty").val();
        if (isNaN(qty))
        {
          alert("Please input numbers");
          return false;
        }
        parent.find(".form-line").val("$" + (qty * parseFloat(price)).toFixed(2));
        var total = 0;
        var tmp_x;
        $(".form-line").each(function(){
            tmp_x = $(this).val().replace("$", "");
            total += parseFloat(tmp_x||0);
        });

        $("#total").text("$" + total.toFixed(2));
    });
});

$(document).ready(function() {
    $("#tblNRC").on("keyup", ".form-calc-hw", function() {
        var parent = $(this).closest("tr");
        var price_tmp = parent.find(".form-cost-hw").val();
        var price = price_tmp.replace("C$", "");
        var qty = parent.find(".form-qty-hw").val();
        if (isNaN(qty))
        {
          alert("Please input numbers");
          return false;
        }
        parent.find(".form-line-hw").val("$" + (qty * parseFloat(price)).toFixed(2));
        var total = 0;
        var tmp_x;
        $(".form-line-hw").each(function(){
            tmp_x = $(this).val().replace("$", "");
            total += parseFloat($(this).val()||0);
        });
        $("#nrc_grdtot").text("$" + total.toFixed(2));
    });
});
