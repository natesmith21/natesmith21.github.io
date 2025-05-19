import downloadPdf from "download-pdf";

const pdf = 'https://github.com/natesmith21/natesmith21.github.io/tree/main/assets/smithn_resume.pdf';

const options = {
    filename: "smithn_resume.pdf"
}


const getResume = () => {
    downloadPdf(pdf, options, function(err){
        if (err) throw err
    });
}

export default getResume;