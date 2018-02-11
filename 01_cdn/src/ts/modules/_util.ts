/**
 * Utilモジュール
 */
export default {
  /**
   * ゼロ詰め
   * @param {number} target 対象の数字
   * @param {number} digit ゼロ詰めする桁数
   * @returns {string} ゼロ詰めした文字列
   */
  zeroPadding: (target: number, digit: number): string => {
      let zero:string = (() => {
          let tmp = '';
          for (let i = 0; i < digit; i++) {
              tmp += '0';
          }
          return tmp;
      })();
      return (zero + target.toString()).slice(-digit);
  },

  /**
   * ランダムの値を生成
   * @param {number} min 最小値
   * @param {number} max 最大値
   */
  createRandom: (min: number, max: number): number => {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
  }
}