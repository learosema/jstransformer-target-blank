'use strict'
const cheerio = require('cheerio')


exports.name = 'target-blank'
exports.outputFormat = 'html'
exports.inputFormats = ['html']

exports.render = function (str) {
  const $ = cheerio.load(str)
  const blankTarget = function (i, elem) {
    $(this).attr('target', '_blank')
  }

  $('a[href^="https://"]').each(blankTarget)
  $('a[href^="http://"]').each(blankTarget)
  $('a[href^="ftp://"]').each(blankTarget)
  
  return $('body').html()
}