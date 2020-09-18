let dropdownContent = document.getElementById("dropdown__content");
let dropdownButton = document.getElementById("dropdown__button");
let dropdownExpandList = document.getElementById("dropdown__expand-list");
dropdownButton.addEventListener("click", expandDropdown);

function expandDropdown() {
    dropdownExpandList.style.height = "159px";
    dropdownExpandList.style.border= "1px solid #8F8FA0";
   // dropdownExpandList.style.borderBottom = "1px solid #8F8FA0";
   // dropdownExpandList.style.borderLeft = "1px solid #8F8FA0";
   // dropdownExpandList.style.borderRight = "1px solid #8F8FA0";

    dropdownContent.style.borderColor = "#8F8FA0";
    dropdownContent.style.borderBottomRightRadius = "0";
    dropdownContent.style.borderBottomLeftRadius = "0";
    dropdownContent.style.borderBottom = "none"

    dropdownButton.removeEventListener("click", expandDropdown);
    let collection = document.querySelectorAll(".dropdown__button");

    for ( let item of collection ) {
        item.addEventListener("click", hideDropdown);
    }

    function hideDropdown(params) {
        dropdownExpandList.style.height = "0px";
        dropdownExpandList.style.border = "1px solid #C7C7CF";
        dropdownExpandList.style.borderBottom = "none";
        dropdownExpandList.style.borderTop = "none";
        //dropdownExpandList.style.borderRight = "1px solid #C7C7CF";
        

        function b() {
            dropdownContent.style.border = "1px solid #C7C7CF";
            dropdownContent.style.borderRadius = "4px";
        }

        setTimeout(b, 100);

        console.log(params);

        dropdownButton.removeEventListener("click", hideDropdown);
        //document.querySelector(".text-field").removeEventListener("click", hideDropdown);
        dropdownButton.addEventListener("click", expandDropdown);
    }

}
