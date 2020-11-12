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

const getLocationData = store => {
  switch (store) {
    case 'en-GB':
      return {
        currency: '£',
        seperator: '.',
      };
    case 'en-IN':
      return {
        currency: '₹',
        seperator: ',',
      };
    case 'pt-BR':
      return {
        currency: 'R$',
        seperator: ',',
      };
    case 'en-CA':
      return {
        currency: 'CDN$',
        seperator: '.',
      };
    case 'fr-CA':
      return {
        currency: 'CDN$',
        seperator: '.',
      };
    case 'jp-JP':
      return {
        currency: '￥',
        seperator: ',',
      };
    case 'es-MX':
      return {
        currency: '$',
        seperator: ',',
      };
    case 'en-AU':
      return {
        currency: '$',
        seperator: '.',
      };
    case 'en-SG':
      return {
        currency: 'S$',
        seperator: '.',
      };
    case 'tr-TR':
      return {
        currency: '₺',
        seperator: ',',
      };
    case 'en-AE':
      return {
        currency: 'AED',
        seperator: ',',
      };
    default:
      if (euroCountries.indexOf(store) > -1) {
        return {
          currency: '€',
          seperator: ',',
        };
      }
      return {
        seperator: '.',
        currency: '$',
      };
  }
};

export default getLocationData;

