const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let monthDict: Map<string, number> = new Map();

months.forEach((month, index) => {
  monthDict.set(month, index);
});

export const createDateFileName = (extension: string, date?: Date): string => {
  const fileDate = date ? date : new Date();

  const month = months[fileDate.getMonth()];
  const fileName = `${month}-${fileDate.getDate()}-${fileDate.getFullYear()}.${extension}`;

  return fileName;
};

export const createTimeFileName = (extension: string, date?: Date): string => {
  const fileDate = date ? date : new Date();

  const month = months[fileDate.getMonth()];
  const fileName = `${fileDate.getTime()}.${extension}`;

  return fileName;
};
