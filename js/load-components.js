document.addEventListener("DOMContentLoaded", function() { // Load html script before js function runs
    function loadComponent(filePath, placeholderId, cssPath=null, jsPath=null) {
        fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        

        //Load CSS if provided
            if (cssPath){
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssPath;
                document.head.appendChild(link);
            }else{
                console.log(`No CSS file provided for ${placeholderId}`)
            }

        //Load JS if provided
            if (jsPath){
                const script = document.createElement("script");
                script.src = jsPath;
                document.body.appendChild(script);
            } else{
                console.log(`No JS file provided for ${placeholderId}`)
            }


        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
    }

    //Load reusable components on each page
    loadComponent("../../components/navbar/navbar.html","navbar-placeholder", "../../components/navbar/navbar.css")
    loadComponent("../../components/footer/footer.html","footer-placeholder", "../../components/footer/footer.css")
});




