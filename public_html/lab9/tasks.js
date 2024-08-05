$(document).ready(function () {
  // Highlight required fields
  $('[required="required"]')
    .prev("label")
    .append("<span>*</span>")
    .children("span")
    .addClass("required");

  // Highlight even rows
  $("tbody tr:even").addClass("even");

  // Add new task button click
  $("#btnAddTask").click(function (evt) {
    evt.preventDefault();
    $("#taskCreation").removeClass("hidden");
  });

  // Row highlight on click
  $("tbody").on("click", "tr", function (evt) {
    $(evt.target)
      .closest("td")
      .siblings()
      .andSelf()
      .toggleClass("rowHighlight");
  });

  // Delete task
  $("#tblTasks tbody").on("click", ".deleteRow", function (evt) {
    evt.preventDefault();
    $(evt.target).closest("tr").remove();
    updateTaskCount();
  });

  // Edit task
  $("#tblTasks tbody").on("click", ".editRow", function (evt) {
    evt.preventDefault();
    var $row = $(this).closest("tr");
    var index = $row.index();
    var task = {
      task: $row.find("td:eq(0)").text(),
      requiredBy: $row.find("td:eq(1) time").attr("datetime"),
      category: $row.find("td:eq(2)").text(),
      editIndex: index,
    };
    $("#taskForm").fromObject(task);
    $("#taskCreation").removeClass("hidden");
  });

  // Mark task as complete
  $("#tblTasks tbody").on("click", ".completeRow", function (evt) {
    evt.preventDefault();
    $(this).closest("tr").find("td").addClass("completed");
  });

  // Save task
  $("#saveTask").click(function (evt) {
    evt.preventDefault();
    var task = $("#taskForm").toObject();
    var editIndex = $("#editIndex").val();
    if (editIndex !== "") {
      $("#tblTasks tbody tr")
        .eq(editIndex)
        .replaceWith($("#taskRowTemplate").tmpl(task));
    } else {
      $("#taskRowTemplate").tmpl(task).appendTo($("#tblTasks tbody"));
    }
    $("#taskCreation").addClass("hidden");
    $("#taskForm")[0].reset();
    $("#editIndex").val("");
    updateTaskCount();
  });

  // Clear form
  $("#clearTask").click(function (evt) {
    evt.preventDefault();
    $("#taskForm")[0].reset();
    $("#editIndex").val("");
  });

  // Print task to console
  $("#printTask").click(function (evt) {
    evt.preventDefault();
    var task = $("#taskForm").toObject();
    console.log(JSON.stringify(task, null, 2));
  });

  // Load example task
  $("#loadTask").click(function (evt) {
    evt.preventDefault();
    var demoTask = {
      task: "Refactor code",
      requiredBy: "2024-08-04",
      category: "Work",
    };
    $("#taskForm").fromObject(demoTask);
  });

  function updateTaskCount() {
    var count = $("#tblTasks tbody tr").length;
    $("#taskCount").text(count);
  }
});

(function ($) {
  $.fn.extend({
    toObject: function () {
      return this.serializeArray().reduce(function (result, field) {
        result[field.name] = field.value;
        return result;
      }, {});
    },
    fromObject: function (obj) {
      $.each(this.find(":input"), function (i, v) {
        var name = $(v).attr("name");
        if (obj[name]) {
          $(v).val(obj[name]);
        } else {
          $(v).val("");
        }
      });
    },
  });
})(jQuery);
