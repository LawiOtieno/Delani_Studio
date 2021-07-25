// $(document).ready(function(){
//     $(".oneDesign").click(function(){
//         $("#wwd1").toggle();
//         $("#oneDes").toggle();
//     });
//     $(".twoDevelopment").click(function(){
//         $("#wwd2").toggle();
//         $("#twoDev").toggle();
//     });
//     $(".threeProductMG").click(function(){
//         $("#wwd3").toggle();
//         $("#threeProd").toggle();
//     });
// });






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