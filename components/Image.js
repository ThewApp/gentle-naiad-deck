/** @jsx jsx */

import { css, jsx } from '@emotion/core';

export default function Image (props) {
    return <img css={css`
      height: 75vh;
      max-height: 1920px;
    `} src={props.src} />
}
