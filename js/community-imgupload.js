
document.addEventListener('DOMContentLoaded', () => {
    // DOM 요소 참조 가져오기
    const imageUploadInput = document.getElementById('img-upload'); // 이미지 업로드 입력
    const imagePreview = document.getElementById('img-preview'); // 이미지 미리보기
    const saveDiaryButton = document.getElementById('save'); // 일기 저장 버튼
    const diaryContainer = document.getElementById('post-container'); // 일기 컨테이너
    const diaryTitleText = document.getElementById('title-text'); // 일기 제목 입력
    const diaryText = document.getElementById('community-text'); // 일기 텍스트 입력
    const imguploadremove1 = document.getElementById('image-icon');
    const imguploadremove2 = document.getElementsByClassName('img-upload-remove')[0];
    console.log(imguploadremove1);
    // 이미지 업로드 입력 변경 이벤트
    imageUploadInput.addEventListener('change', (event) => {
        // 파일 가져오기w
        const file = event.target.files[0];
        if (file) {
            // 파일 리더 객체 생성
            const reader = new FileReader();
            // 파일 읽기 완료 이벤트
            reader.onload = (e) => {
                // 미리보기 이미지 설정
                imagePreview.src = e.target.result;
                // 미리보기 이미지 표시
                imagePreview.style.display = 'block';
                imguploadremove1.style.display = 'none';
                imguploadremove2.style.display = 'none';
            };
            // 파일 읽기 시작
            reader.readAsDataURL(file);
        }
    });

    // 일기 저장 버튼 클릭 이벤트
    saveDiaryButton.addEventListener('click', () => {
        // 입력 값 가져오기
        const date = diaryTitleText.value;
        const text = diaryText.value;
        const imageSrc = imagePreview.src;

        // 모든 항목이 입력되었는지 확인
        if (date && text && imageSrc) {
            // 일기 항목 객체 생성
            const diaryEntry = { date, text, imageSrc };
            // 일기 항목 저장
            saveDiaryEntry(diaryEntry);
            // 일기 항목 화면에 추가
            appendDiaryEntry(diaryEntry);
            // 입력 폼 초기화
            resetForm();
            // 저장 완료 메시지 표시
            alert('글이 저장되었습니다!');
        } else {
            // 입력 누락 경고 메시지 표시
            alert('모든 항목을 입력해주세요.');
        }
    });

    // 일기 항목 저장 함수
    function saveDiaryEntry(entry) {
        // 기존 일기 항목 가져오기
        let diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        // 새로운 일기 항목 추가
        diaryEntries.push(entry);
        // 로컬 스토리지에 저장
        localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
    }

    // 일기 항목 로드 함수
    function loadDiaryEntries() {
        // 저장된 일기 항목 가져오기
        const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        // 각 일기 항목 화면에 추가
        diaryEntries.forEach(entry => appendDiaryEntry(entry));
    }

    // 일기 항목 화면에 추가 함수
    function appendDiaryEntry(entry) {
        // 새로운 일기 항목 요소 생성
        const diaryItem = document.createElement('div');
        diaryItem.className = 'post';
        diaryItem.innerHTML = `
            <h6 class="title post-item">${entry.date}</h6>
                    <img src="${entry.imageSrc}" alt="" class="post-img post-item">
                    <p class="writing post-item">${entry.text}</p>
        `;
        // 일기 컨테이너에 추가
        diaryContainer.insertBefore(diaryItem, diaryContainer.lastChild);
    }

    // 입력 폼 초기화 함수
    function resetForm() {
        // 입력 값 초기화
        diaryTitleText.value = '';
        diaryText.value = '';
        imagePreview.src = '';
        // 미리보기 이미지 숨기기
        imagePreview.style.display = 'none';
    }

    // 페이지 로드 시 일기 항목 불러오기
    loadDiaryEntries();
    window.localStorage.clear();
});