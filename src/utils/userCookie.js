import Cookie from 'js-cookie';

/**
 * *设置cookie
 * @param {Object} info
 */
export function setCookie(info) {
  // 将info对象转换成二维数组
  const arr = Object.entries(info);
  // 遍历，然后设置cookie
  for (let i = 0; i < arr.length; i += 1) {
    Cookie.set(arr[i][0], arr[i][1]); // 第一项为属性，第二项为值
  }
  return true;
}

/**
 * *获取用户的cookie信息
 */
export function getUserInfo() {
  return {
    username: Cookie.get('username'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
    email: Cookie.get('email'),
  };
}

/**
 * *删除用户的cookie信息
 */
export function removeUserCookie() {
  Cookie.remove('username');
  Cookie.remove('appkey');
  Cookie.remove('role');
  Cookie.remove('email');
  return true;
}
