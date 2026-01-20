let menu = function () {
    // Ejericio 2
    let div = document.createElement("div");
    div.className = "div-padre";

    let div1 = document.createElement("div");
    div1.className = "div-hija1";
    div.appendChild(div1);

    let div2 = document.createElement("div");
    div2.className = "div-hija2";
    div.appendChild(div2);

    root.appendChild(div);

    return div;
}

export {menu};