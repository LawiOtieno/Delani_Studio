// WHAT WE DO
$(document).ready(function(){
    $(".oneDesign").click(function(){
        $("#wwd1").toggle();
        $("#oneDes").toggle();
    });
    $(".twoDevelopment").click(function(){
        $("#wwd2").toggle();
        $("#twoDev").toggle();
    });
    $(".threeProductMG").click(function(){
        $("#wwd3").toggle();
        $("#threeProd").toggle();
    });
});



// PORTFOLIO
$(document).ready(function(){
    $(".portFolio1").hover( () => {
        $(".portf1").show({opacity: 1}, 5);
    },
        () => {
        $(".portf1").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio2").hover( () => {
        $(".portf2").show({opacity: 1}, 5);
    },
        () => {
        $(".portf2").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio3").hover( () => {
        $(".portf3").show({opacity: 1}, 5);
    },
        () => {
        $(".portf3").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio4").hover( () => {
        $(".portf4").show(700);
    },
        () => {
        $(".portf4").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio5").hover( () => {
        $(".portf5").show({opacity: 1}, 5);
    },
        () => {
        $(".portf5").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio6").hover( () => {
        $(".portf6").show({opacity: 1}, 5);
    },
        () => {
        $(".portf6").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio7").hover( () => {
        $(".portf7").show({opacity: 1}, 5);
    },
        () => {
        $(".portf7").hide({opacity: 1}, 5);
        }
    )
    $(".portFolio8").hover( () => {
        $(".portf8").show({opacity: 1}, 5);
    },
        () => {
        $(".portf8").hide({opacity: 1}, 5);
        }
    )
})


// CONTACT FORM
function contactForm(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var message=document.getElementById('message').value;

    if (name !== "" && email !== "" && message !== ""){
        alert(name+ ' we have received your message. Thank you for reaching out to us.');
    } else if(name !== "" || email !== "" || message !== ""){
        alert('Fill everything, please.')
    }
};