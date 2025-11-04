// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function() {
  // Find all code blocks (both pre > code and .highlight pre)
  const codeBlocks = document.querySelectorAll('pre');

  codeBlocks.forEach(function(codeBlock) {
    // Skip if pre is already inside a .highlight div
    if (codeBlock.parentNode.classList.contains('highlight')) {
      // For .highlight blocks, add the copy button directly to the .highlight wrapper
      const highlightWrapper = codeBlock.parentNode;

      // Check if copy button already exists
      if (highlightWrapper.querySelector('.code-copy-button')) {
        return;
      }

      // Create copy button
      const copyButton = document.createElement('button');
      copyButton.className = 'code-copy-button';
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span class="copy-text">Copy</span>
      `;

      // Make sure .highlight is positioned relatively
      highlightWrapper.style.position = 'relative';

      // Add copy button to .highlight wrapper
      highlightWrapper.appendChild(copyButton);

      // Copy functionality
      copyButton.addEventListener('click', function() {
        const code = codeBlock.querySelector('code') || codeBlock;
        const text = code.textContent;

        navigator.clipboard.writeText(text).then(function() {
          copyButton.classList.add('copied');
          const copyText = copyButton.querySelector('.copy-text');
          copyText.textContent = 'Copied!';

          setTimeout(function() {
            copyButton.classList.remove('copied');
            copyText.textContent = 'Copy';
          }, 2000);
        }).catch(function(err) {
          console.error('Failed to copy:', err);
        });
      });

      return;
    }

    // For regular pre blocks, create wrapper div
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';

    // Wrap the code block
    codeBlock.parentNode.insertBefore(wrapper, codeBlock);
    wrapper.appendChild(codeBlock);

    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'code-copy-button';
    copyButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span class="copy-text">Copy</span>
    `;

    // Add copy button to wrapper
    wrapper.appendChild(copyButton);

    // Copy functionality
    copyButton.addEventListener('click', function() {
      const code = codeBlock.querySelector('code') || codeBlock;
      const text = code.textContent;

      // Copy to clipboard
      navigator.clipboard.writeText(text).then(function() {
        // Success feedback
        copyButton.classList.add('copied');
        const copyText = copyButton.querySelector('.copy-text');
        copyText.textContent = 'Copied!';

        // Reset after 2 seconds
        setTimeout(function() {
          copyButton.classList.remove('copied');
          copyText.textContent = 'Copy';
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
      });
    });
  });
});
