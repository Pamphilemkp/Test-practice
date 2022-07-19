function capitalise(string){
    let str = string.charAt(0).toUpperCase();
    return str.concat(string.slice(1));
   }
    module.exports = capitalise;
 