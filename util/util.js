

exports.getFormattedDateKST = function (){
    const date = new Date();

    // KST 로 시간 조정
    const offset = date.getTimezoneOffset() * 60000;
    // KST(UTC+9
    const kstDate = new Date(date.getTime() + offset + 9 *  3600000);

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