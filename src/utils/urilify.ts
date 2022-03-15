export function urlify(text: string) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return '<a style="color: #007FFF;" href="' + url + '">' + url + '</a>';
  });
}
