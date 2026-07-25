import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // One-off migration/build tooling — not application source.
    "_migration/**",
  ]),
  {
    rules: {
      // This is a statically rendered content site that navigates with plain
      // <a> elements by design (most internal links are generated from data via
      // dangerouslySetInnerHTML and cannot be <Link> anyway). Disable the
      // next/link preference so the deliberate architecture doesn't fail lint.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
