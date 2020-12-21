var collapsed = true;


function showMenu() {
    if(collapsed == true) {  
        var menuItems = document.querySelectorAll(".menu-collapsed");
        var menuExpand = Array.prototype.slice.call(menuItems);
        let reverseShow = menuExpand.splice(3,2).reverse();
        menuExpand = menuExpand.concat(reverseShow);
        let x;
        function displayContent(x) {
           setTimeout(() => menuExpand[x].classList.add("display-content"), 100*x);
        }
        for (x = 0; x < menuExpand.length; x++) {
            displayContent(x);
        }
        let changeIcon = document.getElementById("menuBtn").className="fas fa-times fa-2x";
        collapsed = false;
    }
    else {
        var menuItems = document.querySelectorAll(".menu-collapsed");
        var menuCollapse = Array.prototype.slice.call(menuItems);
        let reverseShow = menuCollapse.splice(3,2).reverse();
        menuCollapse = menuCollapse.concat(reverseShow);
        menuCollapse = menuCollapse.reverse();
        let x;
        function hideContent(x) {
            setTimeout(() => menuCollapse[x].classList.remove("display-content"), 100*x);
         }
        for (x = 0; x < menuCollapse.length; x++) {
            hideContent(x);
        }
        changeIcon = document.getElementById("menuBtn").className="fas fa-bars fa-2x";
        collapsed = true;
        }
    }

