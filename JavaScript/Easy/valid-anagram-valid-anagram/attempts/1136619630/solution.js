/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("");
    t = t.split("");
    let n1 = s.length;
    let n2 = s.length;
    if(n1!=n2){
        return false;
    }
    s.sort();       
    t.sort();
    for(let i =0; i<n1; i++){
        if(s[i]!==t[i]) return false
        
    }
    return true
};