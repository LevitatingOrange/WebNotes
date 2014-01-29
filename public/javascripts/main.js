
//changes the size of a note


var revealNoteUI = function() {
    $(this).children(".note-nav").fadeIn();
   // $(this).children("p").css("margin-right","25");
};

var hideNoteUI = function() {
    $(this).children(".note-nav").fadeOut();
  //  $(this).children("p").css("margin-right","0");
        endEdit($(this).children(".note-nav").children(".i-edit"),$(this), $(this).children("textarea"));        
};


//performs a deep copy of a node already existing as an orignial
var addNote = function(type, id) {
    var newNote = $("#original").children(".note").clone(true, true);
    newNote.attr("id", id);
    newNote.addClass(type+"-note");
    newNote.resizable({
      minHeight: 80,
      minWidth: 200
    });
    newNote.draggable({ stack: "div" });
    $("#main").append(newNote);
};

var setTextOfNote = function(note, text) {
    note.children("p").remove();
    note.append("<p>"+text+"</p>");
};
var setTextOfNoteWithID = function(id, text) {
    $("#"+id).children("p").remove();
    $("#"+id).append("<p>"+text+"</p>");
};

var removeNote = function() {
    $(this).parent().parent().remove();
};

var endEdit = function(thisEl,note,textArea) {
            //textArea.css("height", +note.height() + 20);
        //textArea.css("width", +note.width() + 50);
        var text = textArea.val();
        textArea.hide();
        setTextOfNote(note, text);
        var p = note.children("p");
        p.show();
        thisEl.removeClass("fa-inverse");
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

var startEdit = function(thisEl,note, textArea) {
    if (!($(this).hasClass("fa-inverse"))) {
        thisEl.addClass("fa-inverse");
        textArea.val(note.children("p").text());
        note.children("p").hide();
        note.children("textarea").show();
    }
};

var toggleEdit = function() {
    var note = $(this).parent().parent();
    var textArea = note.children("textarea");
    if ($(this).hasClass("fa-inverse")) {
        endEdit($(this),note,textArea);
    } else {
        startEdit($(this), note, textArea);        
    }
};

//all event handlers
$(".note").on("mouseenter", revealNoteUI);
$(".note").on("mouseleave", hideNoteUI);
$(".i-remove").on("click", removeNote);
$(".note").("p").on("dblclick", startEdit);
$(".note").("p").on("enter", endEdit);
$("textarea").keyup(function(e) {
	if(e.keyCode == 13) {
        endEdit
	}
});

