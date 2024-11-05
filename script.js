const fileSelector = document.querySelector("input[type='file']");
const start = document.getElementById("start");
const downloadBtn = document.getElementById("download");
const img = document.querySelector("img");
const progress = document.querySelector(".progress");
const textarea = document.querySelector("textarea");

// Show image on upload
fileSelector.onchange = () => {
    const file = fileSelector.files[0];
    const imgUrl = URL.createObjectURL(file);
    img.src = imgUrl;
};

// OCR start
start.onclick = async () => {
    textarea.value = "";  // Clear previous OCR text
    progress.innerHTML = "Initializing...";
    downloadBtn.disabled = true;  // Disable download button initially

    const worker = Tesseract.createWorker({
        logger: (m) => {
            if (m.status === "recognizing text") {
                progress.innerHTML = `${m.status}: ${(m.progress * 100).toFixed(2)}%`;
            } else {
                progress.innerHTML = m.status;
            }
        }
    });

    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");

    const { data: { text } } = await worker.recognize(fileSelector.files[0]);
    textarea.value = text;  // Display recognized text
    progress.innerHTML = "Done";
    downloadBtn.disabled = false;  // Enable download button

    await worker.terminate();
};

// PDF download
downloadBtn.onclick = () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(12);
    
    // Split the text into an array of lines to properly handle long text
    const lines = doc.splitTextToSize(textarea.value, 180); // 180 is the max width in mm

    doc.text(lines, 10, 10);  // Add the text to the PDF at (10, 10)
    doc.save("OCR_Result.pdf");  // Save the PDF with the name "OCR_Result.pdf"
};

