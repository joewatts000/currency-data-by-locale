const euroCountries = [
  'de-AT',
  'de-DE',
  'nl-BE',
  'nl-NL',
  'fr-BE',
  'el-CY',
  'et-EE',
  'sv-FI',
  'fr-FR',
  'el-GR',
  'en-IE',
  'it-IT',
  'lv-LV',
  'lt-LT',
  'fr-LU',
  'de-LU',
  'mt-MT',
  'pt-PT',
  'sk-SK',
  'sl-SI',
  'es-ES',
];

const getLocationData = languageCode => {
  switch (languageCode) {
    case 'en-GB':
      return {
        currency: '£',
        separator: '.',
      };
    case 'en-IN':
      return {
        currency: '₹',
        separator: ',',
      };
    case 'pt-BR':
      return {
        currency: 'R$',
        separator: ',',
      };
    case 'en-CA':
      return {
        currency: 'CDN$',
        separator: '.',
      };
    case 'fr-CA':
      return {
        currency: 'CDN$',
        separator: '.',
      };
    case 'ja-JP':
      return {
        currency: '￥',
        separator: ',',
      };
    case 'es-MX':
      return {
        currency: '$',
        separator: ',',
      };
    case 'en-AU':
      return {
        currency: '$',
        separator: '.',
      };
    case 'en-SG':
      return {
        currency: 'S$',
        separator: '.',
      };
    case 'tr-TR':
      return {
        currency: '₺',
        separator: ',',
      };
    case 'en-AE':
      return {
        currency: 'AED',
        separator: ',',
      };
    default:
      if (euroCountries.indexOf(languageCode) > -1) {
        return {
          currency: '€',
          separator: ',',
        };
      }
      return {
        separator: '.',
        currency: '$',
      };
  }
};

export default getLocationData;
