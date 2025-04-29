window.onload = function () {
  // WhatsApp details
  const phoneNumber = "919812300721"; // Indian number
  const message = "Hello I am interested in your services";

  // Build the WhatsApp link
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Create the <a> and <img> inside the div
  document.getElementById("whatsapp-link").innerHTML = `
      <a href="${waLink}" target="_blank">
        <img src="../svg/whatsapp.svg" alt="whatsapp" >
      </a>
    `;


  const linkedinProfile = `https://www.linkedin.com/in/namantheeditor/`;

  document.getElementById("linkedin-link").innerHTML = `
    <a href="${linkedinProfile}" target="_blank">
      <img src="../svg/linkedin.svg" alt="linkedin">
    </a>
  `


  const xProfile = `https://x.com/NamanTheEditor?t=B3_3vxq1nKNXzeDUcW-dsA&s=09`;

  document.getElementById("x-link").innerHTML = `
    <a href="${xProfile}" target="_blank">
      <img src="../svg/x.svg" alt="X">
    </a>
  `


  const call = `919812300721`;

  document.getElementById("contact-link").innerHTML = `
    <a href="tel:${call}">
      <img src="../svg/contact.svg" alt="call">
    </a>
  `


  const instagramID = `https://www.instagram.com/namanthe_editor/`;

  document.getElementById("instagram-link").innerHTML = `
    <a href="${instagramID}" target="_blank">
      <img src="../svg/instagram.svg" alt="instagram">
    </a>
  `
};


function cursorEffect(){
  var skillsSectionContent = document.querySelector(".skills-section");
var cursor = document.querySelector("#cursor");

skillsSectionContent.addEventListener("mousemove", function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y
  })
  cursor.style.transform = 'translate(-50%, -50%)';
})

skillsSectionContent.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:1,
    opacity:1
  })
})

skillsSectionContent.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})
}

cursorEffect();