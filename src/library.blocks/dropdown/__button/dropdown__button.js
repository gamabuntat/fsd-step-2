document.getElementById("dropdown__button").addEventListener("click", expandDropdown);

function expandDropdown() {
    document.getElementById("dropdown__expand-list").style.height = "159px";
    document.getElementById("dropdown__expand-list").style.borderBottom = "1px solid #8F8FA0";
    document.getElementById("dropdown__expand-list").style.borderLeft = "1px solid #8F8FA0";
    document.getElementById("dropdown__expand-list").style.borderRight = "1px solid #8F8FA0";
    document.getElementById("dropdown__content").style.borderColor = "#8F8FA0";
    document.getElementById("dropdown__content").style.borderBottomRightRadius = "0";
    document.getElementById("dropdown__content").style.borderBottomLeftRadius = "0";

    document.getElementById("dropdown__button").removeEventListener("click", expandDropdown);
    document.getElementById("dropdown__button").addEventListener("click", hideDropdown);

    function hideDropdown() {
        document.getElementById("dropdown__expand-list").style.height = "0px";
        document.getElementById("dropdown__expand-list").style.borderBottom = "none";
        document.getElementById("dropdown__expand-list").style.borderLeft = "1px solid #C7C7CF";
        document.getElementById("dropdown__expand-list").style.borderRight = "1px solid #C7C7CF";
        document.getElementById("dropdown__content").style.borderColor = "#C7C7CF";
        function b() {
            document.getElementById("dropdown__content").style.borderBottomRightRadius = "4px";
            document.getElementById("dropdown__content").style.borderBottomLeftRadius = "4px";
        }
        setTimeout(b, 200);

        document.getElementById("dropdown__button").removeEventListener("click", hideDropdown);
        document.getElementById("dropdown__button").addEventListener("click", expandDropdown);
    }

}
