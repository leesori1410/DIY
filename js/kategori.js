let allData;

// 데이터 보여주기
const showData = (data) => {
    const DivContainerSection = document.getElementsByClassName("goods-container")[0];
    const category = document.getElementsByClassName("category")[0];
    const categoryName = category.innerText;
    // console.log(categoryName);

    let DivString = ""; // 'let' 추가
    data.forEach((element) => {
        if(element["category"]===categoryName){
            DivString += `<div class="goods">
                    <img src="../image/${element.image}" alt="${element.name}" class="goods-img">
                    <div class="name">${element.name}</div>
                    <div class="hashtags">${element.hashtag}<br>${element.hashtag2}</div>
                </div>\n`; // 누적 및 줄바꿈 추가
        }
    });
        
    DivContainerSection.innerHTML = DivString; // HTML 문자열을 container에 할당
};

// 데이터 저장하기
const setData = (data) => {
    allData = data;
    showData(allData);
};

// 데이터 가져오기
const getData = () => {
    const url = '../js/data.json';
    fetch(url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log(error));
};


getData();
