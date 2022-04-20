/**
 * 字符串长度计算
 * @param str
 * @param countSpace
 * @returns
 */
export const count = (str, countSpace = true) => {
  if (countSpace) {
    return str.length;
  }
  return removeAllSpace(str).length;
};

/**
 * 去除全部空格
 * @param str
 * @returns
 */
export const removeAllSpace = (str) => {
  return str.replace(/\s+/g, "");
};

/**
 * 去除首尾空格
 * @param str
 * @returns
 */
export const trim = (str) => {
  return str.trim();
};

/**
 * 去除左侧空格
 * @param str
 * @returns
 */
export const trimL = (str) => {
  return str.replace(/^\s+/g, "");
};

/**
 * 去除右侧空格
 * @param str
 * @returns
 */
export const trimR = (str) => {
  return str.replace(/\s+$/g, "");
};

/**
 * 字符串搜索
 * @param str
 * @param kwd
 * @param caseSensitive
 * @returns
 */
export const search = (str, kwd, caseSensitive = true) => {
  if (!caseSensitive) {
    kwd = kwd.toLowerCase();
    str = str.toLowerCase();
  }
  return str.indexOf(kwd);
};

/**
 * 获取 扩展名
 * @param str
 * @returns
 */
export const getExtension = (str) => {
  str = str.split(".");
  return str.pop();
};