$(() => {
    $("#countryName").on("change", () => {

        $.ajax({
            method: "GET",
            url: `https://api.covid19api.com/country/${$("#countryName").val()}/status/confirmed`
        }).then((data) => {
            var c = Object.values(data);
            $("#info").empty();
            for (x of c) {
                console.log(x)
                var day = new Date(x.Date);
                $("#info").append(`<tr>
                 <td>
                 ${day.toLocaleDateString()}
                 </td>
                 <td class=text-center>
               ${x.Cases}
                 </td>
                 <td class=text-center>
                 ${x.Status}
                   </td>
                 </tr>`);
            }
        })
       
    });
    $("#symMen").on("click", () => {
       
        $("#home").addClass("d-none");
        $("#prevention").addClass("d-none");
        $("#symptom").removeClass("d-none");
    });
    $("#sHome").on("click", () => {
       
        $("#home").removeClass("d-none");
        $("#prevention").addClass("d-none");
        $("#symptom").addClass("d-none");
    });
    $("#sPre").on("click", () => {
       
        $("#home").addClass("d-none");
        $("#prevention").removeClass("d-none");
        $("#symptom").addClass("d-none");
    });
})