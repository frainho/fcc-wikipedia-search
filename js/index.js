$(document).ready(function() {
  $("#triggerSearch").click(function() {
    $("#data").empty();
    var a = $("#searchItem").val();
    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "opensearch",
        search: a,
        format: "json"
      },
      dataType: "jsonp",
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        $(result[1]).each(function(i, value) {
          $("#data").append(
            "<p class='articleStyling'><b>" +
            value +
            "</b><br>" +
            result[2][i] +
            "<br><a href='" +
            result[3][i] +
            "'> Go to article</a></p>"
          );
        });
      }
    });
  });
  $("#triggerRandom").click(function() {
    $.ajax({
      type: "GET",
      url: "https://en.wikipedia.org/w/api.php",
      data: {
        action: "query",
        generator: "random",
        grnnamespace: "0",
        prop: "extracts",
        exchars: "500",
        indexpageids: "",
        format: "json"
      },
      dataType: "jsonp",
      contentType: "application/json; charset=utf-8",
      success: function(result) {
        var article = window.open(
          "https://en.wikipedia.org/?curid=" + result.query.pageids[0]
        );
      }
    });
  });
});
