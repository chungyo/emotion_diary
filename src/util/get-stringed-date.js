const getStringedDate = (targetDate) => {
    //날짜 객체를 받아서 "YYYY-MM-DD" 형식의 문자열로 반환
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    if(month < 10) month = '0' + month;
    if(date < 10) date = '0' + date;

    return `${year}-${month}-${date}`;
}

export default getStringedDate;