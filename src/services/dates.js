export const DAYS = [...Array(31).keys()].map((xd) => xd + 1);
export const MONTHS = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
];
export const YEARS = [...Array(2023 - 1905).keys()]
    .map((xd) => xd + 1905)
    .sort((a, b) => (a > b ? -1 : 1));

export const getNow = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const now = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;
    return now;
};
