function newElement() {
    var txt = $("#myInput").val();
        if (txt.length>0){
        var toBeDone = $("#toBeDone");
        var str = "<li onclick='MoveToDone(this)'>" + txt + "</li>";
        console.log(str);
        toBeDone.append(str);
        $("#myInput").val("");
    }else{
        bootbox.alert("وش تبي!!!", function() {
            console.log("Alert Callback");
        });
    }

}
function MoveToDone(str){
    var done = $("#done");
    done.append(str);
}
function MoveTotoBeDone(str){
    var toBeDone = $("#toBeDone");
    toBeDone.append(str);
}
function changeColor() {
    var header = $("#header").val();
    var body = $("#body").val();
    var color ="radial-gradient(circle,black ,"+header+")";
    $("#myDIV").css("background-image",color);
    $("#bodyContainer").css("background-color",body);

}
