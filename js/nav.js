fetch("nav.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("nav").outerHTML = data;

    var path = window.location.pathname;
    var page = path.split("/").pop();

    if (!page) {
        page = "index";
    }

    var dotIndex = page.lastIndexOf(".");
    var name;
    if (dotIndex !== -1) {
        name = page.substring(0, dotIndex);
    } else {
        name = page;
    }

    document.getElementById("3dLogo").src = "images/nav/3d/" + name + ".gif";
});
