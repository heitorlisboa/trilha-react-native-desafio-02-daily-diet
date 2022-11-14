import { css } from 'styled-components/native';

/**
 * Calculate line height in pixels based on the font size and a line height
 * multiplier
 *
 * Note: Not only this function, but a different line height than the default
 * should not be used in a `TextInput` component as it may cut off the bottom of
 * the text
 * @returns The CSS `font-size` and `line-height` properties as a
 * `styled-components` interpolation
 */
export function cssFontSizeAndLineHeight(
  fontSize: number,
  lineHeightMultiplier = 1.3
) {
  const lineHeight = fontSize * lineHeightMultiplier;
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `;
}
