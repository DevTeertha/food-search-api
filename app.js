// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
//     .then(res => res.json())
//     .then(data => displayFood(data.categories))

// const displayFood = data => {
//     data.forEach(element => {
//         const container = document.getElementById('search-container');
//         const foodDiv = document.createElement('div');
//         foodDiv.className = 'food';
//         const foodInfo = `
//             <img src="${element.strCategoryThumb}">
//             <h1>${element.strCategory}</h1>
//             <button for='food-item' onclick="showDetails('${element.strCategory}')" >Details</button>`;

//         foodDiv.innerHTML = foodInfo;
//         container.appendChild(foodDiv);

//         const foodItem = document.getElementsByClassName('food');
//     });
// }

// const showDetails = details => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
// }







// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
// fetch(url)
//     .then(res => res.json())
//     .then(data => displayFood(data))
//     .catch(err => {
//         const error = document.createElement('h2');
//         error.className = 'error-msg';
//         error.innerText = 'No Item Found';
//         document.getElementById('search-container').appendChild(error);
//     });


document.getElementById('search-btn').addEventListener('click', function () {
    const searchInput = document.getElementById('search-box').value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data))
        .catch(err => {
            const error = document.createElement('h2');
            error.className = 'error-msg';
            error.innerText = 'No Item Found';
            document.getElementById('search-container').appendChild(error);
        });
});





const displayFood = data => {
    document.getElementById('search-container').innerText = "";
    data.meals.forEach(element => {
        const container = document.getElementById('search-container');
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food';
        const foodInfo = `
        <img onclick="details('${element.strMeal}')" src="${element.strMealThumb}">
        <h1 onclick="details('${element.strMeal}')">${element.strMeal}</h1>
        `;
        foodDiv.innerHTML = foodInfo;
        container.appendChild(foodDiv);
    });
}

const details = data => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`;
    fetch(url)
    .then(res=>res.json())
    .then(dataItem => showDetails(dataItem.meals))
}
const showDetails = details => {
    console.log(details);
    const container = document.getElementById('search-container');
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'details';
    const detailsInfo = `
    <img src="${details[0].strMealThumb}">
        <h4>ID : ${details[0].idMeal}</h4>
    `;
    detailsDiv.innerHTML = detailsInfo;
    container.innerHTML = "";
    container.appendChild(detailsDiv);

}