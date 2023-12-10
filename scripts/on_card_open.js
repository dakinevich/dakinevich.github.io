document.addEventListener('DOMContentLoaded', function() {
    var url = new URL(window.location);
    var c = url.searchParams.get("cardId");
    //alert(c)
}, false);
function exit_apparat(e){
    history.back()
}
