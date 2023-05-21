function insert_Row() {
    //Write your code here
	const tabel = document.getElementById("sampleTable");

  const row = tabel.insertRow(0);
  const tdata = row.insertCell(0);
  const tdata2 = row.insertCell(1);
  tdata.innerText = "New Cell1";
  tdata2.innerText="NewCell2";
  row.appendChild(tdata);
  row.appendChild(tdata2); 
 
}
