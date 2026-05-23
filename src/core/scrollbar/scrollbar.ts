import maybeDefault from '@niche-works/utils/object/maybeDefault';
import { clsScrollScrollbar } from '../_constants';
import mergeClassName from '../_internal/mergeClassName';
import type { CreateStyle, StyleResult } from '../types';
import type { ScrollbarOptions } from './types';

/**
 * scrollbarスタイル
 *
 * - スクロールバーの見た目のカスタマイズ
 */
const scrollbar: CreateStyle<ScrollbarOptions> = (options = {}) => {
  const {} = maybeDefault(
    options,
    {},
    {
      overwriteNull: true,
    },
  );
  const result: StyleResult = {
    className: mergeClassName(clsScrollScrollbar),
    style: {},
  };

  return result;
};
export default scrollbar;
