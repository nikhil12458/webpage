function loadReviews() {
    const reviewGrid = document.getElementById("reviewGrid");
    reviewGrid.innerHTML = "";

    const reviews = [
        {
            text: "insert review text here",
            authorName: "insert author name",
            authorImg: "../svg/person-1.svg"
        },
        {
            text: "insert second review",
            authorName: "name2",
            authorImg: "../svg/person-2.svg"
        }
    ];

    reviews.forEach(review => {
        const card = document.createElement("div");
        card.className = "review-card";

        const content = document.createElement("div");
        content.className = "review-content";

        const textRow = document.createElement("div");
        textRow.className = "review-text-row";

        const quotIcon = document.createElement("img");
        quotIcon.className = "quote-icon";
        quotIcon.src = "../svg/upper-coma.svg";
        quotIcon.alt = "quote";

        const paragraph = document.createElement("p");
        paragraph.textContent = review.text;

        textRow.appendChild(quotIcon);
        textRow.appendChild(paragraph);

        const author = document.createElement("div");
        author.className = "review-author";

        const authorImg = document.createElement("img");
        authorImg.src = review.authorImg;
        authorImg.alt = review.authorName;

        const authorName = document.createElement("span");
        authorName.className = "author-name";
        authorName.textContent = review.authorName;

        author.appendChild(authorImg);
        author.appendChild(authorName);

        content.appendChild(textRow);
        content.appendChild(author);
        card.appendChild(content);
        reviewGrid.appendChild(card);
    });
}

window.onload = loadReviews;