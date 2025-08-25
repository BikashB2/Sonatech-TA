function exportExcel() {
  let csv = "Date,From,To,Purpose,Lunch,KM,Call ID,Advance\n";
  entries.forEach(e => {
    csv += `${e.date},${e.from},${e.to},${e.purpose},${e.lunch || 0},${e.km || 0},${e.callId},${e.advance || 0}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "TravelAllowance.csv";
  link.click();
}
