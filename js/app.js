var translationsES= {
    NAV_FEATURES: 'Características',
    NAV_FUNCTIONS: 'Funciones',
    NAV_VIDEO: 'Video',
    NAV_GET_APP: 'Obtener App',
    NAV_CONTACT: 'Contacto',
    NAV_LANGUAGE: 'Idioma',
    NAV_PRIVACY: 'Privacidad',
    MESSAGE_SLIDER: 'Frecuencia Cardiaca App',
    BUTTON_READ: 'Leer Mas...',
    BUTTON_DOWNLOAD: 'Descargar',
    BUTTON_LANG_ES: 'Español',
    BUTTON_LANG_EN: 'Ingles',
    ABOUT: 'Acerca de LIFERATE',
    ADDRESS: 'Dirección',
    SHORT_DESCRIPTION: 'Breve descripción',
    PHONE: 'Teléfono',
    EMAIL: 'Correo',
    SOCIAL_NETWORKS: 'Redes Sociales',
    POWERFUL_FEATURES: 'Potentes Características',
    DISCOVER_FEATURES: 'Descubre nuestras impresionantes características.',
    DOWNLOAD: 'Descarga',
    PORTABILITY: 'Portabilidad',
    CONNECTION: 'Conexión',
    LOCALIZATION: 'Localización',
    HEART_ACTIVITY: 'Monitorea tu actividad Cardiaca',
    LEARN_MULTIPLE: 'Aprende más de las múltiples funciones de esta aplicación.',
    FEATURE_HEART: 'Frecuencia Cardiaca',
    FEATURE_HEART_DESC: 'Registro constante y sincronizado vía sensor de frecuencia cardiaca incluído en Applewatch.',
    FEATURE_PROFILE: 'Perfil',
    FEATURE_PROFILE_DESC: 'Calibra Life Rate alimentando la app con tus datos para óptimas funciones.',
    FEATURE_ALERT: 'Comunicación & Alerta',
    FEATURE_ALERT_DESC: 'Mecánicas para conectar y alertar a tus contactos de emergencia.',
    FEATURE_HISTORY: 'Historial Medico',
    FEATURE_HISTORY_DESC: 'Registro en orden cronológico de su ritmo cardíaco, utilizado con su autorización para la revisión médica.',
    FEATURE_EMERGENCY: 'Emergencia',
    FEATURE_EMERGENCY_DESC: 'Difusión inteligente de auxilio en diferentes plataformas de comunicación.',
    FEATURE_GPS: 'GPS',
    FEATURE_GPS_DESC: 'Ubicación en uso de alerta y emergencia facilitando tu atención de auxilio.',
    SECTION_VIDEO: 'Presentación oficial de nuestra app',
    SECTION_VIDEO_DETAILS: 'Ver más detalles a cerca de la aplicación.',
    SECTION_GET_APP: 'Disponible en la App Store',
    DOWNLOAD_APP: 'Descarga la aplicación ahora.',
    CONTACT: 'Contáctenos',
    TESTIMONIALS: 'Testimonios de Clientes',
    SEND_MESSAGE: 'Enviar Mensaje',
    FORM_NAME: 'Nombre Completo',
    FORM_EMAIL: 'Dirección de correo',
    FORM_MESSAGE: 'Mensaje',
    FORM_SEND: 'Enviar',
    FOOTER_PRIVACY: 'Politicas de Privacidad',
    FOOTER_TERMS: 'Terminos y Condiciones',
    FOOTER_CREATED: 'Creado Por'
};

var translationsEN = {
    NAV_FEATURES: 'Features',
    NAV_FUNCTIONS: 'Functions',
    NAV_VIDEO: 'Video',
    NAV_GET_APP: 'Get App',
    NAV_CONTACT: 'Contact',
    NAV_LANGUAGE: 'Language',
    NAV_PRIVACY: 'Privacy',
    MESSAGE_SLIDER: 'Life Rate App',
    BUTTON_READ: 'Read More...',
    BUTTON_DOWNLOAD: 'Download',
    BUTTON_LANG_ES: 'Spanish',
    BUTTON_LANG_EN: 'English',
    ABOUT: 'About LIFERATE',
    ADDRESS: 'Address',
    SHORT_DESCRIPTION: 'Short description',
    PHONE: 'Phone',
    EMAIL: 'Email',
    SOCIAL_NETWORKS: 'Social Networks',
    POWERFUL_FEATURES: 'Powerful Features',
    DISCOVER_FEATURES: 'Discover our awesome Features.',
    DOWNLOAD: 'Download',
    PORTABILITY: 'Portability',
    CONNECTION: 'Connection',
    LOCALIZATION: 'Localization',
    HEART_ACTIVITY: 'Monitors your heart\'s activity',
    LEARN_MULTIPLE: 'Learn more of the multiple functions of this application.',
    FEATURE_HEART: 'Heart Rate',
    FEATURE_HEART_DESC: 'Constant and synchronized registry of your heart rate with the heart rate sensor included in the Applewatch.',
    FEATURE_PROFILE: 'Profile',
    FEATURE_PROFILE_DESC: 'Feed Life Rate with your data for optimal functionality.',
    FEATURE_ALERT: 'Alert & communication',
    FEATURE_ALERT_DESC: 'Mechanics to connect and alert your emergency contacts.',
    FEATURE_HISTORY: 'Medical history',
    FEATURE_HISTORY_DESC: 'Chronological registry of your heart rate, only used with your authorization for medical review.',
    FEATURE_EMERGENCY: 'Emergency',
    FEATURE_EMERGENCY_DESC: 'You can call for help on different apps, such as whatsapp, Facebook, phone calls.',
    FEATURE_GPS: 'GPS',
    FEATURE_GPS_DESC: 'Used for location services, makes easier for your contacts to find you if you need help.',
    SECTION_VIDEO: 'Official presentation of our app',
    SECTION_VIDEO_DETAILS: 'See more details about the application.',
    SECTION_GET_APP: 'Available in the App Store',
    DOWNLOAD_APP: 'Download the App now.',
    CONTACT: 'Contact Us',
    TESTIMONIALS: 'Customer Testimonials',
    SEND_MESSAGE: 'Send Message',
    FORM_NAME: 'Full Name',
    FORM_EMAIL: 'Mail Address',
    FORM_MESSAGE: 'Message',
    FORM_SEND: 'Send',
    FOOTER_PRIVACY: 'Privacy Policies',
    FOOTER_TERMS: 'Terms and Conditions',
    FOOTER_CREATED: 'Created By'
};

var app = angular.module('translatePage', ['ngCookies','pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.translations('es', translationsES);
    $translateProvider.translations('en', translationsEN);
    $translateProvider.preferredLanguage('es');
    $translateProvider.fallbackLanguage('es');
    // Recordar el idioma con localstorage
    $translateProvider.useLocalStorage();
    // Enable escaping of HTML
    $translateProvider.useSanitizeValueStrategy('escape');
}]);

app.controller('ctrlTranslate', ['$translate', '$scope', function($translate, $scope) {
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
    };
}]);
