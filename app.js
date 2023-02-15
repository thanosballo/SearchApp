"use strict";
class Article {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
        /* this.id=id;
        this.title=title;
        this.content=content; */
    }
    search(word) {
        return this.content.search(word);
    }
}
let articleArray = [];
function clear() {
    articleBox.innerHTML = "";
}
let articleBox = document.createElement("article");
const articleOne = new Article(1, "Freezer forming part of Banksy's new work removed hours after artist confirms mural", "thanos Michalis British street artist Banksy confirmed a new mural showing a 1950s housewife with a swollen eye apparently pushing a man into an abandoned chest freezer was his work early on Valentine's Day, just hours before the appliance was removed.");
const articleTwo = new Article(2, "Judge orders Sam Bankman-Fried back to court", "Thanos Bankman-Frieds lawyers said in a letter to the judge that Bankman-Fried used the VPN to access an NFL Game Pass international subscription that he used when he lived in the Bahamas to watch NFL playoff and Super Bowl games while out on bail in the US.");
const articleThree = new Article(3, "Yahoo to lay off 20% of its workforce", "thanos A Yahoo spokesperson told CNN that the companys legacy ad tech division, Yahoo for Business, will be overhauled and transformed into a new division called Yahoo Advertising. As part of that change, Yahoo plans to cut nearly 50% of the division this year, “including nearly 1,000 employees this week,” the spokesperson said.");
articleArray.push(articleOne, articleTwo, articleThree);
const card = document.querySelector(".card");
const input = document.querySelector("input");
input.addEventListener("keyup", () => {
    clear();
    if (input.value === "") {
        clear();
    }
    else {
        console.log(input.value);
        let exp = new RegExp(`${input.value}`, "i");
        articleArray.forEach((article) => {
            if (article.search(exp) == -1) {
                console.log("not found");
            }
            else {
                console.log("found", article);
                let title = document.createElement("p");
                let content = document.createElement("p");
                title.textContent = article.title;
                content.textContent = article.content;
                articleBox.appendChild(title);
                articleBox.appendChild(content);
                card === null || card === void 0 ? void 0 : card.appendChild(articleBox);
            }
        });
    }
});
