const allCategoriesRef = document.querySelectorAll('.item');
console.log("Number of categories:", allCategoriesRef.length);

allCategoriesRef.forEach(category => {
    const nameCategoryRef = category.querySelector('h2');
    console.log("Category:", nameCategoryRef.textContent);

    const allElementsInCategoryRef = category.querySelectorAll('li');
    console.log('Elements:', allElementsInCategoryRef.length);
})
