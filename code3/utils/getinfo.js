// 一份文字=>中文字符数,英文字符数,标点符号数,数字数量
function getPassageInfo(str) {
  let reg = {
    reg_en: /[a-zA-Z]/g,
    reg_cn: /[\u4e00-\u9fa5]/g,
    reg_num: /[0123456789]/g,
    reg_punc_en: /[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,
    reg_punc_cn: /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g,
  }
  let result = {
    en: (str.match(reg.reg_en) && str.match(reg.reg_en).length) || 0,
    cn: (str.match(reg.reg_cn) && str.match(reg.reg_cn).length) || 0,
    punc: (0 || str.match(reg.reg_punc_en) && str.match(reg.reg_punc_en).length) + (0 || str.match(reg.reg_punc_cn) && str.match(reg.reg_punc_cn).length),
    num: (str.match(reg.reg_num) && str.match(reg.reg_num).length) || 0
  };
  return result;
}
exports.getPassageInfo = getPassageInfo;