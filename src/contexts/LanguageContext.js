import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialListLanguage = [
  { id: "EN", name: "English", flag: "EN.svg" },
  { id: "ES", name: "Español", flag: "ES.svg" }
];

const translations = {
  ES: {
    slideBar_menu_title: "Menú",
    slideBar_home_title: "Inicio",
    slideBar_contact_title: "Contacto",

    modePage_alt: "Modo de navegacion",
    language_alt: "Lenguaje de la pagina",

    language_img_dark_alt: "Modo de la aplicación Oscuro",
    language_img_light_alt: "Modo de la aplicación Claro",
    flag_img_alt: "Bandera del tipo de idioma ",

    page_home_img_alt: "Imagen de Jefferson Miranda",
    page_home_title: "Jefferson Miranda A.",
    page_home_subtitle: "Desarrollador de software",
    page_home_body1: "Soy desarrollador de Software full stack, viviendo en Guayaquil, Ecuador.",
    page_home_body2: "Trabajo con react Js y node.js para despliegue de aplicaciones escalables. Tambien trabajo con un gran numero de proyectos de codigo abierto, principalmente en los ecosistemas de Javascript.",
    page_home_body3: "Más acerca de mi.",

    navigation_github_alt: "Github del perfil de la pagina",
    navigation_linkedin_alt: "LinkedIn del perfil de la pagina",
    navigation_facebook_alt: "Facebook del perfil de la pagina",
    navigation_spotify_alt: "Spotify del perfil de la pagina",
    navigation_instagram_alt: "Instagram del perfil de la pagina",

    footer_reserve_title: "© 2022 Jefferson Miranda. Todos los derechos reservados."

  },
  EN: {
    slideBar_menu_title: "Menu",
    slideBar_home_title: "Home",
    slideBar_contact_title: "Contact",

    modePage_alt: "Navigation mode",
    language_alt: "Lenguage of the page",

    language_img_dark_alt: "Mode Aplication Dark",
    language_img_light_alt: "Mode Aplication Light",
    flag_img_alt: "Idiom type Flag ",

    page_home_img_alt: "Jefferson Miranda's picture",
    page_home_title: "Jefferson Miranda A.",
    page_home_subtitle: "Software developer",
    page_home_body1: "I'm full stack software developer living in Guayaquil, Ecuador.",
    page_home_body2: "I work with react Js and node.js for use in scalable applications. I also work with a large number of open source projects, mainly in the Javascript ecosystems.",
    page_home_body3: "More about me.",

    navigation_github_alt: "Github profile of page",
    navigation_linkedin_alt: "LinkedIn profile of page",
    navigation_facebook_alt: "Facebook profile of page",
    navigation_spotify_alt: "Spotify profile of page",
    navigation_instagram_alt: "Instagram profile of page",

    footer_reserve_title: "© 2022 Jefferson Miranda. All Rights Reserved."
  },
};

const LanguageProvider = ({ children }) => {

  const [language, setLanguage] = useState("EN");
  const [texts, setTexts] = useState(translations[language]);
  const [listLanguage, setListLanguage] = useState(initialListLanguage);

  const handleLanguage = () => {
    if (language === "EN") {
      setLanguage("ES");
      setTexts(translations["ES"]);
    }
    else {
      setLanguage("EN");
      setTexts(translations["EN"]);
    }
  };

  const data = { language, handleLanguage, listLanguage, texts };

  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider };

export default LanguageContext;