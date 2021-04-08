var htmlSerializer = function (element, content) {
  // Add a class to hyperlinks
  if (element.type === 'paragraph') {
    if (!!element.spans.length && element.spans[0].data.label === 'slim') {
      return '<p class="lg:w-6/12">' + element.text + '</p>'
    }
  } else return null
}

module.exports = htmlSerializer
