export const splitDate = (dateStr: string) => {
  return dateStr.split('-').map(Number)
};

export const getDateStatus = (dateStr: string): [boolean, boolean, boolean, boolean] => {
  const [y, m, d] = splitDate(dateStr);
  const inputDate = new Date(y, m - 1, d);
  
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  
  // 1. isToday (String comparison is safest for YYYY-MM-DD)
  const isToday = dateStr === todayStr;

  // 2. isThisWeek (Sunday start)
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);
  const isThisWeek = inputDate >= startOfWeek && inputDate <= endOfWeek;

  // 3. isThisMonth
  const isThisMonth = y === now.getFullYear() && m === (now.getMonth() + 1);

  // 4. isThisYear
  const isThisYear = y === now.getFullYear();

  return [isToday, isThisWeek, isThisMonth, isThisYear];
};