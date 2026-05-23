/**
 * 横スクロールバーのハンドルの線の幅: autoモード（thumbSizeXに追従）
 */
export const clsScrollbarThumbBorderWidthXAuto =
  'nws-scroll-scrollbar-thumbBorderWidthX-auto';

/**
 * 縦スクロールバーのハンドルの線の幅: autoモード（thumbSizeYに追従）
 */
export const clsScrollbarThumbBorderWidthYAuto =
  'nws-scroll-scrollbar-thumbBorderWidthY-auto';

/**
 * 横スクロールバーのトラックの幅: autoモード（thumbSizeXに追従）
 */
export const clsScrollbarTrackSizeXAuto =
  'nws-scroll-scrollbar-trackSizeX-auto';

/**
 * 縦スクロールバーのトラックの幅: autoモード（thumbSizeYに追従）
 */
export const clsScrollbarTrackSizeYAuto =
  'nws-scroll-scrollbar-trackSizeY-auto';

/**
 * 矢印ボタン表示
 */
export const clsScrollbarArrowsTrue = 'nws-scroll-scrollbar-arrows-true';

/**
 * 矢印ボタン非表示
 */
export const clsScrollbarArrowsFalse = 'nws-scroll-scrollbar-arrows-false';

/**
 * 値: ハンドルの色
 */
export const varScrollbarThumbColor = {
  x: {
    base: '--nws-scroll-scrollbar-thumbColorX',
    hover: '--nws-scroll-scrollbar-thumbColorXHover',
    active: '--nws-scroll-scrollbar-thumbColorXActive',
  },
  y: {
    base: '--nws-scroll-scrollbar-thumbColorY',
    hover: '--nws-scroll-scrollbar-thumbColorYHover',
    active: '--nws-scroll-scrollbar-thumbColorYActive',
  },
} as const;

/**
 * 値: ハンドルの太さ
 */
export const varScrollbarThumbSize = {
  x: {
    base: '--nws-scroll-scrollbar-thumbSizeX',
    hover: '--nws-scroll-scrollbar-thumbSizeXHover',
    active: '--nws-scroll-scrollbar-thumbSizeXActive',
  },
  y: {
    base: '--nws-scroll-scrollbar-thumbSizeY',
    hover: '--nws-scroll-scrollbar-thumbSizeYHover',
    active: '--nws-scroll-scrollbar-thumbSizeYActive',
  },
} as const;

/**
 * 値: ハンドルの角丸
 */
export const varScrollbarThumbRadius = {
  x: {
    base: '--nws-scroll-scrollbar-thumbRadiusX',
    hover: '--nws-scroll-scrollbar-thumbRadiusXHover',
    active: '--nws-scroll-scrollbar-thumbRadiusXActive',
  },
  y: {
    base: '--nws-scroll-scrollbar-thumbRadiusY',
    hover: '--nws-scroll-scrollbar-thumbRadiusYHover',
    active: '--nws-scroll-scrollbar-thumbRadiusYActive',
  },
} as const;

/**
 * 値: ハンドルの線の色
 */
export const varScrollbarThumbBorderColor = {
  x: {
    base: '--nws-scroll-scrollbar-thumbBorderColorX',
    hover: '--nws-scroll-scrollbar-thumbBorderColorXHover',
    active: '--nws-scroll-scrollbar-thumbBorderColorXActive',
  },
  y: {
    base: '--nws-scroll-scrollbar-thumbBorderColorY',
    hover: '--nws-scroll-scrollbar-thumbBorderColorYHover',
    active: '--nws-scroll-scrollbar-thumbBorderColorYActive',
  },
} as const;

/**
 * 値: ハンドルの線の幅
 */
export const varScrollbarThumbBorderWidth = {
  x: {
    base: '--nws-scroll-scrollbar-thumbBorderWidthX',
    hover: '--nws-scroll-scrollbar-thumbBorderWidthXHover',
    active: '--nws-scroll-scrollbar-thumbBorderWidthXActive',
  },
  y: {
    base: '--nws-scroll-scrollbar-thumbBorderWidthY',
    hover: '--nws-scroll-scrollbar-thumbBorderWidthYHover',
    active: '--nws-scroll-scrollbar-thumbBorderWidthYActive',
  },
} as const;

/**
 * 値: トラックの色
 */
export const varScrollbarTrackColor = {
  x: {
    base: '--nws-scroll-scrollbar-trackColorX',
    hover: '--nws-scroll-scrollbar-trackColorXHover',
  },
  y: {
    base: '--nws-scroll-scrollbar-trackColorY',
    hover: '--nws-scroll-scrollbar-trackColorYHover',
  },
} as const;

/**
 * 値: スクロールバーのトラックの幅
 */
export const varScrollbarTrackSize = {
  x: {
    base: '--nws-scroll-scrollbar-trackSizeX',
    hover: '--nws-scroll-scrollbar-trackSizeXHover',
  },
  y: {
    base: '--nws-scroll-scrollbar-trackSizeY',
    hover: '--nws-scroll-scrollbar-trackSizeYHover',
  },
} as const;

/**
 * 値: フォールバック（非WebKit）スクロールバーの幅プリセット
 */
export const varScrollbarFallbackSize = '--nws-scroll-scrollbar-fallbackSize';

// state
export const thumbStates = ['hover', 'active'] as const;
export const trackStates = ['hover'] as const;
