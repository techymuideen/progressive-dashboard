declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
      svgProps?: React.SVGProps<SVGSVGElement>;
    }
  >;

  const src: string;
  export default src;
}
