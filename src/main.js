import md from '../contents/resume.md?raw'
import { marked } from 'marked'
import html2pdf from 'html2pdf.js'

document.getElementById('content').innerHTML = marked(md)

document.querySelector('.print-btn').addEventListener('click', () => {
  html2pdf()
    .set({
      margin: [15, 15, 15, 15],
      filename: 'seiya-izumi-resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    })
    .from(document.getElementById('content'))
    .save()
})
