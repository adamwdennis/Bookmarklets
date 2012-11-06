// javascript:(function(a){var b=a.createElement("script");b.src="https://raw.github.com/adamwdennis/Bookmarklets/master/githubNewIssueTemplate.js";a.getElementsByTagName("head")[0].appendChild(b)})(document);)
var fieldValueMap = {
  '#issue_title' : 'CATEGORY - Brief Description',
  '.js-comment-field.js-size-to-fit': "###### Description" +
    "\n\n* " +
    "\n\n###### Reproduction Steps" +
    "\n\n* " +
    "\n\n###### Potential Causes" +
    "\n\n* " +
    "\n\n###### Console Output" +
    "\n\n* " +
    "\n\n###### Error Reports"+
    "\n\n* "
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});

