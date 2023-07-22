export const addMinutesToDate = (dateString:string, minutesToAdd:number)=>  {
    const [day, month, year] = dateString.split('-');
    const dateObject = new Date(`${year}-${month}-${day}`);
  
    dateObject.setMinutes(dateObject.getMinutes() + minutesToAdd);
  
    const newDay = String(dateObject.getDate()).padStart(2, '0');
    const newMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
    const newYear = dateObject.getFullYear();
  
    return `${newDay}-${newMonth}-${newYear}`;
  }