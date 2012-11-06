var fieldValueMap = {
  '#pull_request_title' : '#issueId: Brief Description',
  '.write-content.js-write-bucket': "###### High-level Description - Fix/Feature" +
    "\n\n* " +
    "\n\n###### Expected Usage (Reproduction steps / Steps to use feature)" +
    "\n\n* " +
    "\n\n###### Expected Outcome (How to know it's fixed / What this does)" +
    "\n\n* "
};


Object.keys( fieldValueMap ).forEach(function( name ){
  $(name).attr('value',fieldValueMap[name]);
});

