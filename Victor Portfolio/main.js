let menu =document.querySelector(`.menu-icon`);
console.log(menu);
let navbar =document.querySelector(`.navbar`)
console.log(navbar);
menu.addEventListener(`click`,function(){
    navbar.classList.toggle(`open-menu`)
    menu.classList.toggle(`move`)
})

//Reviews Swiper

const vic =document.querySelector(`.name`);
console.log(vic);

//Email js 
const validate = function(){
    let name =document.querySelector(`.name`);
    console.log(name);
    let email =document.querySelector(`.email`);
    let message =document.querySelector(`.message`);
    let sendBtn =document.querySelector(`.send-btn`);

     //Add event listener to the send button
    sendBtn.addEventListener(`click`,function(){
        if (name.value==`` || email.value==`` || message.value==``){
            emptyerror();
        }else{
            sendmail(name.value, email.value,message.value)
            success();
        }
    })
};
validate();
const sendmail = function(name,email,message){
    emailjs.send("service_1au1m5p","template_q93q9kv",{
        from_name:name,
        to_name:email,
        message:message
    });
}
//we copy this from sweetalert
const emptyerror =function(){
    swal({
        title: "Oh No!",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}
const success =function(){
    swal({
        title: "Email sent successfully!",
        text: "We try to reply in 24 hours!",
        icon: "success",
      });
};

//Header background Change on Scroll
let header =document.querySelector(`header`);
console.log(header);

window.addEventListener(`scroll`, function(){
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop =document.querySelector(`.scroll-top`);
console.log(scrollTop);

window.addEventListener(`scroll`, function(){
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});