import { FontAssetType, OtherAssetType, generateFonts } from 'fantasticon';
import codepoints from './codepoints.mjs'

generateFonts({
  name: 'icons',
  inputDir: './src/lib/icons',
  outputDir: './src/lib/fonts',
  fontTypes: [
    FontAssetType.EOT,
    FontAssetType.WOFF2,
    FontAssetType.WOFF
  ],
  assetTypes: [
    OtherAssetType.CSS,
    OtherAssetType.JSON,
    OtherAssetType.TS
  ],
  formatOptions: { json: { indent: 2 } },
  tag: '*',
  prefix: 'gds-icon',
  codepoints,
}).then(results => console.log(results));