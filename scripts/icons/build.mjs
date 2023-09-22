import { FontAssetType, OtherAssetType, generateFonts } from 'fantasticon';
import codepoints from './codepoints.mjs'

generateFonts({
  name: 'icons',
  inputDir: './build/icons',
  outputDir: './src/lib/icons',
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
  normalize: true,
  tag: '*',
  prefix: 'gds-icon',
  codepoints,
}).then(results => console.log(results));