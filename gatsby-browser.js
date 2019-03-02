/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import wrapWithProvider from "./wrap-with-provider";
require("prismjs/themes/prism-solarizedlight.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");
export const wrapRootElement = wrapWithProvider;
