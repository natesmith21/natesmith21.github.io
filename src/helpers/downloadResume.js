import downloadPdf from "download-pdf";

const pdf = 'https://github.com/natesmith21/natesmith21.github.io/tree/main/assets/smithn_resume.pdf';


const getResume = () => {
    downloadPdf(pdf);
}

export default getResume;