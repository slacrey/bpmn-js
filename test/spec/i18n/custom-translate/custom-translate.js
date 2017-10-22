'use strict';

var translate = require('diagram-js/lib/i18n/translate/translate').default;

module.exports = function customTranslate(template, replacements) {
  if (template === 'Remove') {
    template = 'Eliminar';
  }

  if (template === 'Activate the hand tool') {
    template = 'Activar herramienta mano';
  }

  return translate(template, replacements);
};