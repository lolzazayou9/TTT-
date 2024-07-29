import jsPDF from "jspdf";
import { Get_font_th } from "./pdf_font";

function Examplereport(params) {
  const doc = new jsPDF("p", "mm", "a4");
  doc.addFileToVFS("THSarabunNew.ttf", Get_font_th());
  doc.addFont("THSarabunNew.ttf", "THSarabunNew", "bold");
  doc.setFont("THSarabunNew", 'bold');

  function drawHeader(hpang) {
    doc.setFillColor(200, 220, 255);
    doc.rect(10, hpang, 190, 10, 'F');
    
    doc.setTextColor(0, 0, 0);
    doc.rect(10, hpang, 190*0.1, 10);
    doc.text(10+((190*0.1)/2), hpang+(10/2), 'No', 'center');
    doc.rect(10+(190*0.1), hpang, 190*0.15, 10);
    doc.text(10+(190*0.1)+((190*0.15)/2), hpang+(10/2), 'customer', 'center');
    doc.rect(10+(190*0.25), hpang, 190*0.15, 10);
    doc.text(10+(190*0.25)+((190*0.15)/2), hpang+(10/2), 'product', 'center');
    doc.rect(10+(190*0.4), hpang, 190*0.15, 10);
    doc.text(10+(190*0.4)+((190*0.15)/2), hpang+(10/2), 'item', 'center');
    doc.rect(10+(190*0.55), hpang, 190*0.15, 10);
    doc.text(10+(190*0.55)+((190*0.15)/2), hpang+(10/2), 'price', 'center');
    doc.rect(10+(190*0.7), hpang, 190*0.3, 10);
    doc.text(10+(190*0.7)+((190*0.3)/2), hpang+(10/2), 'sum', 'center');
  }

  let hpang = 10;
  drawHeader(hpang);
  hpang += 10;

  let totalSum = 0;
  const uniqueCustomers = new Set();

  for(let index = 0 ; index < params.length ; index++){
    const element = params[index];
    const sum = element.price * element.item;
    totalSum += sum;
    uniqueCustomers.add(element.customer);

    if(hpang > 280){
      doc.addPage();
      hpang = 10;
      drawHeader(hpang);
      hpang += 10;
    }

    if (index % 2 === 0) {
      doc.setFillColor(240, 240, 240);
    } else {
      doc.setFillColor(255, 255, 255);
    }
    doc.rect(10, hpang, 190, 10, 'F');

    doc.setTextColor(0, 0, 0);
    doc.rect(10, hpang, 190*0.1, 10);
    doc.text(10+((190*0.1)/2), hpang+(10/2), `${index+1}`, 'center');
    doc.rect(10+(190*0.1), hpang, 190*0.15, 10);
    doc.text(10+(190*0.1), hpang+(10/2), element.customer, 'left');
    doc.rect(10+(190*0.25), hpang, 190*0.15, 10);
    doc.text(10+(190*0.25), hpang+(10/2), element.product, 'left');
    doc.rect(10+(190*0.4), hpang, 190*0.15, 10);
    doc.text(10+(190*0.55), hpang+(10/2), element.item.toString(), 'right');
    doc.rect(10+(190*0.55), hpang, 190*0.15, 10);
    doc.text(10+(190*0.7), hpang+(10/2), element.price.toFixed(2), 'right');
    doc.rect(10+(190*0.7), hpang, 190*0.3, 10);
    doc.text(10+(190), hpang+(10/2), sum.toFixed(2), 'right');

    hpang += 10;
  }

  
  

  
  const averagePerCustomer = totalSum / uniqueCustomers.size;
  doc.setFillColor(220, 220, 220);
  doc.rect(10, hpang, 190, 10, 'F');
  doc.setTextColor(0, 0, 0);
  doc.text(10, hpang+(10/2), 'ค่าเฉลี่ยทั้งหมด:', 'left');
  doc.text(10+(190), hpang+(10/2), averagePerCustomer.toFixed(2), 'right');

  window.open(doc.output('bloburl'));
}

export default Examplereport;