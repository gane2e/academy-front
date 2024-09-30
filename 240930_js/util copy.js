function write(content, tag) {
  document.write("<"+tag+">"+content+"</"+tag+">");   
}

function hr() {
  document.write("<hr>");
}

function writeNewLine(content) {
  document.write(content+"<br>");   
}

function writeColor(content, tag, color) {
  document.write("<"+tag+" style='color:"+color+"'>"+
 content+"</"+tag+">");   
}