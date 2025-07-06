import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { build } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function buildChatbot() {
  console.log('Building chatbot from React component...');

  try {
    // Build the standalone chatbot component
    await build({
      configFile: false,
      build: {
        lib: {
          entry: path.resolve(__dirname, 'client/src/components/chatbot-standalone.tsx'),
          name: 'TryOnChatbot',
          fileName: 'chatbot',
          formats: ['iife']
        },
        rollupOptions: {
          external: [],
          output: {
            globals: {}
          }
        },
        outDir: path.resolve(__dirname, 'public'),
        emptyOutDir: false,
        minify: true
      },
      define: {
        'process.env.NODE_ENV': '"production"'
      },
      esbuild: {
        jsx: 'automatic'
      }
    });

    // Read the built file
    const builtChatbotPath = path.join(__dirname, 'public/chatbot.iife.js');
    let chatbotContent = fs.readFileSync(builtChatbotPath, 'utf8');

    // Add CSS styles inline
    const styles = `
      /* TryOn AI Chatbot Styles */
      .tryon-chatbot * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .tryon-chatbot {
        position: fixed;
        z-index: 10000;
        font-size: 14px;
        line-height: 1.5;
      }
      .tryon-chatbot .animate-bounce {
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
          animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
          transform: translate3d(0,0,0);
        }
        40%, 43% {
          animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
          transform: translate3d(0, -30px, 0);
        }
        70% {
          animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
          transform: translate3d(0, -15px, 0);
        }
        90% {
          transform: translate3d(0,-4px,0);
        }
      }
      .tryon-chatbot .animate-spin {
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `;

    // Inject styles into the chatbot
    const styleInjection = `
      (function() {
        if (!document.getElementById('tryon-ai-chatbot-styles')) {
          const style = document.createElement('style');
          style.id = 'tryon-ai-chatbot-styles';
          style.textContent = \`${styles.replace(/`/g, '\\`')}\`;
          document.head.appendChild(style);
        }
      })();
    `;

    // Combine style injection with chatbot code
    const finalChatbot = styleInjection + '\n' + chatbotContent;

    // Write the final chatbot file
    const outputPath = path.join(__dirname, 'public/chatbot.js');
    fs.writeFileSync(outputPath, finalChatbot);

    // Clean up the temporary file
    if (fs.existsSync(builtChatbotPath)) {
      fs.unlinkSync(builtChatbotPath);
    }

    console.log('Chatbot built successfully at public/chatbot.js');
  } catch (error) {
    console.error('Error building chatbot:', error);
    process.exit(1);
  }
}

buildChatbot();