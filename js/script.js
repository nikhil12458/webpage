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


function cursorEffect() {
  var skillsSectionContent = document.querySelector(".skills-section");
  var cursor = document.querySelector("#cursor");

  skillsSectionContent.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y
    })
    cursor.style.transform = 'translate(-50%, -50%)';
  })

  skillsSectionContent.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    })
  })

  skillsSectionContent.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    })
  })
}

function scrollToSkillsPage() {
  var skillsBtn = document.getElementById("skillsBtn");
  var skillsSection = document.getElementById("skills");

  skillsBtn.addEventListener("click", () => {
    skillsSection.scrollIntoView({ behavior: "smooth" });
  });
}

scrollToSkillsPage();

function scrollToHomePage() {
  var homeBtn = document.getElementById("homeBtn");
  var homeSection = document.getElementById("home");

  homeBtn.addEventListener("click", () => {
    homeSection.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToPortfolioPage() {
  var portfolioBtn = document.getElementById("portfolioBtn");
  var portfolioSection = document.getElementById("portfolioPage");

  portfolioBtn.addEventListener("click", () => {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToHomeLogo() {
  var logoBtn = document.getElementById("profile-logo");
  var homeSection = document.getElementById("home");
  logoBtn.addEventListener("click", () => {
    homeSection.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToReviewPage() {
  var reviewSection = document.getElementById("scrollToReview");
  var reviewBtn = document.getElementById("reviewBtn");
  reviewBtn.addEventListener("click", () => {
    reviewSection.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToAbout(){
  var aboutBtn = document.getElementById("aboutBtn");
  var aboutPage = document.getElementById("aboutPage");

  aboutBtn.addEventListener("click", () => {
    aboutPage.scrollIntoView({ behavior: "smooth" });
  });
}

function scrollToContact(){
  var contactBtn = document.getElementById("contactBtn");
  var contactPage = document.getElementById("contactPage");

  contactBtn.addEventListener("click", () => {
    contactPage.scrollIntoView({ behavior: "smooth" });
  });
}

function loadImages(type) {
  const portfolioGrid = document.getElementById("portfolioGrid");
  portfolioGrid.innerHTML = ""; // Clear existing cards

  // Predefined image sets (customize as needed)
  const logos = [
    { src: '../img/logo-png/logo-1.png', title: 'Esoft' },
    { src: '../img/logo-png/logo-2.png', title: 'Mitron' },
    { src: '../img/logo-png/logo-3.png', title: 'Aloja' },
    { src: '../img/logo-png/logo-4.png', title: 'Kumar' },
    { src: '../img/logo-png/logo-5.png', title: 'Super' },
    { src: '../img/logo-png/logo-6.png', title: 'Insora' },
    { src: '../img/logo-png/logo-7.png', title: 'Nurela' }
  ];

  const thumbnails = [
    { src: 'img/thumbnails/thumb1.jpg', title: 'Thumbnail 1' },
    { src: 'img/thumbnails/thumb2.jpg', title: 'Thumbnail 2' },
    { src: 'img/thumbnails/thumb3.jpg', title: 'Thumbnail 3' }
  ];

  const videos = [
    { src: 'img/videos/video1-thumbnail.jpg', title: 'Video 1' },
    { src: 'img/videos/video2-thumbnail.jpg', title: 'Video 2' }
  ];

  const graphics = [
    { src: 'img/graphics/design1.jpg', title: 'Design 1' },
    { src: 'img/graphics/design2.jpg', title: 'Design 2' }
  ];

  // Select appropriate list
  let items = [];
  switch (type) {
    case 'logos': items = logos; break;
    case 'thumbnails': items = thumbnails; break;
    case 'videos': items = videos; break;
    case 'graphics': items = graphics; break;
    default: items = []; break;
  }

  // Create and inject cards
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("portfolio-card");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;

    const title = document.createElement("div");
    title.className = "portfolio-title";
    title.innerText = item.title;

    card.appendChild(img);
    card.appendChild(title);
    portfolioGrid.appendChild(card);
  });
}

// Optionally load logos by default
// window.onload = () => loadImages('logos');


document.querySelectorAll('.portfolio-nav li').forEach((item) => {
  item.addEventListener('click', function () {
    // Remove 'active' class from all nav items
    document.querySelectorAll('.portfolio-nav li').forEach((li) => li.classList.remove('active'));

    // Add 'active' to the clicked item
    this.classList.add('active');

    // Load corresponding images  // dosen't required at this time
    // const type = this.textContent.toLowerCase().replace(/\s+/g, '');
    // loadImages(type);
  });
});

function loadReviews() {
  const reviewGrid = document.getElementById("reviewGrid");
  reviewGrid.innerHTML = ""; // Clear previous cards

  const reviews = [
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    },
    {
      text: "Absolutely fantastic work! The quality of the video editing exceeded my expectations.",
      authorName: "Alice Smith",
      authorImg: "../svg/person-1.svg"
    }
  ];

  reviews.forEach(review => {
    // Outer card
    const card = document.createElement("div");
    card.className = "review-card";

    // Card content container
    const content = document.createElement("div");
    content.className = "review-content";

    // Top row: quote icon + text
    const textRow = document.createElement("div");
    textRow.className = "review-text-row";

    const quoteIcon = document.createElement("img");
    quoteIcon.className = "quote-icon";
    quoteIcon.src = "../svg/upper-coma.svg";
    quoteIcon.alt = "quote";

    const paragraph = document.createElement("p");
    paragraph.textContent = review.text;

    textRow.appendChild(quoteIcon);
    textRow.appendChild(paragraph);

    // Bottom row: author image + name
    const author = document.createElement("div");
    author.className = "review-author";

    const authorImg = document.createElement("img");
    authorImg.className = "author-img";
    authorImg.src = review.authorImg;
    authorImg.alt = review.authorName;

    const authorName = document.createElement("span");
    authorName.className = "author-name";
    authorName.textContent = review.authorName;

    author.appendChild(authorImg);
    author.appendChild(authorName);

    // Combine content
    content.appendChild(textRow);
    content.appendChild(author);
    card.appendChild(content);
    reviewGrid.appendChild(card);
  });
}

// Optional: Call it on page load
// window.onload = loadReviews;

loadImages('logos');
loadReviews();
scrollToReviewPage();
cursorEffect();
scrollToHomePage();
scrollToHomeLogo();
scrollToAbout();
scrollToPortfolioPage();
scrollToContact();