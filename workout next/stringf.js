let tgstr="abcdab"
let freq={}
for(const c of tgstr){
  freq[c]=freq[c]+1||1;
}
console.log(freq)