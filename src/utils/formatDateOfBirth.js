export const formatDateOfBirth = (dateString) => {
  const allDate = dateString.split(" ");
  const thisDate = allDate[0].split("-");
  const newDate = [thisDate[2], thisDate[1], thisDate[0]].join("-");
  return newDate;
};
