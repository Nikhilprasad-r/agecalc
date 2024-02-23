function calculateDuration() {
  const userDateInput = document.getElementById("userDate").value;
  const userDate = new Date(userDateInput);
  const currentDate = new Date();

  const duration = currentDate.getTime() - userDate.getTime();

  const years = currentDate.getFullYear() - userDate.getFullYear();
  const months = years * 12 + (currentDate.getMonth() - userDate.getMonth());
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor(duration / (1000 * 60));
  const seconds = Math.floor(duration / 1000);
  const milliseconds = duration;

  const result = document.getElementById("result");
  result.innerHTML = `
  <p>Given Date is ${currentDate}
      <p>Years: ${years}</p>
      <p>Months: ${months}</p>
      <p>Days: ${days}</p>
      <p>Hours: ${hours}</p>
      <p>Minutes: ${minutes}</p>
      <p>Seconds: ${seconds}</p>
      <p>Milliseconds: ${milliseconds}</p>
  `;
}
