//*************** DEVUELVO AÑO ACTUAL *********************
const getYear = () => {
  const dateFile = new Date();
  return dateFile.getFullYear().toString();
};

//*************** DEVUELVO MES ACTUAL *********************
const getMonth = () => {
  const dateFile = new Date();
  const month =
    dateFile.getMonth() + 1 < 10
      ? "0" + (dateFile.getMonth() + 1).toString()
      : (dateFile.getMonth() + 1).toString();
  return month;
};

//*************** DEVUELVO DIA ACTUAL *********************
const getDay = () => {
  const dateFile = new Date();
  const day =
    dateFile.getDate() < 10
      ? "0" + dateFile.getDate().toString()
      : dateFile.getDate().toString();
  return day;
};

//*************** DEVUELVO HORA ACTUAL *********************
const getHourNow = () => {
  const dayNow = new Date();
  return dayNow.getHours() + ":" + dayNow.getMinutes() + ":" + dayNow.getSeconds();
};

//*************** DEVUELVO FECHA ACTUAL *********************
const getDateNow = () => {
  const dayNow = new Date();
  return (
    ("0" + dayNow.getDate()).slice(-2) +
    "." +
    ("0" + (dayNow.getMonth() + 1)).slice(-2) +
    "." +
    dayNow.getFullYear()
  );
};

//*************** SETEO MENSAJE *********************
const setMessage = (status, msg) => {
  let objMsg = {
    type: (status == 'success') ? 'S' : 'E',
    title: "Message Sytem: " + status,
    descriptionTime: getDateNow() + " " + getHourNow(),
    description: msg,
    showTime: 3000
  };
  return objMsg;
};

export {
  getMonth,
  getDay,
  getYear,
  getHourNow,
  getDateNow,
  setMessage
}

