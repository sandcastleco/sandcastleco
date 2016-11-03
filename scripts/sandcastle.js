window.sandcastle = window.sandcastle || {};

sandcastle.init = function() {
  sandcastle.sayHello();
  if (window.innerWidth >= 992) {
    sandcastle.projectMenu();
  }
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
  $("#about-tooltip").hover(function() {
    $('#about-tooltip').tooltip('show')
  })
};

sandcastle.sayHello = function() {
  console.log("We build sandcastles");
};

sandcastle.cache = {
  header: $("header"),
  projects: $(".project"),
  projectDescriptions: $(".project-description"),
  projectButtons: $(".project-button"),
  activeDescription: $("#active-description"),
  currentProject: null
};

sandcastle.projectMenu = function() {

  // function drawStartButton() {
  //   var startButtonString = "<span class='fa fa-plus'></span>";
  //   $("#start-button").html(startButtonString);
  // }

  this.cache.projectDescriptions.hide();

  this.cache.projectButtons.click(function(e) {
    e.preventDefault();

    var clickedProject = $(this);
    var thisProject = {
      element: clickedProject,
      name: clickedProject.data("name"),
      description: clickedProject.data("description"),
      link: clickedProject.data("link"),
      category: clickedProject.data("category")
    };

    function setProject(project) {
      sandcastle.cache.currentProject = project.name;
      sandcastle.cache.activeDescription.text(project.description);
      // This is a ridiculous way to insert these. Must be a better way. Probably YAML data in the projects file.
      if (sandcastle.cache.currentProject == "Creative Portfolios") {
        sandcastle.cache.activeDescription.append('<br><a href="http://andrewnapier.com" target="_blank" style="margin-right: 15px;" class="btn btn-' + project.category + ' active">Andrew Napier</a>');
        sandcastle.cache.activeDescription.append('<a href="http://katboogaard.com" target="_blank" class="btn btn-' + project.category + ' active">Kat Boogaard</a>');
      } else {
        sandcastle.cache.activeDescription.append('<br><a href="' + project.link + '" target="_blank" class="btn btn-' + project.category + ' active">View project</a>');
      }

    }

    function clearProject() {
      sandcastle.cache.currentProject = null;
      sandcastle.cache.activeDescription.text("");
    }

    if (sandcastle.cache.currentProject && sandcastle.cache.currentProject !== thisProject.name) {
      var previousProject = $("[data-name='" + sandcastle.cache.currentProject + "']");
      previousProject.toggleClass("active");
      setProject(thisProject);
    } else if (sandcastle.cache.currentProject && sandcastle.cache.currentProject == thisProject.name) {
      clearProject();
    } else {
      setProject(thisProject);
    }

    thisProject.element.toggleClass("active");

  });
  // this.cache.header.hide();
  // this.cache.projects.hide();
  // drawStartButton();
};

$(document).ready(sandcastle.init);
