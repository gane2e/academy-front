function writeColor(array, tag, color){
    array.forEach(function (item) {
    const element = document.createElement(tag);
    element.textContent = item.toString();
    element.style.color = color;
    document.body.appendChild(element);
  });
}