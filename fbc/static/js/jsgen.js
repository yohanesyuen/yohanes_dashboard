function JS() {
  this.lines = [ ];
  this.variables = [];
}

JS.prototype.addLine = function (line) {
  this.lines.push(line);
}

JS.prototype.set = function (key, value) {
	this.variables.push([key, value]);
}

JS.prototype.toString = function() {
	var s = '',
  		variables = this.variables, 
  		lines = this.lines;
  if (variables.length > 0) {
  	s += 'var\n';
    for (i=0; i < variables.length; i++) {
    	s += '\t' + variables[i][0] + ' = ';
      if (typeof variables[i][1] === 'string') {
      	s += "'";
      	s += variables[i][1];
      	s += "'";
      } else {
      	s += variables[i][1];
      }
      if ( i < variables.length - 1 ) {
      	s += ',\n';
      } else {
      	s += ';\n\n';
      }
    }
  }
  if (lines.length > 0) {
    for (i=0; i < lines.length; i++) {
    	s += lines[i] + '\n';
    }
  }
  return s;
}
