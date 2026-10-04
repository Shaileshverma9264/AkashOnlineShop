export const WHATSAPP_NUMBER = "919807566048";

// Sentinel value used by the booking modal's service <select> to detect
// when the user picked "Other" instead of a listed service.
export const OTHER_SERVICE_VALUE = "__other__";

// ============================================================
// SHOP LOCATION
// Replace `mapsQuery` with your real shop address for an accurate map.
// This uses Google's no-API-key embed format, so it works immediately:
// https://www.google.com/maps?q=<your address>&output=embed
// ============================================================
export const SHOP_LOCATION = {
  mapsQuery: "Aakash Online Jan Seva Kendra, Main Market Road",
  addressHi: "[दुकान का पता यहाँ डालें], [शहर], [राज्य] - [पिनकोड]",
  addressEn: "[Your shop address here], [City], [State] - [PIN code]",
};

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  SHOP_LOCATION.mapsQuery
)}&output=embed`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SHOP_LOCATION.mapsQuery
)}`;

export const STR = {
  hi: {
    marquee:
      "🚨 सूचना: SSC GD कांस्टेबल फॉर्म भरने की अंतिम तिथि 30 नवंबर है — आज ही आवेदन करें  |  📄 पैन कार्ड मात्र 3 दिनों में ई-मेल पर प्राप्त करें  |  🖨️ फोटोकॉपी, प्रिंट व लैमिनेशन उपलब्ध  |  🕑 सोमवार–शनिवार सुबह 9 से रात 8 बजे तक खुला",
    navHome: "होम", navServices: "सेवाएं", navGallery: "गैलरी", navPrices: "मूल्य सूची", navAbout: "हमारे बारे में", navFaq: "प्रश्न", navContact: "संपर्क",
    dark: "डार्क", light: "लाइट", auto: "ऑटो",
    installApp: "📲 ऐप इंस्टॉल करें",
    backToTop: "ऊपर जाएं",
    dockCall: "कॉल करें", dockWhatsapp: "WhatsApp", dockBook: "बुक करें", dockDirections: "दिशा-निर्देश",
    heroTitle: "आपके हर सरकारी काम का, एक भरोसेमंद ठिकाना",
    heroSub:
      "पैन कार्ड बनवाना हो, राशन कार्ड में सुधार करवाना हो, कोई फॉर्म भरना हो या फोटोकॉपी करवानी हो — आकाश ऑनलाइन पर आपको हर काम एक ही जगह, सही तरीके से और तय समय में मिलता है।",
    bookCta: "🗓️ अपॉइंटमेंट बुक करें",
    exploreCta: "हमारी सेवाएं देखें",
    openNow: "🟢 अभी खुला है", closedNow: "🔴 अभी बंद है",
    statsEyebrow: "अब तक का सफर",
    stat1: "सफल फॉर्म आवेदन", stat2: "संतुष्ट ग्राहक", stat3: "वर्षों का अनुभव",
    svcEyebrow: "हमारी सेवाएं", svcTitle: "एक ही जगह, आपकी हर ज़रूरत",
    svcSearchPlaceholder: "सेवा खोजें...", svcSearchEmpty: "कोई सेवा नहीं मिली।",
    priceEyebrow: "शुल्क सूची", priceTitle: "पारदर्शी एवं किफायती शुल्क", priceBookBtn: "बुक करें",
    priceNote: "ऊपर दिखाया गया शुल्क केवल हमारी सेवा शुल्क है। सरकारी शुल्क (यदि कोई हो) अलग से लागू होगा।",
    galleryEyebrow: "गैलरी", galleryTitle: "हमारी दुकान की एक झलक",
    aboutEyebrow: "हमारे बारे में", aboutTitle: "क्यों चुनें आकाश ऑनलाइन?",
    aboutText:
      "पिछले 5 सालों से हम अपने क्षेत्र के हज़ारों परिवारों को पैन कार्ड, राशन कार्ड, पासपोर्ट, स्कूल एडमिशन और सरकारी फॉर्म से जुड़ी सेवाएं दे रहे हैं। हमारी टीम हर आवेदन को खुद जाँचती है ताकि दस्तावेज़ों में कोई गलती न रहे।",
    aboutPoint1: "पारदर्शी शुल्क, कोई छुपी हुई फीस नहीं",
    aboutPoint2: "हर आवेदन की स्थिति की जानकारी WhatsApp पर",
    aboutPoint3: "अनुभवी और प्रशिक्षित स्टाफ",
    checkerEyebrow: "दस्तावेज़ गाइड", checkerTitle: "जानिए किस काम के लिए कौन-से कागज़ चाहिए",
    checkerPlaceholder: "एक सेवा चुनें",
    faqEyebrow: "सामान्य प्रश्न", faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faqSearch: "अपना सवाल खोजें...", faqEmpty: "कोई मिलता-जुलता सवाल नहीं मिला।",
    dlEyebrow: "डाउनलोड सेंटर", dlTitle: "ज़रूरी फॉर्म यहाँ से डाउनलोड करें", dlBtn: "डाउनलोड (PDF)",
    payEyebrow: "ऑनलाइन भुगतान", payTitle: "UPI से सेवा शुल्क का भुगतान करें",
    payNote: "PhonePe, Google Pay और Paytm स्वीकार्य",
    testiEyebrow: "ग्राहकों की राय", testiTitle: "हमारे ग्राहक क्या कहते हैं",
    contactTitle: "हमसे संपर्क करें", contactSub: "कॉल, WhatsApp या सीधे दुकान पर आएं",
    addressLabel: "पता", directionsBtn: "📍 दिशा-निर्देश पाएं",
    queryTitle: "अपना सवाल यहाँ लिखें",
    queryPlaceholder: "उदाहरण: मुझे नया पैन कार्ड बनवाना है, किन कागज़ों की ज़रूरत होगी?",
    querySend: "WhatsApp पर भेजें", querySent: "✅ भेजा जा रहा है — WhatsApp खुल गया है",
    bookTitle: "अपॉइंटमेंट बुक करें", bookName: "आपका नाम", bookService: "सेवा चुनें",
    bookOtherOption: "✏️ अन्य (अपनी ज़रूरत बताएं)",
    bookOtherLabel: "अपनी ज़रूरत लिखें",
    bookOtherPlaceholder: "जैसे: ड्राइविंग लाइसेंस, बिजली बिल भुगतान...",
    bookDate: "तारीख", bookTime: "समय", bookConfirm: "टोकन प्राप्त करें",
    bookTokenPrefix: "आपका टोकन नंबर", bookSendWa: "WhatsApp पर पुष्टि भेजें", bookClose: "बंद करें",
    bookSlotTaken: "⚠️ इस तारीख व समय पर पहले से एक बुकिंग मौजूद है। कृपया दूसरा समय चुनें।",
    myBookingsLink: "📋 मेरी बुकिंग देखें",
    myBookingsTitle: "मेरी बुकिंग", myBookingsEmpty: "अभी तक कोई बुकिंग नहीं है।",
    myBookingsCancel: "रद्द करें", myBookingsNewBtn: "+ नई बुकिंग करें", myBookingsBack: "← वापस",
    bookCancelled: "बुकिंग रद्द कर दी गई है।",
    footer: "© आकाश ऑनलाइन — सभी अधिकार सुरक्षित",
  },
  en: {
    marquee:
      "🚨 Notice: SSC GD Constable form last date is 30 Nov — apply today  |  📄 Get your PAN card in just 3 days by email  |  🖨️ Photocopy, print & lamination available  |  🕑 Open Mon–Sat, 9 AM to 8 PM",
    navHome: "Home", navServices: "Services", navGallery: "Gallery", navPrices: "Prices", navAbout: "About", navFaq: "FAQ", navContact: "Contact",
    dark: "Dark", light: "Light", auto: "Auto",
    installApp: "📲 Install App",
    backToTop: "Back to top",
    dockCall: "Call", dockWhatsapp: "WhatsApp", dockBook: "Book", dockDirections: "Directions",
    heroTitle: "One trusted place for all your government paperwork",
    heroSub:
      "A new PAN card, a ration card correction, a form to fill, or a stack of photocopies — Aakash Online handles it all under one roof, done right and on time.",
    bookCta: "🗓️ Book an Appointment",
    exploreCta: "See our services",
    openNow: "🟢 Open now", closedNow: "🔴 Closed now",
    statsEyebrow: "Our journey so far",
    stat1: "Forms filed", stat2: "Happy customers", stat3: "Years of experience",
    svcEyebrow: "Our services", svcTitle: "Everything you need, in one place",
    svcSearchPlaceholder: "Search services...", svcSearchEmpty: "No matching service found.",
    priceEyebrow: "Price list", priceTitle: "Transparent, affordable pricing", priceBookBtn: "Book",
    priceNote: "The fee shown above is our service charge only. Any applicable government fee is extra.",
    galleryEyebrow: "Gallery", galleryTitle: "A look inside our shop",
    aboutEyebrow: "About us", aboutTitle: "Why choose Aakash Online?",
    aboutText:
      "For the last 5 years we've helped thousands of families in the area with PAN cards, ration cards, passports, school admissions and government forms. Every application is checked by our team before it's submitted.",
    aboutPoint1: "Transparent fees, no hidden charges",
    aboutPoint2: "Application status updates sent on WhatsApp",
    aboutPoint3: "Experienced, trained staff",
    checkerEyebrow: "Document guide", checkerTitle: "Find out which papers you need for each service",
    checkerPlaceholder: "Choose a service",
    faqEyebrow: "FAQs", faqTitle: "Frequently asked questions",
    faqSearch: "Search your question...", faqEmpty: "No matching question found.",
    dlEyebrow: "Download centre", dlTitle: "Download the forms you need, from here", dlBtn: "Download (PDF)",
    payEyebrow: "Pay online", payTitle: "Pay your service fee by UPI",
    payNote: "PhonePe, Google Pay and Paytm accepted",
    testiEyebrow: "Customer reviews", testiTitle: "What our customers say",
    contactTitle: "Get in touch", contactSub: "Call, WhatsApp, or visit the shop directly",
    addressLabel: "Address", directionsBtn: "📍 Get Directions",
    queryTitle: "Type your question here",
    queryPlaceholder: "e.g. I need a new PAN card — what documents will I need?",
    querySend: "Send on WhatsApp", querySent: "✅ Sending — WhatsApp has opened",
    bookTitle: "Book an appointment", bookName: "Your name", bookService: "Choose a service",
    bookOtherOption: "✏️ Other (tell us what you need)",
    bookOtherLabel: "Describe your requirement",
    bookOtherPlaceholder: "e.g. Driving licence, electricity bill payment...",
    bookDate: "Date", bookTime: "Time", bookConfirm: "Get token",
    bookTokenPrefix: "Your token number", bookSendWa: "Send confirmation on WhatsApp", bookClose: "Close",
    bookSlotTaken: "⚠️ There's already a booking for this date & time. Please choose another slot.",
    myBookingsLink: "📋 View my bookings",
    myBookingsTitle: "My bookings", myBookingsEmpty: "You have no bookings yet.",
    myBookingsCancel: "Cancel", myBookingsNewBtn: "+ New booking", myBookingsBack: "← Back",
    bookCancelled: "Booking cancelled.",
    footer: "© Aakash Online — all rights reserved",
  },
};

// Each service entry is [imageUrl, title, description, emojiFallback].
// `emojiFallback` is shown instead of the image if it fails to load
// (see the onError handler in Services.jsx) so the card never looks broken.
// Replace these Unsplash URLs with real photos of each service/counter
// whenever you have them — just keep the same [image, title, desc, emoji] shape.
export const SERVICES = {
  hi: [
    ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80", "पैन कार्ड", "नया पैन कार्ड और सुधार, 3 दिन में", "🪪"],
    ["https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80", "पासपोर्ट सेवा", "आवेदन फॉर्म और अपॉइंटमेंट सहायता", "🛂"],
    ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80", "राशन कार्ड", "नया कार्ड व सदस्य जोड़ना/हटाना", "🧾"],
    ["https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=400&q=80", "फोटोकॉपी व प्रिंट", "फोटोकॉपी, प्रिंट और लैमिनेशन", "🖨️"],
    ["https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80", "फॉर्म भरना", "सरकारी व निजी फॉर्म भरने में सहायता", "📝"],
    ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80", "ऑनलाइन आवेदन", "परीक्षा फॉर्म, बिल भुगतान व अन्य", "💻"],
  ],
  en: [
    ["https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80", "PAN Card", "New PAN card & corrections in 3 days", "🪪"],
    ["https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80", "Passport Service", "Application forms & appointment help", "🛂"],
    ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80", "Ration Card", "New card, add/remove members", "🧾"],
    ["https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=400&q=80", "Photocopy & Print", "Photocopy, printing and lamination", "🖨️"],
    ["https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80", "Form Filling", "Help filling government & private forms", "📝"],
    ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80", "Online Applications", "Exam forms, bill payments & more", "💻"],
  ],
};

// ============================================================
// PRICE LIST — [service title, fee in ₹, note]. Titles match SERVICES
// above so the same name shows consistently across the site. Replace
// the numbers with your real, current service charges.
// ============================================================
export const PRICES = {
  hi: [
    ["पैन कार्ड", 150, "सुधार हेतु ₹100"],
    ["पासपोर्ट सेवा", 300, "फॉर्म व अपॉइंटमेंट सहित"],
    ["राशन कार्ड", 100, "सदस्य जोड़ना/हटाना ₹50"],
    ["फोटोकॉपी व प्रिंट", 2, "प्रति पृष्ठ से शुरू"],
    ["फॉर्म भरना", 100, "फॉर्म अनुसार भिन्न"],
    ["ऑनलाइन आवेदन", 100, "फॉर्म अनुसार भिन्न"],
  ],
  en: [
    ["PAN Card", 150, "Correction ₹100"],
    ["Passport Service", 300, "Includes form & appointment"],
    ["Ration Card", 100, "Add/remove member ₹50"],
    ["Photocopy & Print", 2, "Starting per page"],
    ["Form Filling", 100, "Varies by form"],
    ["Online Applications", 100, "Varies by form"],
  ],
};

// ============================================================
// GALLERY — shop photos shown in the carousel/gallery section.
// Replace `src` with real photos of your shop once available.
// ============================================================
export const GALLERY = {
  hi: [
    ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80", "हमारी दुकान का सामने का हिस्सा"],
    ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80", "ग्राहक सेवा काउंटर"],
    ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", "कंप्यूटर एवं ऑनलाइन आवेदन सेटअप"],
    ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80", "ग्राहक की सहायता करते हुए"],
    ["https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1000&q=80", "दस्तावेज़ व्यवस्थित रखने की डेस्क"],
    ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80", "प्रिंटिंग एवं स्कैनिंग कॉर्नर"],
  ],
  en: [
    ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80", "Our shop front"],
    ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80", "Customer service counter"],
    ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", "Computer & online application setup"],
    ["https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80", "Assisting a customer"],
    ["https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1000&q=80", "Document handling desk"],
    ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80", "Printing & scanning corner"],
  ],
};

export const DOCS = {
  hi: {
    "नया पैन कार्ड": ["आधार कार्ड", "दो पासपोर्ट साइज़ फोटो", "हस्ताक्षर की स्कैन कॉपी"],
    "राशन कार्ड": ["आधार कार्ड (परिवार के सभी सदस्य)", "निवास प्रमाण पत्र", "आय प्रमाण पत्र"],
    "पासपोर्ट आवेदन": ["आधार कार्ड", "जन्म प्रमाण पत्र", "निवास प्रमाण", "पासपोर्ट साइज़ फोटो"],
  },
  en: {
    "New PAN Card": ["Aadhaar card", "Two passport-size photos", "Scanned signature"],
    "Ration Card": ["Aadhaar (all family members)", "Residence proof", "Income certificate"],
    "Passport Application": ["Aadhaar card", "Birth certificate", "Residence proof", "Passport photo"],
  },
};

export const FAQS = {
  hi: [
    ["पैन कार्ड बनने में कितने दिन लगते हैं?", "आमतौर पर 3 कार्यदिवसों के भीतर आपका ई-पैन आपके ईमेल पर भेज दिया जाता है।"],
    ["क्या रविवार को दुकान खुली रहती है?", "जी हाँ, रविवार को सुबह 10 से दोपहर 2 बजे तक सीमित समय के लिए दुकान खुली रहती है।"],
    ["क्या मैं अपॉइंटमेंट बुक करके सीधे आ सकता हूँ?", "हाँ, अपॉइंटमेंट बुक करने पर आपको लाइन में इंतज़ार नहीं करना पड़ेगा।"],
    ["सेवा शुल्क कैसे पता करूं?", "हर सेवा का शुल्क पहले से तय है और दुकान में साफ़ तौर पर लिखा है।"],
    ["अगर मेरे दस्तावेज़ अधूरे हैं तो क्या होगा?", "हमारी टीम आपको बताएगी कि कौन-से कागज़ अभी और चाहिए।"],
  ],
  en: [
    ["How many days does a PAN card take?", "Your e-PAN is usually emailed to you within 3 working days."],
    ["Is the shop open on Sundays?", "Yes, we're open for limited hours, 10 AM to 2 PM on Sundays."],
    ["Can I just walk in after booking a slot?", "Yes — tell us your time on WhatsApp and just arrive at your slot."],
    ["How do I know the service fee in advance?", "Every service has a fixed, clearly displayed fee at the shop."],
    ["What if my documents are incomplete?", "Our team will tell you exactly what's missing."],
  ],
};

export const DOWNLOADS = {
  hi: [
    ["राशन कार्ड फॉर्म", "/downloads/ration-card-form.pdf", "ration-card-form.pdf"],
    ["शपथ पत्र (एफिडेविट)", "/downloads/affidavit-form.pdf", "affidavit-form.pdf"],
    ["स्कूल एडमिशन फॉर्म", "/downloads/school-admission-form.pdf", "school-admission-form.pdf"],
    ["जाति प्रमाण पत्र फॉर्म", "/downloads/caste-certificate-form.pdf", "caste-certificate-form.pdf"],
  ],
  en: [
    ["Ration card form", "/downloads/ration-card-form.pdf", "ration-card-form.pdf"],
    ["Affidavit format", "/downloads/affidavit-form.pdf", "affidavit-form.pdf"],
    ["School admission form", "/downloads/school-admission-form.pdf", "school-admission-form.pdf"],
    ["Caste certificate form", "/downloads/caste-certificate-form.pdf", "caste-certificate-form.pdf"],
  ],
};

export const TESTIMONIALS = {
  hi: [
    ["मैंने यहाँ से अपना पासपोर्ट अप्लाई करवाया था, इनका काम बहुत तेज़ और बिल्कुल सही है।", "रमेश कुमार"],
    ["पैन कार्ड सिर्फ 2 दिन में मिल गया, बहुत मददगार स्टाफ।", "सुनीता देवी"],
    ["राशन कार्ड में नाम जुड़वाना बहुत आसान हो गया, धन्यवाद आकाश ऑनलाइन।", "विकास यादव"],
  ],
  en: [
    ["I got my passport done here — fast and completely accurate work.", "Ramesh Kumar"],
    ["Got my PAN card in just 2 days — very helpful staff.", "Sunita Devi"],
    ["Adding a name to my ration card was so easy, thank you Aakash Online.", "Vikas Yadav"],
  ],
};
