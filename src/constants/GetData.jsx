import * as serviceModules from './serviceModul';

function getData(language) {
  let navLinks;
  switch (language) {
    case 'id':
      navLinks = serviceModules.id;
      break;
    case 'en':
      navLinks = serviceModules.en;
      break;
    case 'cn':
      navLinks = serviceModules.cn;
          break;
       case 'jp':
      navLinks = serviceModules.jp;
          break;
           case 'sa':
      navLinks = serviceModules.sa;
      break;  
               case 'su':
      navLinks = serviceModules.su;
      break;  
        case 'fr':
      navLinks = serviceModules.fr;
      break;  
      case 'kr':
      navLinks = serviceModules.kr;
          break;  
      
    // tambahkan case untuk bahasa lain jika diperlukan
    default:
      navLinks = [];
      break;
  }
  return navLinks;
}

export default getData;