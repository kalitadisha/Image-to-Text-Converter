# Image to Text Converter
This application is a simple OCR (Optical Character Recognition) tool built with HTML, CSS, JavaScript, Tesseract.js, and jsPDF. It allows users to upload an image with text, recognize the text in the image using OCR, and download the recognized text as a PDF.

## Techstack and Libraries Used
- HTML: To provides the structure and content of web pages.
- CSS: To style the appearance of web page, colors, and fonts.
- JavaScript:To add interactivity and dynamic behavior to web pages, enabling real-time updates and user engagement.
- Tesseract.js:To extract text from images.
- jsPDF: For exporting generated text as PDF files.
## Working
 1.Image Upload:
- The user uploads an image containing text by clicking the file input.
- The uploaded image is displayed in the application, allowing the user to confirm the image is correct.

 2.Starting OCR:
- When the user clicks "Start OCR," the application initializes Tesseract.js, an OCR library that processes the image.
- The Tesseract.createWorker() function creates a worker (background process) for handling OCR without blocking the main application.
- The worker loads the English language data and recognizes text from the uploaded image.
- During processing, a progress indicator shows the OCR status, updating as Tesseract reads and analyzes the image.

 3.Displaying Recognized Text:
- After Tesseract completes the OCR process, it returns the recognized text, which is displayed in a read-only text area within the application.
- The text area allows users to review and confirm the accuracy of the extracted text.

 4.Generating a PDF:
- Once the text is displayed, the "Download PDF" button is enabled.
- When clicked, this button uses the jsPDF library to generate a PDF file containing the recognized text.
- The splitTextToSize function ensures that long lines of text wrap correctly within the PDF.
- Finally, the PDF is downloaded to the user’s device as "OCR_Result.pdf."

## Screenshots
1.Interface ![Interface](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image1.png)
2.Upload_View ![Upload_View](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image2.png)
3.Image_Upload![Image_Upload](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image3.png)
4.Text_Generation ![Text_Generation](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image4.png)
5.PDF_Conversion ![PDF_Conversion](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image5.png)
## Assignment Link
https://kalitadisha.github.io/Image-to-Text-Converter/
## Video
 Click on the image[![Project Preview](https://github.com/kalitadisha/Image-to-Text-Converter/blob/main/Image6.jpeg)](https://youtu.be/DEfwOMfpRNw)

