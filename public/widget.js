(function () {
  "use strict";

  // Widget configuration with defaults
  let config = {};

  // Widget state
  let state = {
    userImage: "",
    clothingImage: "",
    clothingImageUrl: "",
    isProcessing: false,
  };

  /**
   * Extracts configuration from the script tag, with robust defaults.
   */
  function extractConfig() {
    // Start with default config to ensure the widget always has a position
    config = {
      appId: "demo",
      position: "bottom-right",
      theme: "default",
      apiUrl: window.location.origin,
    };

    const scripts = document.querySelectorAll(
      'script[data-widget="virtual-try-on"]',
    );
    const scriptTag = scripts[scripts.length - 1];

    if (scriptTag) {
      // Override defaults with attributes if they exist
      config.appId = scriptTag.getAttribute("data-app-id") || config.appId;
      config.position =
        scriptTag.getAttribute("data-position") || config.position;
      config.theme = scriptTag.getAttribute("data-theme") || config.theme;
      config.apiUrl = scriptTag.getAttribute("data-api-url") || config.apiUrl;
    }
  }

  /**
   * Injects the necessary CSS for the widget into the document's head.
   */
  function createStyles() {
    const styles = `
      .vto-widget {
        position: fixed;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .vto-widget.bottom-right { bottom: 24px; right: 24px; }
      .vto-widget.bottom-left { bottom: 24px; left: 24px; }
      .vto-widget.top-right { top: 24px; right: 24px; }
      .vto-widget.top-left { top: 24px; left: 24px; }

      .vto-trigger {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: #2563eb;
        border: none;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      .vto-trigger:hover {
        background: #1d4ed8;
        transform: scale(1.1);
      }
      .vto-trigger svg {
        width: 24px;
        height: 24px;
        fill: white;
      }

      .vto-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      .vto-modal.active {
        opacity: 1;
        visibility: visible;
      }

      .vto-card {
        background: white;
        border-radius: 12px;
        width: 400px;
        max-width: 90vw;
        max-height: 90vh;
        overflow: hidden;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        transform: scale(0.9);
        transition: transform 0.3s ease;
        display: flex;
        flex-direction: column;
      }
      .vto-modal.active .vto-card {
        transform: scale(1);
      }

      .vto-header {
        background: #2563eb;
        color: white;
        padding: 16px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-shrink: 0;
      }
      .vto-title {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        font-weight: 600;
        margin: 0;
      }
      .vto-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background 0.2s;
      }
      .vto-close:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .vto-content {
        padding: 24px;
        overflow-y: auto;
      }

      .vto-error-message {
        display: none;
        background: #fee2e2;
        color: #b91c1c;
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 16px;
        font-size: 14px;
      }

      .vto-section { margin-bottom: 24px; }
      .vto-label { display: block; font-size: 14px; font-weight: 500; color: #111827; margin-bottom: 12px; }

      .vto-upload-area {
        border: 2px dashed #93c5fd;
        border-radius: 8px;
        padding: 32px;
        text-align: center;
        background: #eff6ff;
        transition: all 0.2s;
        cursor: pointer;
      }
      .vto-upload-area:hover {
        border-color: #2563eb;
        background: #dbeafe;
      }
      .vto-upload-icon { width: 48px; height: 48px; margin: 0 auto 12px; color: #60a5fa; }
      .vto-upload-text { color: #2563eb; font-weight: 500; margin-bottom: 4px; }
      .vto-upload-hint { color: #6b7280; font-size: 14px; margin-bottom: 16px; }

      .vto-btn { background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500; transition: background 0.2s; }
      .vto-btn:hover { background: #1d4ed8; }
      .vto-btn:disabled { background: #9ca3af; cursor: not-allowed; }
      .vto-btn-outline { background: transparent; color: #2563eb; border: 1px solid #93c5fd; }
      .vto-btn-outline:hover { background: #eff6ff; }

      .vto-input { width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; margin-top: 8px; box-sizing: border-box; }
      .vto-input:focus { outline: none; border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }

      .vto-try-btn { width: 100%; background: #2563eb; color: white; border: none; padding: 12px; border-radius: 8px; font-size: 16px; font-weight: 600; cursor: pointer; margin-bottom: 24px; transition: background 0.2s; }
      .vto-try-btn:hover { background: #1d4ed8; }
      .vto-try-btn:disabled { background: #9ca3af; cursor: not-allowed; }

      .vto-tips { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; }
      .vto-tips-title { font-size: 14px; font-weight: 500; color: #1e40af; margin-bottom: 8px; }
      .vto-tips-list { margin: 0; padding-left: 16px; color: #1e40af; font-size: 14px; }
      .vto-tips-list li { margin-bottom: 4px; }

      .vto-preview { display: flex; align-items: center; gap: 12px; padding: 12px; background: #f9fafb; border-radius: 8px; margin-top: 12px; }
      .vto-preview img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; }
      .vto-preview-text { flex: 1; font-size: 14px; color: #6b7280; text-align: left; }

      .vto-hidden { display: none !important; }

      @media (max-width: 480px) {
        .vto-card { width: 95vw; margin: 20px; max-height: calc(100vh - 40px); }
        .vto-upload-area { padding: 24px 16px; }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  /**
   * Creates the widget's HTML structure and appends it to the DOM.
   */
  function createWidget() {
    const widgetContainer = document.createElement("div");
    widgetContainer.className = `vto-widget ${config.position}`;

    // Trigger button
    const trigger = document.createElement("button");
    trigger.className = "vto-trigger";
    trigger.title = "Virtual Try-On";
    trigger.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V19H19V9Z"/>
      </svg>
    `;

    // Main Modal
    const modal = document.createElement("div");
    modal.className = "vto-modal";
    modal.innerHTML = `
      <div class="vto-card">
        <div class="vto-header">
          <h3 class="vto-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21A2 2 0 0 0 5 23H19A2 2 0 0 0 21 21V9M19 9H14V4H5V19H19V9Z"/></svg>
            Virtual Try-On
          </h3>
          <button class="vto-close" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
          </button>
        </div>
        <div class="vto-content">
          <div id="vto-error-message" class="vto-error-message"></div>

          <!-- Your Photo Section -->
          <div class="vto-section">
            <label class="vto-label">Your Photo</label>
            <div class="vto-upload-area" id="user-upload">
              <div id="user-upload-content">
                <svg class="vto-upload-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13C6 9.69 8.69 7 12 7Z"/></svg>
                <div class="vto-upload-text">Upload Photo</div>
                <div class="vto-upload-hint">JPG, PNG up to 5MB</div>
                <button class="vto-btn vto-btn-outline" type="button">Choose File</button>
              </div>
              <div id="user-preview" class="vto-hidden vto-preview">
                <img id="user-preview-img" src="" alt="Your photo">
                <div id="user-preview-text" class="vto-preview-text"></div>
                <button class="vto-btn vto-btn-outline" type="button" id="user-change-btn">Change</button>
              </div>
            </div>
            <input type="file" id="user-file-input" accept="image/*" class="vto-hidden">
          </div>

          <!-- Selected Item Section -->
          <div class="vto-section">
            <label class="vto-label">Selected Item</label>
            <div class="vto-upload-area" id="clothing-upload">
              <div id="clothing-upload-content">
                <svg class="vto-upload-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16V10H5L12 3L19 10H15V16H9ZM5 20V18H19V20H5Z"/></svg>
                <div class="vto-upload-text">Upload clothing item</div>
                <div class="vto-upload-hint">Or it will auto-detect from page</div>
                <button class="vto-btn vto-btn-outline" type="button">Choose File</button>
                <div style="font-size: 12px; color: #6b7280; margin: 8px 0;">or</div>
                <input type="text" class="vto-input" id="clothing-url" placeholder="Paste clothing image URL">
              </div>
              <div id="clothing-preview" class="vto-hidden vto-preview">
                 <img id="clothing-preview-img" src="" alt="Clothing item">
                 <div id="clothing-preview-text" class="vto-preview-text"></div>
                 <button class="vto-btn vto-btn-outline" type="button" id="clothing-change-btn">Change</button>
              </div>
            </div>
            <input type="file" id="clothing-file-input" accept="image/*" class="vto-hidden">
          </div>

          <!-- Try On Button -->
          <button class="vto-try-btn" id="try-on-btn" disabled>
            <span id="try-on-text">Try On Now</span>
          </button>

          <!-- Tips Section -->
          <div class="vto-tips">
            <div class="vto-tips-title">💡 For best results:</div>
            <ul class="vto-tips-list">
              <li>Use a full-body photo</li>
              <li>Stand facing forward</li>
              <li>Plain background works best</li>
            </ul>
          </div>
        </div>
      </div>
    `;

    widgetContainer.appendChild(trigger);
    document.body.appendChild(widgetContainer);
    document.body.appendChild(modal);

    return { trigger, modal };
  }

  // --- UI Update and Helper Functions ---

  function showError(message) {
    const errorEl = document.getElementById("vto-error-message");
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.style.display = "block";
    }
  }

  function hideError() {
    const errorEl = document.getElementById("vto-error-message");
    if (errorEl) {
      errorEl.style.display = "none";
    }
  }

  function updateUserPreview(fileName = "Photo uploaded") {
    document
      .getElementById("user-upload-content")
      .classList.toggle("vto-hidden", !!state.userImage);
    document
      .getElementById("user-preview")
      .classList.toggle("vto-hidden", !state.userImage);
    if (state.userImage) {
      document.getElementById("user-preview-img").src = state.userImage;
      document.getElementById("user-preview-text").textContent = fileName;
    }
  }

  function updateClothingPreview(fileName = "Item uploaded") {
    const hasClothing = !!(state.clothingImage || state.clothingImageUrl);
    document
      .getElementById("clothing-upload-content")
      .classList.toggle("vto-hidden", hasClothing);
    document
      .getElementById("clothing-preview")
      .classList.toggle("vto-hidden", !hasClothing);
    if (hasClothing) {
      document.getElementById("clothing-preview-img").src =
        state.clothingImage || state.clothingImageUrl;
      document.getElementById("clothing-preview-text").textContent =
        state.clothingImageUrl ? "URL detected" : fileName;
    }
  }

  function clearUserPhoto() {
    state.userImage = "";
    document.getElementById("user-file-input").value = "";
    updateUserPreview();
    updateTryOnButton();
  }

  function clearClothingItem() {
    state.clothingImage = "";
    state.clothingImageUrl = "";
    document.getElementById("clothing-file-input").value = "";
    document.getElementById("clothing-url").value = "";
    updateClothingPreview();
    updateTryOnButton();
  }

  function updateTryOnButton() {
    const btn = document.getElementById("try-on-btn");
    if (!btn) return;
    const hasUser = !!state.userImage;
    const hasClothing = !!(state.clothingImage || state.clothingImageUrl);
    btn.disabled = !hasUser || !hasClothing || state.isProcessing;
  }

  // --- Event and API Handlers ---

  function handleFileUpload(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    hideError();

    if (file.size > 5 * 1024 * 1024) {
      showError("File too large. Please upload an image under 5MB.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (type === "user") {
        state.userImage = e.target.result;
        updateUserPreview(file.name);
      } else {
        state.clothingImage = e.target.result;
        state.clothingImageUrl = "";
        document.getElementById("clothing-url").value = "";
        updateClothingPreview(file.name);
      }
      updateTryOnButton();
    };
    reader.readAsDataURL(file);
  }

  async function handleTryOn() {
    if (state.isProcessing) return;

    hideError();
    state.isProcessing = true;
    const btn = document.getElementById("try-on-btn");
    const text = document.getElementById("try-on-text");
    btn.disabled = true;
    text.textContent = "Processing...";

    trackEvent("try_on_start");

    try {
      // Simulate API call for demonstration
      console.log("Sending to API:", {
        appId: config.appId,
        userImage: state.userImage.substring(0, 50) + "...",
        clothingImage: state.clothingImage
          ? state.clothingImage.substring(0, 50) + "..."
          : undefined,
        clothingImageUrl: state.clothingImageUrl || undefined,
      });
      // const response = await fetch(`${config.apiUrl}/api/try-on`, { ... });

      // Faking a successful response after 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const fakeData = {
        ok: true,
        sessionId: "session_" + Date.now(),
        // Using a placeholder for the result image
        resultImage: "https://placehold.co/400x600/2563eb/white?text=Result",
      };

      if (fakeData.ok) {
        showResult(state.userImage, fakeData.resultImage);
        trackEvent("try_on_success", { sessionId: fakeData.sessionId });
      } else {
        throw new Error(fakeData.error || "Try-on failed");
      }
    } catch (error) {
      console.error("Try-on error:", error);
      showError(
        error.message || "An unknown error occurred. Please try again.",
      );
      trackEvent("try_on_failed", { error: error.message });
    } finally {
      state.isProcessing = false;
      text.textContent = "Try On Now";
      updateTryOnButton();
    }
  }

  function showResult(originalImage, resultImage) {
    const resultModal = document.createElement("div");
    resultModal.className = "vto-modal active";
    resultModal.style.zIndex = "10002"; // Appear above the main modal
    resultModal.innerHTML = `
      <div class="vto-card">
        <div class="vto-header">
          <h3 class="vto-title">Your Try-On Result</h3>
          <button class="vto-close" title="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/></svg>
          </button>
        </div>
        <div class="vto-content">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
            <div>
              <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">Original</h4>
              <img src="${originalImage}" style="width: 100%; border-radius: 8px; aspect-ratio: 2/3; object-fit: cover;" alt="Original">
            </div>
            <div>
              <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #6b7280;">Result</h4>
              <img src="${resultImage}" style="width: 100%; border-radius: 8px; aspect-ratio: 2/3; object-fit: cover;" alt="Result">
            </div>
          </div>
          <button class="vto-try-btn">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(resultModal);

    const closeModal = () => resultModal.remove();
    resultModal.addEventListener("click", (e) => {
      if (e.target === resultModal) closeModal();
    });
    resultModal
      .querySelector(".vto-close")
      .addEventListener("click", closeModal);
    resultModal
      .querySelector(".vto-try-btn")
      .addEventListener("click", closeModal);
  }

  function trackEvent(eventType, metadata = {}) {
    console.log(`Analytics Event: ${eventType}`, metadata);
    /*
    fetch(`${config.apiUrl}/api/analytics`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ appId: config.appId, eventType, metadata })
    }).catch(console.error);
    */
  }

  function detectProductImage() {
    const selectors = [
      'img[src*="product"]',
      'img[alt*="product"]',
      ".product img",
      '[class*="product"] img',
    ];
    const image = document.querySelector(selectors.join(", "));
    if (image && image.src) {
      state.clothingImageUrl = image.src;
      updateClothingPreview();
      updateTryOnButton();
    }
  }

  function setupEventHandlers(elements) {
    const { trigger, modal } = elements;

    // Modal open/close
    trigger.addEventListener("click", () => modal.classList.add("active"));
    modal
      .querySelector(".vto-close")
      .addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });

    // User photo
    document.getElementById("user-upload").addEventListener("click", (e) => {
      if (e.target.id !== "user-change-btn")
        document.getElementById("user-file-input").click();
    });
    document
      .getElementById("user-change-btn")
      .addEventListener("click", clearUserPhoto);
    document
      .getElementById("user-file-input")
      .addEventListener("change", (e) => handleFileUpload(e, "user"));

    // Clothing item
    document
      .getElementById("clothing-upload")
      .addEventListener("click", (e) => {
        if (
          e.target.tagName !== "INPUT" &&
          e.target.tagName !== "BUTTON" &&
          e.target.id !== "clothing-change-btn"
        ) {
          document.getElementById("clothing-file-input").click();
        }
      });
    document
      .getElementById("clothing-change-btn")
      .addEventListener("click", clearClothingItem);
    document
      .getElementById("clothing-file-input")
      .addEventListener("change", (e) => handleFileUpload(e, "clothing"));
    document.getElementById("clothing-url").addEventListener("input", (e) => {
      state.clothingImageUrl = e.target.value;
      if (e.target.value) {
        state.clothingImage = "";
      }
      updateClothingPreview();
      updateTryOnButton();
    });

    // Main action
    document
      .getElementById("try-on-btn")
      .addEventListener("click", handleTryOn);
  }

  // --- Initialize Widget ---
  function initWidget() {
    extractConfig();
    createStyles();
    const elements = createWidget();
    setupEventHandlers(elements);

    setTimeout(detectProductImage, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWidget);
  } else {
    initWidget();
  }
})();
