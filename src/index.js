module.exports = function check(str, bracketsConfig) {

  for (let i = 0; i < bracketsConfig.length; i++) {
    let check =  bracketsConfig[i].join('')
 
    if (str.includes(check)) {
      str = str.replace(check, '')
      i =- 1
    }
  }
  return str ? false : true

}