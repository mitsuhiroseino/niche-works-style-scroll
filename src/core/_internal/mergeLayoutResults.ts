import type { StyleResult } from '../types';
import mergeClassName from './mergeClassName';

export default function mergeStyleResults(results: StyleResult[]): StyleResult {
  // 全てのクラス&スタイルを統合
  return results.reduce<StyleResult>((styleResult, result) => {
    if (result.className) {
      styleResult.className = mergeClassName(
        styleResult.className,
        result.className,
      );
    }
    if (result.style) {
      styleResult.style = { ...styleResult.style, ...result.style };
    }
    return styleResult;
  }, {} satisfies StyleResult);
}
