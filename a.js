src = "https://unpkg.com/typed.js@3.0.0/dist/typed.umd.js"
var typed = new Typed('#element', {
  strings: ['App Developer', 'Front-end Developer', 'UI/UX Designer', 'Video Editor', 'Content Creator'],
  typeSpeed: 50,
});
function sendmail() {
  var params ={

    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
    

  }
  const serviceID = "service_3up787r"
  const templateID = "template_8nmx4tk"

  emailjs.send(serviceID,templateID,params)
 .then(
  res =>{
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your Message sent succesfully");
  }
)
.catch(err=>console.log(err));


}


const menu = document.querySelector('.menu'), links = document.querySelector('.links');
menu.addEventListener('click', () => { const visible = links.classList.toggle('show'); menu.setAttribute('aria-expanded', visible); });
document.querySelectorAll('.links a').forEach(a => a.addEventListener('click', () => links.classList.remove('show')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('resumeBtn').addEventListener('click', () => { const text = 'Aaryan Kulshreshtha\nFront-end developer & designer\nhello@aaryankulshreshtha.dev\n\nSkills: HTML, CSS, JavaScript, UI/UX, React'; const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' })); const a = document.createElement('a'); a.href = url; a.download = 'aaryan-kulshreshtha-resume.txt'; a.click(); URL.revokeObjectURL(url); });
const modal = document.getElementById('modal'); document.querySelectorAll('[data-project]').forEach(btn => btn.addEventListener('click', () => { document.getElementById('modalTitle').textContent = btn.dataset.project; document.getElementById('modalText').textContent = 'A project case study placeholder. Replace this with your live project URL or detailed case study.'; modal.classList.add('open'); }));
document.querySelectorAll('.close,.close-action').forEach(btn => btn.addEventListener('click', () => modal.classList.remove('open'))); modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open') });
document.getElementById('contactForm').addEventListener('submit', e => { e.preventDefault(); document.getElementById('formStatus').textContent = 'Thanks — your message is ready to send. Connect this form to Formspree, EmailJS, or your backend.'; e.target.reset(); });
