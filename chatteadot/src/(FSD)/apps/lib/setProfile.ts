const yearsValues = [];
const regionValues = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
const genderValues = ["남자", "여자"];

const yearsItemList = [];
const regionItemList = [
    { label: "서울", value: "seoul" },
    { label: "부산", value: "busan" },
    { label: "대구", value: "daegu" },
    { label: "인천", value: "incheon" },
    { label: "광주", value: "gwangju" },
    { label: "대전", value: "daejeon" },
    { label: "울산", value: "ulsan" },
    { label: "세종", value: "sejong" },
    { label: "경기", value: "gyeonggi" },
    { label: "강원", value: "gangwon" },
    { label: "충북", value: "chungbuk" },
    { label: "충남", value: "chungnam" },
    { label: "전북", value: "jeonbuk" },
    { label: "전남", value: "jeonnam" },
    { label: "경북", value: "gyeongbuk" },
    { label: "경남", value: "gyeongnam" },
    { label: "제주", value: "jeju" }
];

const genderItemList = [
    { label: "남자", value: "man" },
    { label: "여자", value: "woman" },
];

const currentYear = new Date().getFullYear();

for (let year = currentYear; year >= 1900; year--) {
    yearsValues.push(`${year}`);
    yearsItemList.push({ label: `${year}`, value: `${year}` });
};

const yearsTuple = [...yearsValues] as [string, ...string[]];
const regionTuple = [...regionValues] as [string, ...string[]];
const genderTuple = [...genderValues] as [string, ...string[]];


export const profileSelectBox = {
    yearsTuple,
    regionTuple,
    genderTuple,
    yearsItemList,
    regionItemList,
    genderItemList,
};