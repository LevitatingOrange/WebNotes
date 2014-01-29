


//performs a deep copy of a node already existing as an orignial
var addNote = function (type, id) {
    var newNote = $("#original").children(".note").clone(true, true);
    newNote.attr("id", id);
    newNote.addClass(type + "-note");
    newNote.resizable({
        minHeight: 80,
        minWidth: 200
    });
    newNote.draggable({
        stack: "div"
    });
    $("#main").append(newNote);
};

var setTextOfNote = function (note, text) {
    note.children("p").remove();
    note.append("<p>" + text + "</p>");
};
var setTextOfNoteWithID = function (id, text) {
    $("#" + id).children("p").remove();
    $("#" + id).append("<p>" + text + "</p>");
};

var removeNote = function () {
    $(this).parent().parent().remove();
};

var endEdit = function (note) {
    //textArea.css("height", +note.height() + 20);
    //textArea.css("width", +note.width() + 50);
    var textArea = note.children("textarea");
    var text = textArea.val();
    textArea.hide();
    setTextOfNote(note, text);
    var p = note.children("p");
    p.show();
    /*
                    if (p.height() > note.height()) {
            note.height(p.height() + 20);
            if (note.hight()>80) {
                note.resizable({
                    minHeight: note.height(),
                    minWidth: 200
                });
            } else {
                note.resizable({
                    minHeight: 80,
                    minWidth: 200
                });
            }
        */
};

var startEdit = function () {
    var note = $(this).parent();
    var textArea = note.children("textarea");
    textArea.val(note.children("p").text());
    note.children("p").hide();
    note.children("textarea").show();
};

var revealNoteUI = function () {
    $(this).children(".note-nav").fadeIn();
    // $(this).children("p").css("margin-right","25");
};

var hideNoteUI = function () {
    $(this).children(".note-nav").fadeOut();
  //  endEdit($(this));
};

//all event handlers
$(".note").on("mouseenter", revealNoteUI);
$(".note").on("mouseleave", hideNoteUI);
$(".i-remove").on("click", removeNote);
$(".note").on("dblclick", startEdit);
$("textarea").keyup(function (e) {
    if (e.keyCode == 13) {
        endEdit($(this).parent());
    }
});