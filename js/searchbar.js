let AllData; // 'let' 선언은 한 번만 필요합니다.

// 데이터 보여주기
const showData = (data) => {
    const DivContainerSection = document.getElementsByClassName("goods-container")[0];

    let DivString = ""; // 'let' 추가
    data.forEach((element) => {
        DivString += `<div class="goods"><a href="${element.name}.html">
                <img src="../image/${element.image}" alt="${element.name}" class="goods-img">
                <div class="name">${element.name}</div>
                <div class="hashtags">${element.hashtag}<br>${element.hashtag2}</div>
            </a></div>\n`; // 누적 및 줄바꿈 추가
    });
        
    DivContainerSection.innerHTML = DivString; // HTML 문자열을 container에 할당
};

// 데이터 저장하기
const setData = (data) => {
    AllData = data;
    showData(AllData);
};

// 데이터 가져오기
const getData = () => {
    const url = '../js/data.json';
    fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
};

getData(); // 데이터 가져오기 호출

// 데이터 검색하기
const searchData = (query) => {
    let searchData = AllData.filter((oneData) => oneData["name"].includes(query) || oneData["category"].includes(query));
    showData(searchData);
};
