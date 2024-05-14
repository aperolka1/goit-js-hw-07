const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${elements}`);
})
