// زر العودة للأعلى
const toTopBtn = document.createElement("button");
toTopBtn.innerText = "⬆️";
toTopBtn.id = "toTopBtn";
document.body.appendChild(toTopBtn);

Object.assign(toTopBtn.style, {
  position: "fixed",
  bottom: "20px",
  left: "20px",
  padding: "10px",
  fontSize: "20px",
  display: "none",
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  backgroundColor: "#5e4b8b",
  color: "#fff",
  zIndex: "1000",
  transition: "all 0.3s ease"
});

window.addEventListener("scroll", () => {
  toTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// تمرير ناعم عند الضغط على الروابط
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// التحقق من نموذج التواصل قبل الإرسال
const form = document.querySelector(".contact-form form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const msg = form.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
      e.preventDefault();
      alert("رجاءً تأكد من تعبئة جميع الحقول.");
    } else {
      alert("✅ تم إرسال النموذج بنجاح.");
    }
  });
}