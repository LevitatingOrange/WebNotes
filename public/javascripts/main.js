
//changes the size of a note
var changeSize = function() {
    var thisEl = $(this).children(".fa-inverse");
    var parent = thisEl.parent().parent();
    if (parent.hasClass("small-note")) {
        thisEl.removeClass("fa-compress");
        thisEl.removeClass("fa-expand");
        thisEl.addClass("fa-expand");
        parent.removeClass("small-note");
        parent.addClass("medium-note");
    } else if (parent.hasClass("medium-note")) {
        thisEl.removeClass("fa-expand");
        thisEl.removeClass("fa-compress");
        thisEl.addClass("fa-compress");
        parent.removeClass("medium-note");
        parent.addClass("large-note");
    } else {
        thisEl.removeClass("fa-compress");
        thisEl.removeClass("fa-expand");
        thisEl.addClass("fa-expand");
        parent.removeClass("large-note");
        parent.addClass("small-note");     
    }
};

var revealNoteUI = function() {
    $(this).children(".note-nav").children(".i-size").fadeIn();
};

var hideNoteUI = function() {
    $(this).children(".note-nav").children(".i-size").fadeOut();
};


//performs a deep copy of a node already existing as an orignial
var addNote = function(type, id) {
    var newNote = $("#original").children("."+type+"-note").clone(true, true);
    newNote.attr("id", id);
    newNote.draggable({ containment: "parent" });
    $("#main").append(newNote);
};

var addTextToNote = function(id, text) {
    $("#"+id).append("<p>"+text+"</p>");
};

var removeNote = function(id) {
    $("#"+id).remove();
};


//all event handlers
$(".i-size").on("click", changeSize);
$(".note").on("mouseenter", revealNoteUI);
$(".note").on("mouseleave", hideNoteUI);


