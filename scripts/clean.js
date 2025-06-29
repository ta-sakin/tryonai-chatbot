import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoriesToClean = [
  path.resolve(__dirname, '../dist'),
  path.resolve(__dirname, '../dist-widget'),
  path.resolve(__dirname, '../node_modules/.vite')
];

console.log('Cleaning directories...');

for (const dir of directoriesToClean) {
  if (fs.existsSync(dir)) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`Removed: ${dir}`);
    } catch (error) {
      console.error(`Error removing ${dir}:`, error);
      process.exit(1);
    }
  } else {
    console.log(`Directory not found, skipping: ${dir}`);
  }
}

console.log('Clean complete.');