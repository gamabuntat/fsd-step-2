document.getElementById("dropdown__button").addEventListener("click", expandDropdown);

function expandDropdown() {
    //let expandList = document.getElementById("dropdown__expand-list");
    document.getElementById("dropdown__expand-list").style.display = "block";
    //document.getElementById("dropdown__expand-list").style.height = "100px";
    document.getElementById("dropdown__content").style.borderColor = "#8F8FA0";
    document.getElementById("dropdown__content").style.borderBottomRightRadius = "0";
    document.getElementById("dropdown__content").style.borderBottomLeftRadius = "0";

    document.getElementById("dropdown__button").removeEventListener("click", expandDropdown);
    document.getElementById("dropdown__button").addEventListener("click", hideDropdown);

    function hideDropdown() {
        document.getElementById("dropdown__expand-list").style.display = "none";
        //document.getElementById("dropdown__expand-list").style.height = "0";
        document.getElementById("dropdown__content").style.borderColor = "#C7C7CF";
        document.getElementById("dropdown__content").style.borderBottomRightRadius = "4px";
        document.getElementById("dropdown__content").style.borderBottomLeftRadius = "4px";

        document.getElementById("dropdown__button").removeEventListener("click", hideDropdown);
        document.getElementById("dropdown__button").addEventListener("click", expandDropdown);
    }

}
