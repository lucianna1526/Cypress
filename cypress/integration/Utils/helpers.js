export const formatedDate2PtBR = () => new Date().toLocaleDateString("pt-br");
export const formatedMonth2PtBR = () => new Date().toLocaleDateString("pt-br", { month: "2-digit" });
export const formatedYear2Ptbr = () => new Date().toLocaleDateString("pt-br", { year: "numeric" });
export default class Helpers {
    static caseInsensitive(str) {
      // escape special characters
      this.input = str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
      return new RegExp(`${this.input}`, 'i');
    }
  } 



  

  
