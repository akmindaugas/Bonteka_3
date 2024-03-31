import Cookies from "./node_modules/js-cookie";

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieParts = decodedCookie.split(";");

  for (let i = 0; i < cookieParts.length; i++) {
    const currentCookie = cookieParts[i].trim();
    if (currentCookie.indexOf(`${name}=`) === 0) {
      return currentCookie.substring(name.length + 1);
    }
  }
}
function handleLanguageChange(language) {
  Cookies.set("language", language.toUpperCase(), 30);
  updateContentAndLanguage(language);
}
function handleLanguageChange(language) {
  Cookies.set("language", language.toUpperCase(), 30);
  updateContentAndLanguage(language);
}
function updateElementContent(elementId, newText) {
  const element = document.getElementById(elementId);
  if (element) {
    const linkElement = element.querySelector("a");
    if (linkElement) {
      linkElement.textContent = newText;
    } else {
      element.textContent = newText;
    }
  } else {
    console.warn(`Element with ID "${elementId}" not found.`); // Add error handling
  }
}
function updateContentAndLanguage(language) {
  console.log(`${language} Content`);
  // Update content using correct element IDs
  updateElementContent("aboutTitle", translations[language].aboutTitle);
  updateElementContent("news-title", translations[language].newsTitle);
  // ... (similar updates for other elements)

  updateElementContent("aboutId", translations[language].aboutTitle);
  updateElementContent("productId", translations[language].newsTitle);
  updateElementContent("serviceId", translations[language].servicesTitle);
  updateElementContent("partnersId", translations[language].partnersTitle);
  updateElementContent("logInId", translations[language].loginButton);
  updateElementContent("contactId", translations[language].contactTitle);
  updateElementContent("h1Id", translations[language].softwareSolutionsHeading);
}
const languageCookie = getCookie("language");
if (languageCookie) {
  updateContentAndLanguage(languageCookie);
}
document.addEventListener("DOMContentLoaded", function () {
  const LtLanguage = document.getElementById("LtContent");
  const EnLanguage = document.getElementById("EnContent");
  const RuLanguage = document.getElementById("RuContent");

  // On page load, check the cookie for the selected language
  let selectedLanguage = getCookie("selectedLanguage");
  const userLanguagePreference = getCookie("userLanguagePreference");

  // Use the selected language or default to 'LT'
  const currentLanguage = selectedLanguage || "LT"; // Set default to 'LT' if no cookie found
  // ==================================================
  const translations = {
    LT: {
      aboutTitle: "Apie mus",
      aboutId: "AboutIT_LT",
      newsTitle: "Naujienos",
      servicesTitle: "Paslaugos",
      partnersTitle: "Partneriams",
      loginButton: "Prisijungti",
      contactTitle: "Susisiekime",
      softwareSolutionsHeading: "Programinės įrangos sprendimai verslui",
      // ... other translations for LT
    },
    EN: {
      aboutTitle: "About Us",
      newsTitle: "News",
      aboutId: "AboutIT_EN",
      servicesTitle: "Services",
      partnersTitle: "For Partners",
      loginButton: "Login",
      contactTitle: "Contact Us",
      softwareSolutionsHeading: "Software Solutions for Business",
      // ... other translations for EN
    },
    RU: {
      // Added RU translations
      aboutTitle: "О нас",
      aboutId: "AboutIT_RU", // Replace with actual RU translation
      newsTitle: "Новости", // Replace with actual RU translation
      servicesTitle: "Услуги", // Replace with actual RU translation
      partnersTitle: "Партне上げます", // Replace with actual RU translation
      loginButton: "Войти", // Replace with actual RU translation
      contactTitle: "Свяжитесь с нами", // Replace with actual RU translation
      softwareSolutionsHeading: "Программные решения для бизнеса", // Replace with actual RU translation
      // ... other translations for RU
    },
  };

  const languageButtons = {
    LT: document.getElementById("LT"),
    EN: document.getElementById("EN"),
    RU: document.getElementById("RU"),
  };

  for (const languageCode in languageButtons) {
    const button = languageButtons[languageCode];
    button.addEventListener("click", () => handleLanguageChange(languageCode));
  }
});
