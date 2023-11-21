$(document).ready(function () {
    $("#getData").click(function () {
        $.ajax({
            type: "GET",
            url: "data.json",
            dataType: "json",
            success: function (data) {
                const tempData = data[0];
                $("#testname").text(tempData.name);
            },
            error: function () {
                console.error("發生錯誤");
            },
        });
    });
})