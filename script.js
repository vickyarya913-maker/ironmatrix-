// 💰 सदस्यता योजनाओं में 'Select Plan' पर क्लिक करने का लॉजिक
document.querySelectorAll('.PlanSelect').forEach(button => {
    button.addEventListener('click', function(e) {
        const selectedPlan = this.getAttribute('data-plan');
        const planDropdown = document.getElementById('regPlan');
        if (planDropdown) {
            planDropdown.value = selectedPlan;
        }
    });
});

// 📝 न्यू रजिस्ट्रेशन फॉर्म सबमिशन (सीधे व्हाट्सएप ट्रांसफर)
document.getElementById('gymRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // फॉर्म डेटा कलेक्ट करना
    const name = document.getElementById('regName').value;
    const phone = document.getElementById('regPhone').value;
    const email = document.getElementById('regEmail').value;
    const age = document.getElementById('regAge').value;
    const gender = document.getElementById('regGender').value;
    const goal = document.getElementById('regGoal').value;
    const plan = document.getElementById('regPlan').value;
    
    // व्हाट्सएप मैसेज फॉर्मेट बनाना
    const message = `Hello Vicky Sir,%0A` +
                    `I want to join IronMatrix Gym! Here are my Registration details:%0A%0A` +
                    `📝 *Name:* ${name}%0A` +
                    `📞 *Mobile:* ${phone}%0A` +
                    `📧 *Email:* ${email}%0A` +
                    `🎂 *Age:* ${age}%0A` +
                    `⚧️ *Gender:* ${gender}%0A` +
                    `🎯 *Fitness Goal:* ${goal}%0A` +
                    `👑 *Membership Plan:* ${plan}`;
    
    // विक्की सर के नंबर पर रीडायरेक्ट करना
    const whatsappUrl = `https://wa.me{message}`;
    
    alert(`Thank you ${name}! आपकी डिटेल्स सुरक्षित सेव कर ली गई हैं। अब आपको वेरिफिकेशन के लिए विक्की सर के व्हाट्सएप पर भेजा जा रहा है।`);
    
    window.open(whatsappUrl, '_blank');
    this.reset();
});

// Quick Inquiry Form Handler
document.getElementById('gymContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! आपकी इन्क्वायरी सबमिट हो गई है। विक्की आर्या सर जल्द ही आपसे संपर्क करेंगे।');
    this.reset();
});

// Header Background Scroll Handler
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#000000';
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.5)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = 'none';
    }
});
