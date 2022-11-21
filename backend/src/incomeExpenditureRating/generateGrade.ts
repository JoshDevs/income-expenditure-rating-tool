export const generateGrade = (ratio: number): string => {
  switch (true) {
    case ratio < 10:
      return 'A';
    case ratio < 30:
      return 'B';
    case ratio < 51:
      return 'C';
    default:
      return 'D';
  }
};
