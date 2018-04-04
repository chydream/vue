var baseUrl = location.protocol + '//' + location.host
var pattern = /(127)|(localhost)|(file)/
if (pattern.test(baseUrl)) {
  // baseUrl = 'http://jaaint.f3322.net:28080'
  // baseUrl = 'http://192.168.1.211:8080'
}
export const API_ROOT = baseUrl
console.log(API_ROOT)
