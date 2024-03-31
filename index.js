///------LOG IN PROMPT CODE----------------

const logIn = document.getElementById("logInId");
logIn.addEventListener("click", () => {
  prompt("login");
  prompt("password");
});

// ==========================================================================================
document.addEventListener("DOMContentLoaded", function () {
  const LtLanguage = document.getElementById("LtContent");
  const EnLanguage = document.getElementById("EnContent");
  const RuLanguage = document.getElementById("RuContent");

  // On page load, check the cookie for the selected language
  let selectedLanguage = getCookie("selectedLanguage");
  const userLanguagePreference = getCookie("userLanguagePreference");

  // Use the selected language or default to 'LT'
  const currentLanguage = selectedLanguage || "LT";

  updateContentAndLanguage(currentLanguage);
  updateDropdownContent(currentLanguage);

  LtLanguage.addEventListener("click", () => {
    if (currentLanguage !== "LT") {
      updateContentAndLanguage("LT");
    }
  });

  EnLanguage.addEventListener("click", () => {
    if (currentLanguage !== "EN") {
      updateContentAndLanguage("EN");
    }
  });
  RuLanguage.addEventListener("click", () => {
    if (currentLanguage !== "RU") {
      updateContentAndLanguage("RU");
    }
  });

  function updateContentAndLanguage(language) {
    console.log(`${language} Content`);
    // TEXT TRANSLATION CODE----------------
    ///NAVIGATION -----------------
    updateElementContent(
      "aboutId",
      language === "LT" ? "Apie mus" : "About us"
    );
    updateElementContent(
      "productId",
      language === "LT" ? "Naujienos" : "NewsProducts"
    );
    updateElementContent(
      "serviceId",
      language === "LT" ? "Paslaugos" : "Servise"
    );
    updateElementContent(
      "partnersId",
      language === "LT" ? "Partneriams" : "For Partners"
    );
    updateElementContent(
      "logInId",
      language === "LT" ? "Prisijungti" : "Login"
    );
    updateElementContent(
      "contactId",
      language === "LT" ? "Susisiekime" : "Contact us:"
    );
    updateElementContent(
      "h1Id",
      language === "LT"
        ? "Programinės įrangos sprendimai verslui"
        : "Software solutions for business"
    );

    /////ABOUT MIDDLE SECTION --------------
    updateElementContent(
      "aboutIdh1",
      language === "LT" ? "Apie mus" : "About us"
    );

    updateElementContent(
      "aboutIdStart",
      language === "LT" ? "Kaip mes pradėjome" : "How we started"
    );

    updateElementContent(
      "aboutIdStartContent",
      language === "LT"
        ? "Kaip mes pradejome: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus"
        : "How we started: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus"
    );

    updateElementContent(
      "aboutIdHistory",
      language === "LT" ? "Istorija" : "History"
    );

    updateElementContent(
      "aboutIdHistoryContent",
      language === "LT"
        ? "Istorija: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus voluptatum dolorum. Perspiciatis, voluptas! Dignissimos facilis perspiciatis iste, illum esse possimus deserunt porro laboriosam omnis quisquam ipsa incidunt error commodi eum ab quas praesentium tempore soluta labore amet veniam quam est nulla. Natus laborum nemo ad odio, eos facere veritatis, non dicta commodi in, harum sed!"
        : "History: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus voluptatum dolorum. Perspiciatis, voluptas! Dignissimos facilis perspiciatis iste, illum esse possimus deserunt porro laboriosam omnis quisquam ipsa incidunt error commodi eum ab quas praesentium tempore soluta labore amet veniam quam est nulla. Natus laborum nemo ad odio, eos facere veritatis, non dicta commodi in, harum sed!"
    );

    updateElementContent(
      "aboutIdVision",
      language === "LT" ? "Mūsų siekiai" : "Our goals"
    );

    updateElementContent(
      "aboutIdVisionContent",
      language === "LT"
        ? "Musu siekiai: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus voluptatum dolorum. Perspiciatis, voluptas! Dignissimos facilis perspiciatis iste, illum esse possimus deserunt porro laboriosam omnis quisquam ipsa incidunt error commodi eum ab quas praesentium tempore soluta"
        : "Our goals: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione excepturi quidem dolorum ducimus nemo eligendi, culpa sapiente blanditiis quasi non, illo commodi? Iure eum, et debitis quasi eveniet temporibus voluptatum dolorum. Perspiciatis, voluptas! Dignissimos facilis perspiciatis iste, illum esse possimus deserunt porro laboriosam omnis quisquam ipsa incidunt error commodi eum ab quas praesentium tempore soluta"
    );

    updateElementContent(
      "aboutIdFeedback",
      language === "LT"
        ? "Puikus palaikymas ir protinga kaina"
        : "Superior service at reasonable costs"
    );

    updateElementContent(
      "aboutIdFeedbackAuthor",
      language === "LT" ? "Laimingas užsakovas" : "Happy customer"
    );

    ///PRODUCTS MIDDLE SECTION LT-------------------
    updateElementContent(
      "productsIdh2",
      language === "LT" ? "PRODUKTAI, KURIUOS SIŪLOME" : "PRODCTS WE OFFER"
    );
    // updateElementContent('', "");

    ///SERVICES MIDDLE SECTION LT -----------
    updateElementContent(
      "serviceIdh1",
      language === "LT" ? "PASLAUGOS, KURIAS MES SIŪLOME" : "SERVICES WE OFFER"
    );
    updateElementContent(
      "serviceIdFirst",
      language === "LT" ? "FIZINIAMS ASMENIMS" : "PRIVATE CUSTOMERS"
    );
    updateElementContent(
      "serviceIdli1",
      language === "LT" ? "Siūlome" : "Offers"
    );
    updateElementContent(
      "serviceIdli2",
      language === "LT" ? "Parduodame" : "Sells"
    );
    updateElementContent(
      "serviceIdli3",
      language === "LT" ? "Prižiūrime" : "Maintain"
    );
    updateElementContent(
      "serviceIdli4",
      language === "LT" ? "Nuomojame" : "Rents"
    );
    updateElementContent(
      "serviceIdSecond",
      language === "LT" ? "JURIDINIAMS ASMENIMS" : "SERVICE WE OFFER"
    );
    updateElementContent(
      "serviceIdli_1",
      language === "LT" ? "Siūlome" : "Offers"
    );
    updateElementContent(
      "serviceIdli_2",
      language === "LT" ? "Parduodame" : "Sells"
    );
    updateElementContent(
      "serviceIdli_3",
      language === "LT" ? "Prižiūrime" : "Maintain"
    );
    updateElementContent(
      "serviceIdli_4",
      language === "LT" ? "Nuomojame" : "Rents"
    );

    ///PARTNERS MIDDLE SECTION LT -----------
    updateElementContent(
      "partnersIdh2",
      language === "LT" ? "INFORMACIJA PARTNERIAMS" : "INFO FOR PARTNERS"
    );
    updateElementContent(
      "partnersIdh3",
      language === "LT" ? "Jau greitai" : "Comming soon"
    );

    setCookie("selectedLanguage", language, 365);

    updateButtonText("LtContent", language);
    updateDropdownContent(language);

    selectedLanguage = language;
  }
  function updateDropdownContent(language) {
    const dropdownButton = document.getElementById("LtContent");
    const dropdownContent = document.getElementById("EnContent");

    if (dropdownButton && dropdownContent) {
      dropdownButton.innerText = language;
      dropdownContent.innerHTML =
        language === "LT" ? "<a href='#'>EN</a>" : "<a href='#'>LT</a>";
    }
  }

  function updateElementContent(elementId, newText) {
    const element = document.getElementById(elementId);
    if (element) {
      const linkElement = element.querySelector("a");
      if (linkElement) {
        linkElement.innerHTML = newText;
      } else {
        element.innerText = newText;
      }
    }
  }

  function updateButtonText(buttonId, newText) {
    const buttonElement = document.getElementById(buttonId);
    if (buttonElement) {
      buttonElement.innerText = newText;
    }
  }

  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const cookieName = `${name}=`;
    const cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }
});

// ========================================================================================

// /// LANGUAGE TRANSLATION CODE-----------
// document.addEventListener('DOMContentLoaded', function () {
//     const LtLanguage = document.getElementById('LtContent');
//     LtLanguage.addEventListener('click', () => {
//         console.log('LT Content');
//         updateButtonText('LtContent', 'LT');

//     });

//     const EnLanguage = document.getElementById('EnContent');
//     EnLanguage.addEventListener('click', () => {
//         console.log('EN Content');
//         updateButtonText('LtContent', 'EN');

//     });

//     function updateElementContent(elementId, newText) {
//         const element = document.getElementById(elementId);
//         if (element) {
//             // Check if the element contains an anchor tag
//             const linkElement = element.querySelector('a');
//             if (linkElement) {
//                 linkElement.innerHTML = newText;
//             } else {
//                 element.innerText = newText;
//             }
//         }
//     }

//     function updateButtonText(buttonId, newText) {
//         const buttonElement = document.getElementById(buttonId);
//         if (buttonElement) {
//             buttonElement.innerText = newText;
//         }
//     }
// });
