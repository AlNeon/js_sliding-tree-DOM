var e=document.querySelector(".tree");e.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");t.appendChild(e.firstChild),e.prepend(t)}),e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.nextElementSibling;t&&"UL"===t.tagName&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.cf3e6ff9.js.map
