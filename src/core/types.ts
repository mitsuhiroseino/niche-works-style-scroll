import type { LooseDictionary } from '@niche-works/types';

/**
 * スタイルを作る関数
 */
export type CreateStyle<O = LooseDictionary> = (options?: O) => StyleResult;

/**
 * レイアウト
 */
export type StyleResult = {
  /**
   * クラス
   */
  className?: string;

  /**
   * スタイル
   */
  style?: CSSCustomProperties;
};

/**
 * CSSカスタムプロパティ(変数)
 */
export type CSSCustomProperties = {
  [key: `--${string}`]: string | undefined;
};
