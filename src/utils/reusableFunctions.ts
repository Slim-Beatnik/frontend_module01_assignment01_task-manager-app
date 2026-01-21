export const splitDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return { year, month, day };
  };

export const isToday = (inputDate: Date) => {
    const today = new Date();
    return JSON.stringify(splitDate(today)) === JSON.stringify(splitDate(inputDate));
  };

export const isThisWeek = (inputDate: Date) => {
    const today = splitDate(new Date()).day;
    const inputDay = splitDate(inputDate).day;
    return (Number(inputDay) <= Number(today)) && (Number(inputDay) > Number(today) - 7);
  };

export const isThisMonth = (inputDate: Date) => {
    const thisMonth = splitDate(new Date()).month;
    return splitDate(inputDate).month === thisMonth;
  }

export const isThisYear = (inputDate: Date) => {
    const thisYear = splitDate(new Date()).year;
    return splitDate(inputDate).year === thisYear;
  }