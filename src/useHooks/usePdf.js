import { jsPDF } from "jspdf";
import img1 from "../img/Cv1.jpg";
import img2 from "../img/Cv2.jpg"; 

const usePdf =()=> {
    let imagen = img1;
    let imagen2 = img2;
    let doc = new jsPDF();
    doc.addImage(imagen, 'JPEG', 0, 0, 210 , 269);
    doc.addPage();
    doc.addImage(imagen2, 'JPEG', 0, 0, 210, 269);
    doc.save('CvFierro.pdf');
}

export default usePdf;