

exports.getFormattedDateKST = function (date){

    if(date instanceof Date) {
        return date;
    }

    const convertDate = new Date(date);
    // KST 로 시간 조정
    const offset = convertDate.getTimezoneOffset() * 60000;
    // KST(UTC+9
    const kstDate = new Date(convertDate.getTime() + offset + 9 *  3600000);

    const year = kstDate.getFullYear();
    // 월은 0부터 시작하므로 + 1
    const month = String(kstDate.getMonth() + 1).padStart(2, '0');
    const day = String(kstDate.getDate()).padStart(2, '0');


    return `${year}-${month}-${day}`;
};

exports.isValidDate = function (dateString){
    // YYYY-MM-DD 형식의 정규 표현식
    const regex = /^\d{4}-\d{2}-\d{2}$/;

    // 형식이 맞는지?
    if(!dateString || typeof dateString !== 'string' || !dateString.match(regex)) {
        return false;
    }
    // 형식이 맞더라도 실제로 유효한 날짜인지 확인
    const date = new Date(dateString);
    const timestamp = date.getTime();

    if(typeof timestamp !== 'number' || isNaN(timestamp)) {
        return false;
    }

    return dateString === date.toISOString().split('T')[0];
}

exports.isIncludeWorld = function (worldName) {
    const validWorldName = [
        '스카니아', '베라', '루나', '제니스', '크로아', '유니온', '엘리시움', '이노시스', '레드', '오로라', '아케인', '노바', '리부트', '리부트2', '버닝', '버닝2', '버닝3'
    ]

    return !(!worldName || typeof worldName !== 'string' || !validWorldName.includes(worldName));
}

exports.isIncludeClassName = function (className) {
    const jobList = [
        "초보자-전체 전직", "전사-전체 전직", "전사-검사", "전사-파이터", "전사-페이지", "전사-스피어맨",
        "전사-크루세이더", "전사-나이트", "전사-버서커", "전사-히어로", "전사-팔라딘", "전사-다크나이트",
        "마법사-전체 전직", "마법사-매지션", "마법사-위자드(불,독)", "마법사-위자드(썬,콜)", "마법사-클레릭",
        "마법사-메이지(불,독)", "마법사-메이지(썬,콜)", "마법사-프리스트", "마법사-아크메이지(불,독)",
        "마법사-아크메이지(썬,콜)", "마법사-비숍", "궁수-전체 전직", "궁수-아처", "궁수-헌터", "궁수-사수",
        "궁수-레인저", "궁수-저격수", "궁수-보우마스터", "궁수-신궁", "궁수-아처(패스파인더)", "궁수-에인션트아처",
        "궁수-체이서", "궁수-패스파인더", "도적-전체 전직", "도적-로그", "도적-어쌔신", "도적-시프", "도적-허밋",
        "도적-시프마스터", "도적-나이트로드", "도적-섀도어", "도적-세미듀어러", "도적-듀어러", "도적-듀얼마스터",
        "도적-슬래셔", "도적-듀얼블레이더", "해적-전체 전직", "해적-해적", "해적-인파이터", "해적-건슬링거",
        "해적-캐논슈터", "해적-버커니어", "해적-발키리", "해적-캐논블래스터", "해적-바이퍼", "해적-캡틴",
        "해적-캐논마스터", "기사단-전체 전직", "기사단-노블레스", "기사단-소울마스터", "기사단-플레임위자드",
        "기사단-윈드브레이커", "기사단-나이트워커", "기사단-스트라이커", "기사단-미하일", "아란-전체 전직",
        "에반-전체 전직", "레지스탕스-전체 전직", "레지스탕스-시티즌", "레지스탕스-배틀메이지",
        "레지스탕스-와일드헌터", "레지스탕스-메카닉", "레지스탕스-데몬슬레이어", "레지스탕스-데몬어벤져",
        "레지스탕스-제논", "레지스탕스-블래스터", "메르세데스-전체 전직", "팬텀-전체 전직", "루미너스-전체 전직",
        "카이저-전체 전직", "엔젤릭버스터-전체 전직", "초월자-전체 전직", "초월자-제로", "은월-전체 전직",
        "프렌즈 월드-전체 전직", "프렌즈 월드-키네시스", "카데나-전체 전직", "일리움-전체 전직", "아크-전체 전직",
        "호영-전체 전직", "아델-전체 전직", "카인-전체 전직", "라라-전체 전직", "칼리-전체 전직"
    ];

    const foundJob = jobList.find(job => job.split('-')[1] === className);

    return foundJob || null;
}