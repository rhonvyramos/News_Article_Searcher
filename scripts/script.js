let display_search = document.getElementById("display_search");
let display_journal = document.getElementById("display_journal");
let display_contacts = document.getElementById("display_contacts");

let tab_search = document.getElementById("tab_search");
let tab_journal = document.getElementById("tab_journal");
let tab_contacts = document.getElementById("tab_contacts");

display_search.addEventListener("click", function() {
    tab_search.style.display = "flex";
    tab_journal.style.display = "none";
    tab_contacts.style.display = "none";
});

display_journal.addEventListener("click", function() {
    tab_search.style.display = "none";
    tab_journal.style.display = "flex";
    tab_contacts.style.display = "none";

});

display_contacts.addEventListener("click", function() {
    tab_search.style.display = "none";
    tab_journal.style.display = "none";
    tab_contacts.style.display = "flex";

});

