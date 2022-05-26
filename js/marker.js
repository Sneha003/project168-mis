AFRAME.registerComponent("createmarkers", {
    init:async function(){
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found");
            this.handleMarkerFound();
        })

        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost");
            this.handleMarkerLost();
        })
    },

    handleMarkerFound:function(){
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="flex";
        var ordernow =document.getElementById( "order-button")
        var ordersummary=document.getElementById("order-summary-button")
        ordernow.addEventListener("click",()=>{
            swal({
                icon:"sucess",
                title:"thanks for order",
                timer:2000,
                buttons:false

            })


        })

        ordersummary.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:" order summary",
                
                text:"work in progress"

            })


        })




    },


    handleMarkerLost:function(){
        
        var buttonDiv=document.getElementById("button-div")
        buttonDiv.style.display="none";

    
        
    }




})