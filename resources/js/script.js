var btnPower = document.querySelector(".off"),
    imgPower = document.querySelector(".power");
btnPower.addEventListener("click", function () {
    var e = document.querySelector(".button"),
        i = document.getElementsByClassName("button")[0].id;
    "barOn" === i ? (e.setAttribute("id", "barOff"), imgPower.src = "resources/img/icons/set0/powerOn.svg") : (e.setAttribute("id", "barOn"), imgPower.src = "resources/img/icons/set0/power.svg")
}), $(function () {
    $("#draggable").draggable()
});

