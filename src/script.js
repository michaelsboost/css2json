(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});

//# sourceMappingURL=FileSaver.min.js.map

// keep project and data in the global scope
document.documentElement.setAttribute('data-theme', 'dark');

// keep project and data in the global scope
let project = {
  convertTo: 'json',
  css: `/* Basic CSS */
:root {
  --main-bg-color: #f0f0f0;
  --main-text-color: #333;
  --header-bg-color: #007bff;
  --header-text-color: #fff;
}

/* Global styles */
body {
  font-family: Arial, sans-serif;
  color: var(--main-text-color);
  background-color: var(--main-bg-color);
  margin: 0;
  padding: 0;
}

header {
  background-color: var(--header-bg-color);
  color: var(--header-text-color);
  padding: 1rem;
  text-align: center;
}

main {
  padding: 1rem;
}

h1, h2 {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.hero {
  background: #e9ecef;
  padding: 2rem;
  border-radius: 5px;
}

/* Content Section */
.content {
  margin: 1rem 0;
}

.content p {
  font-size: 1.1rem;
}

/* Footer Section */
.footer {
  background: #343a40;
  color: #fff;
  padding: 1rem;
  text-align: center;
}

/* Pseudo-classes */
a:hover {
  color: #007bff;
}

/* Media Queries */
@media (min-width: 768px) {
  .hero {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  header {
    font-size: 1.5rem;
  }

  .content p {
    font-size: 1.2rem;
  }
}

/* Keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 2s ease-in-out;
}

/* Comments */
.header-nav {
  /* This is a comment for navigation */
  background: #343a40;
}`,
  dark: true
};
const data = {
  themeIcon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z",
  activePanel: null,
  preprocessors: [
    'json',
    'less',
    'sass',
    'scss'
  ]
};
const MenuBar = {
  render(container) {
    const buttonClass = 'border-0 bg-transparent text-sm focus:shadow-none';
    const svgClass = 'h-3 -mt-1';
    const svgClassTransform = `${svgClass} transform origin-center scale-125`;
    const selectClass = 'm-0 w-auto rounded-md text-[.6rem]';
    const selectStyle = 'padding: 0.5rem 2rem 0.5rem 0.5rem;';

    const html = `<div class="flex justify-between items-center overflow-auto">
  <div class="flex justify-between items-center">
    <button
      aria-label="new project"
      name="new project"
      class="${buttonClass}"
      onclick="newProject()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 384 512">
        <path 
          fill="currentColor"
          d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
      </svg>
    </button>
    <button
      aria-label="import project"
      name="import project"
      class="${buttonClass}"
      onclick="importProject()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z" />
      </svg>
    </button>
    <a
      href="https://michaelsboost.com/donate/"
      aria-label="Donation helps developer maintence"
      target="_blank"
      role="button"
      class="w-full text-sm border-0 px-4 py-3 rounded-md bg-transparent text-red-400"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
      </svg>
    </a>
  </div>
  <div id="conversion" class="px-2 flex justify-between font-thin select-none cursor-default">
    css2${project.convertTo}
  </div>
  <div class="flex justify-between items-center">
    <button
      aria-label="export project"
      name="export project"
      class="${buttonClass}"
      onclick="download()"
      style="color: unset;"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor"
          d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
      </svg>
    </button>
    <button
      aria-label="toggle theme"
      name="toggle theme"
      class="${buttonClass}"
      style="color: unset;"
      onclick="theme()"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          id="themeIcon"
          fill="currentColor"
          d="${data.themeIcon}"
        />
      </svg>
    </button>
    <button
      aria-label="toggle settings"
      name="toggle settings"
      class="${buttonClass}"
      style="color: unset;"
      onclick="Settings()"
    >
      <svg class="${svgClassTransform}" viewBox="0 0 512 512">
        <path 
          fill="currentColor" 
          d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"/>
      </svg>
    </button>
  </div>
</div>`;
          
    const element = document.querySelector(container);
    if (!element) return;
    element.innerHTML = html;
  }
};
const Modal = {
  render({
    large,
    title = "Are you sure you want to proceed?",
    content,
    CloseLabel,
    ConfirmLabel,
    onLoad,
    onClose,
    onConfirm
  }) {
    // if (!options) return false;
    const hClass = "text-lg font-thin m-0";
    const buttonClass = "text-xs w-auto px-3 py-2 m-0 capitalize rounded-md";
    const svgClass = "w-3";
    const times = `<svg class="${svgClass}" viewBox="0 0 384 512">
        <path 
          fill="currentColor" 
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
      </svg>`;

    const html = `<article class="${large ? 'flex flex-col h-3/4' : ''} rounded-md">
      <header class="${large ? 'flex-none' : ''} flex justify-between items-center">
        <h1 class="${hClass}">${title}</h1>
        <button class="${buttonClass} bg-transparent border-0" style="color: unset;" aria-label="Close">
          ${times}
        </button>
      </header>
      <main class="font-thin ${large ? 'flex-grow' : ''}">
        ${content ? content : ''}
      </main>
      <footer ${large ? 'class="flex-none"' : ''}>
        <button class="${buttonClass} bg-transparent border ${project.dark ? 'border-gray-600' : 'border-gray-200'}" style="color: unset;" aria-label="Close" onclick="this.closest('dialog').remove()">${CloseLabel ? CloseLabel : 'close'}</button>
        ${onConfirm ? `<button class="${buttonClass}" aria-label="Confirm">${ConfirmLabel ? ConfirmLabel : 'confirm'}</button>` : ''}
      </footer>
    </article>`;

    const modal = document.createElement('dialog');
    modal.open = true;
    modal.innerHTML = html;

    document.body.appendChild(modal);
    if (onLoad && typeof onLoad === 'function') {
      onLoad();
    }

    const timesBtn = modal.querySelector('header button');
    const closeBtn = modal.querySelector('footer button:first-child');
    const confirmBtn = modal.querySelector('footer button:last-child');

    // Confirm handler function
    timesBtn.onclick = function() {
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
      document.body.removeChild(modal);
    }
    closeBtn.onclick = function() {
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
      document.body.removeChild(modal);
    }
    confirmBtn.onclick = function() {
      if (onConfirm && typeof onConfirm === 'function') {
        onConfirm();
      }
      document.body.removeChild(modal);
    }
  }
}

// converts css to json
function css2json(css) {
  const json = {
    rootVariables: {},
    styles: {},
    animations: {},
    breakpoints: {}
  };

  // Function to remove comments from CSS
  function removeComments(css) {
    // Remove single-line comments (e.g., // comment)
    css = css.replace(/\/\/[^\n]*/g, '');
    // Remove multi-line comments (e.g., /* comment */)
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');
    return css;
  }

  // Remove comments from CSS
  css = removeComments(css);

  const selectorRegex = /([^{@]+)\{([^}]+)\}/g;
  const mediaQueryRegex = /@media\s*([^{]+)\s*\{([\s\S]*?\{[\s\S]*?\})\s*}/g;
  const keyframesRegex = /@keyframes\s+([^{\s]+)\s*\{([^}]*\{[^}]*\}[^}]*)\}/g;

  function processSelector(selector, properties, target) {
    selector = selector.split('\n').join('').split('}').join('').trim();
    properties = properties.split('\n').join('');
    if (target['keyframes']) {
      keyProps = properties;
      return;
    }

    // Handle :root selector for CSS variables
    if (selector === ":root") {
      properties.split(';').forEach(prop => {
        prop = prop.trim();
        if (!prop) return;
        const [varName, varValue] = prop.split(":").map(part => part.trim());
        if (varName && varValue) {
          json.rootVariables[varName] = varValue;
        }
      });
      return;
    }

    // Handle pseudo-selectors
    const pseudoMatch = selector.match(/^(.*?)(::?[a-zA-Z0-9-]+)$/);
    let baseSelector = selector;
    let pseudo = null;

    if (pseudoMatch) {
      baseSelector = pseudoMatch[1].trim();
      pseudo = pseudoMatch[2];
    }

    // Initialize the base selector in the target object if not present
    if (!target[baseSelector]) {
      target[baseSelector] = {};
    }

    // Initialize 'base' and 'pseudos' as needed
    let currentTarget = target[baseSelector];
    if (pseudo) {
      currentTarget['pseudos'] = currentTarget['pseudos'] || [];
      const pseudoObj = {
        selector: pseudo,
        styles: {}
      };
      currentTarget['pseudos'].push(pseudoObj);
      currentTarget = pseudoObj.styles;
    } else {
      currentTarget['base'] = currentTarget['base'] || {};
      currentTarget = currentTarget['base'];
    }

    // Process each property
    properties.split(';').forEach(prop => {
      prop = prop.trim();
      if (!prop) return;
      const [property, value] = prop.split(":").map(part => part.trim());
      if (property && value) {
        currentTarget[property] = value;
      }
    });
  }

  let insideKeyframes = null;
  let insideBreakpoints = null;
  function processRules(cssRules, target) {
    let match;
    if (insideKeyframes) return;
    while ((match = selectorRegex.exec(cssRules)) !== null) {
      const selector = match[1].trim();
      const properties = match[2].trim();
      if (selector.startsWith('keyframes')) {
        insideKeyframes = true;
      }
      if (selector.startsWith('}')) {
        if (insideKeyframes) {
          insideKeyframes = null;
        }
      }

      if (!insideKeyframes || selector.includes(' ') || selector.includes('>') || selector.includes('+') || selector.includes('~')) {
        const parts = selector.split(/(?=[ >+~])/).map(part => part.trim());
        let currentTarget = target;

        parts.forEach((part, index) => {
          part = part.split('\n').join('');
          if (part.startsWith('}')) {
            part = part.substring(1);
          }
          const isLastPart = index === parts.length - 1;

          if (properties.includes("%")) return;
          if (!currentTarget[part]) {
            currentTarget[part] = {};
          }

          if (isLastPart) {
            processSelector(part, properties, currentTarget);
          } else {
            if (!currentTarget[part]['children']) {
              currentTarget[part]['children'] = {};
            }
            currentTarget = currentTarget[part]['children'];
          }
        });
      } else {
        if (!insideKeyframes) {
          processSelector(selector, properties, target);
        }
      }
    }
  }

  function removeEmptySelectors(styles) {
    Object.keys(styles).forEach(key => {
      const item = styles[key];

      // Check if the current item is empty or has an invalid key
      if (Object.keys(styles[key]).length === 0 || key.includes("}")) {
        delete styles[key];
      }
        
      // Recursively remove empty selectors from children
      if (item.children) removeEmptySelectors(item.children);
    });
  }

  function processKeyframes(keyframesName, keyframesRules) {
    const keyframes = {};
  
    // Remove extra whitespace and newlines
    keyframesRules = keyframesRules.trim();
  
    // Split keyframes rules by '}'
    const segments = keyframesRules.split('}');
    
    // Iterate over each segment
    segments.forEach(segment => {
      segment = segment.trim();
      if (!segment) return;
  
      // Find keyframe name and its properties
      const parts = segment.split('{');
      if (parts.length > 1) {
        // Extract keyframe name
        const keyframeName = parts[0].trim();
        if (keyframeName && (keyframeName.includes('to') || keyframeName.includes('from') || keyframeName.includes('%'))) {
          // Extract properties part
          const propertiesPart = parts[1].trim();
  
          // Split properties into key-value pairs
          propertiesPart.split(';').forEach(prop => {
            prop = prop.trim();
            if (!prop) return;
            const [property, value] = prop.split(':').map(p => p.trim());
            if (property && value) {
              if (!keyframes[keyframeName]) {
                keyframes[keyframeName] = {};
              }
              keyframes[keyframeName][property] = value;
            }
          });
        }
      }
    });
  
    json.animations[keyframesName] = {
      keyframes,
      properties: {}  // Add animation properties if needed
    };
  }
  
  
  // Process media queries
  let mediaMatch;
  while ((mediaMatch = mediaQueryRegex.exec(css)) !== null) {
    insideBreakpoints = true;
    let mediaCondition = mediaMatch[1].trim();
    const mediaRules = mediaMatch[2].trim();
    let sizeString = mediaCondition;
    sizeString = sizeString.split(")")[0].split(":")[1].trim();
    mediaCondition = sizeString;

    // Process the rules inside the media query
    const mediaTarget = {};
    processRules(mediaRules, mediaTarget);

    // Add media conditions to existing styles
    Object.keys(json.styles).forEach(selector => {
      if (json.styles[selector].base) {
        const baseStyles = json.styles[selector].base;
        json.styles[selector]['breakpoints'] = json.styles[selector]['breakpoints'] || {};
        json.styles[selector]['breakpoints'][mediaCondition] = json.styles[selector]['breakpoints'][mediaCondition] || { base: {} };

        // Merge existing base styles with media query base styles
        Object.assign(json.styles[selector]['breakpoints'][mediaCondition].base, baseStyles);
      }
    });

    // Add media query styles to json.breakpoints
    json.breakpoints[mediaCondition] = {
      base: mediaTarget
    };
  }
  insideBreakpoints = null;

  // Remove media queries from CSS
  const cssWithoutMedia = css.replace(mediaQueryRegex, '');

  // Process remaining CSS rules
  processRules(cssWithoutMedia, json.styles);

  // Process keyframes
  let keyframesMatch;
  while ((keyframesMatch = keyframesRegex.exec(css)) !== null) {
    insideKeyframes = true;
    const keyframesName = keyframesMatch[1].trim();
    const keyframesRules = keyframesMatch[2].trim();

    processKeyframes(keyframesName, keyframesRules);
  }
  insideKeyframes = null;

  // delete root as its stored in a separate object
  if (json.styles[":root"]) delete json.styles[":root"];

  // Add animation properties to json.animations
  Object.keys(json.styles).forEach(selector => {
    if (json.styles[selector].base && json.styles[selector].base['animation']) {
      const animationProp = json.styles[selector].base['animation'].split(' ');
      selector = selector.split('\n').join('').trim()
      if (animationProp.length > 1) {
        const animationName = animationProp[0];
        const animationDuration = animationProp[1] || '1s';
        const animationTimingFunction = animationProp[2] || 'linear';
        json.animations[animationName] = json.animations[animationName] || {
          keyframes: {},
          properties: {}
        };
        json.animations[animationName].properties = {
          'animation-name': animationName,
          'animation-duration': animationDuration,
          'animation-timing-function': animationTimingFunction
        };
      }
    }
  });

  // Remove empty pseudo-selectors
  removeEmptySelectors(json.styles);

  return json;
}

// converts json to preprocessor
function json2preprocessor(styles) {
  let css = '';
  let symbol = "";
  let semicolon = ";";
  let openBrace = "{";
  let closeBrace = "}";

  // set proper symbols
  if (data.preprocessors.includes(project.convertTo)) {
    if (project.convertTo === "sass" || project.convertTo === "scss") symbol = "$";
    if (project.convertTo === "sass") {
      semicolon = "";
      openBrace = "";
      closeBrace = "";
    }
    if (project.convertTo === "less") symbol = "@";
  }

  // Function to check if a value contains CSS variables
  function containcssVar(value) {
    return /var\(--/.test(value);
  }

  // Function to process styles recursively
  function processStyles(selector, style, indentLevel = 0) {
    let indent = '  '.repeat(indentLevel);
    let innercss = '';

    const variables = style.variables || {};
    const baseStyles = style.base || {};
    const pseudos = style.pseudos || [];
    const children = style.children || {}; // Account for children

    innercss += `${indent}${selector} ${openBrace}\n`;

    // Variables (convert CSS variables to css variables)
    for (const [variable, value] of Object.entries(variables)) {
      innercss += `${indent}  ${symbol}${variable}: ${value}${semicolon}\n`;
    }

    // Base styles
    for (let [property, value] of Object.entries(baseStyles)) {
      if (property.startsWith('--')) {
        property = property.split('--').join(symbol);
      }

      // Check if value contains a CSS variable
      if (containcssVar(value)) {
        // Replace CSS variables with css variables, handling mixed content
        value = value.replace(/var\(--([a-zA-Z0-9-_]+)\)/g, (match, varName) => {
          if (!property.startsWith('--')) {
            return `${symbol}${varName}`;
          } else {
            return `${symbol}${varName}`;
          }
        });
      }
      innercss += `${indent}  ${property}: ${value}${semicolon}\n`;
    }

    // Pseudo-classes/styles
    pseudos.forEach(({ selector: pseudoSelector, styles: pseudoStyles }) => {
      innercss += `${indent}  &${pseudoSelector} ${openBrace}\n`;
      for (let [property, value] of Object.entries(pseudoStyles)) {
        // Check if value contains a CSS variable
        if (containcssVar(value)) {
          value = value.replace(/var\(--([a-zA-Z0-9-_]+)\)/g, (match, varName) => {
            return `${symbol}${varName}`;
          });
        }
        innercss += `${indent}    ${property}: ${value}${semicolon}\n`;
      }
      innercss += `${indent}  ${closeBrace}\n`;
    });

    // Recursively process children
    if (children) {
      for (const [childSelector, childStyle] of Object.entries(children)) {
        innercss += processStyles(`${selector} ${childSelector}`, childStyle, indentLevel + 1);
      }
    }

    innercss += `${indent}${closeBrace}\n`;

    return innercss;
  }

  // Function to process animations
  function processAnimations(animations, indentLevel = 0) {
    let indent = '  '.repeat(indentLevel);
    let animationCSS = '';

    for (const [animationName, animation] of Object.entries(animations)) {
      animationCSS += `${indent}@keyframes ${animationName} ${openBrace}\n`;

      for (const [keyframe, styles] of Object.entries(animation.keyframes)) {
        animationCSS += `${indent}  ${keyframe} ${openBrace}\n`;
        for (let [property, value] of Object.entries(styles)) {
          // Replace CSS variables with preprocessor variables if needed
          if (containcssVar(value)) {
            value = value.replace(/var\(--([a-zA-Z0-9-_]+)\)/g, (match, varName) => {
              return `${symbol}${varName}`;
            });
          }
          animationCSS += `${indent}    ${property}: ${value}${semicolon}\n`;
        }
        animationCSS += `${indent}  ${closeBrace}\n`;
      }

      animationCSS += `${indent}${closeBrace}\n`;
    }

    return animationCSS;
  }

  // Function to process breakpoints
  function processBreakpoints(breakpoints, indentLevel = 0) {
    let indent = '  '.repeat(indentLevel);
    let breakpointCSS = '';

    for (const [breakpoint, styles] of Object.entries(breakpoints)) {
      breakpointCSS += `${indent}@media (max-width: ${breakpoint}) ${openBrace}\n`;
      for (const [selector, style] of Object.entries(styles.base || {})) {
        breakpointCSS += processStyles(selector, style, indentLevel + 1);
      }
      breakpointCSS += `${indent}${closeBrace}\n`;
    }

    return breakpointCSS;
  }

  // Define :root variables (css supports variables using $)
  let rootVariables = [];
  if (styles.rootVariables && Object.keys(styles.rootVariables).length) {
    for (const [variable, value] of Object.entries(styles.rootVariables)) {
      rootVariables.push(variable);
      css += `${symbol}${variable.split('--').join('')}: ${value}${semicolon}\n`;
    }
    css += '\n';
  }

  // Define styles for each class
  for (const [classId, style] of Object.entries(styles.styles)) {
    if (!style || (!Object.keys(style.variables || {}).length &&
        !Object.keys(style.base || {}).length &&
        !Object.keys(style.pseudos || {}).length &&
        !Object.keys(style.children || {}).length)) {
      continue; // Skip empty styles
    }

    const selector = classId;
    css += processStyles(selector, style);
  }

  // Process animations
  if (Object.keys(styles.animations || {}).length) {
    css += processAnimations(styles.animations);
  }

  // Process breakpoints (media queries)
  if (Object.keys(styles.breakpoints || {}).length) {
    css += processBreakpoints(styles.breakpoints);
  }

  return css;
}

// convert css to json/scss/etc
function convert(detect) {
  if (detect === "json") {
    const json = css2json(project.css);
    project.output = json;
    return JSON.stringify(json, null, 2);
  }
  if (data.preprocessors.includes(detect)) {
    const json = css2json(project.css);
    project.output = json;
    const result = json2preprocessor(project.output);
    return result;
  } else {
    Modal.render({
      title: "Unable to compile!",
      content: `<div class="p-4 text-center">Preprocessor not detected!</div>`
    });
  }
}

// new project
function newProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to start a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm() {
      if (!project.dark) theme();
      project = {
        convertTo: 'json',
        css: ``,
        dark: true
      };

      input.value = project.css;
      output.value = convert(project.convertTo);
    }
  });
}
// import project file
function importProject() {
  // Ask user for confirmation
  Modal.render({
    title: "Are you sure you want to load a new project?",
    content: `<div class="p-4 text-center">All current data will be lost.</div>`,
    onConfirm() {
      // Create an input element of type file
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.json'; // Accept only .json files
    
      // Add event listener for file selection
      fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        
        if (!file) {
          console.error('No file selected.');
          return;
        }
    
        const reader = new FileReader();
    
        // Define what happens once file is loaded
        reader.onload = function(event) {
          try {
            const importedData = JSON.parse(event.target.result);
            
            // Replace project data with imported JSON data
            project = {...project, ...importedData};

            // set theme
            theme();
            theme();

            console.log(project)
      
            input.value = project.css;
            output.value = convert(project.convertTo);
    
            console.log('Project imported successfully:', importedData);
          } catch (error) {
            console.error('Error parsing JSON file:', error);
          }
        };
    
        // Read the file as text
        reader.readAsText(file);
        fileInput.remove();
      });
    
      // Click the input element to trigger file selection dialog
      fileInput.click();
    }
  });
}
// settings
function Settings() {
  // Ask user for confirmation
  Modal.render({
    title: "Settings",
    content: `<select id="convertTo">
    ${data.preprocessors.map(item => {
      const displayText = item.toLowerCase() === 'less' 
        ? item.toUpperCase() 
        : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
      return `<option value="${item}" ${project.convertTo === item ? "selected" : ""}>${displayText}</option>`;
    }).join('')}
    </select>`,
    onConfirm() {
      project.convertTo = document.getElementById('convertTo').value.toString().toLowerCase();
      input.value = project.css;
      output.value = convert(project.convertTo, project.css);
      document.getElementById('conversion').textContent = `css2${project.convertTo}`;
    }
  });
}
// download
function download(string) {
  // Ask user for confirmation
  Modal.render({
    title: "Project File Name",
    content: `<input id="fileName" type="text" value="output" placeholder="Project file name....">`,
    onLoad: function() {
      const fileNameInput = document.getElementById('fileName');
      fileNameInput.focus();
      fileNameInput.select();
    
      const confirmBtn = fileNameInput.closest('dialog').querySelector('footer button:last-child');

      fileNameInput.onkeydown = event => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent the default form submission
          confirmBtn.click(); // Trigger the confirm button click
        }
      };
    },
    onConfirm: function() {
      const fileName = document.getElementById('fileName').value.trim().toLowerCase();
      const input = project.css;
      const output = convert(project.convertTo);
      
      if (!fileName) {
        return Modal.render({
          title: "Error",
          content: `<div class="text-center">File name not found!</div>`
        });
      }
  
      let fileContent, extension, blob;
      if (string) {
        if (string === 'css') {
          fileContent = input;
          extension = 'css';
          blob = new Blob([fileContent], { type: "text/css;charset=utf-8" });
        } else {
          fileContent = output;
          if (string === 'json') {
            extension = 'json';
            blob = new Blob([fileContent], { type: "application/json;charset=utf-8" });
          }
          if (string === 'sass') {
            extension = 'sass';
            blob = new Blob([fileContent], { type: "text/sass;charset=utf-8" });
          }
          if (string === 'scss') {
            extension = 'scss';
            blob = new Blob([fileContent], { type: "text/scss;charset=utf-8" });
          }
          if (string === 'less') {
            extension = 'less';
            blob = new Blob([fileContent], { type: "text/less;charset=utf-8" });
          }
          if (string === 'stylus') {
            extension = 'styl';
            blob = new Blob([fileContent], { type: "text/stylus;charset=utf-8" });
          }
        }
      } else {
        fileContent = JSON.stringify(project, null, 2);
        extension = 'json';
        blob = new Blob([fileContent], {type: "application/json;charset=utf-8"});
      }
      saveAs(blob, `${fileName}${string ? `` : `_css2json`}.${extension}`);
    }
  });
}

// other functions for app
function theme() {
  const sun = "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z";
  const moon = "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z";
  
  // Toggle dark mode
  project.dark = !project.dark;

  // update icon based upon theme
  data.themeIcon = project.dark ? moon : sun;

  // Set data-theme attribute on <html> element
  document.documentElement.setAttribute('data-theme', project.dark ? 'dark' : 'light');

  // update elements to new theme
  document.getElementById('themeIcon').setAttribute('d', data.themeIcon);
  document.querySelectorAll('[data-theme]').forEach(element => {
    if (element.tagName.toLowerCase() === 'html') return;
    let item = element.getAttribute('data-theme');
    
    switch (item) {
      case 'border':
        element.classList.toggle("border-gray-800", project.dark);
        element.classList.toggle("border-gray-200", !project.dark);
        break;
      // Add more cases for other attributes if needed
      default:
        break;
    }
  });
}

// put functions in global scope
window.css2json = css2json;
window.json2preprocessor = json2preprocessor;
window.convert = convert;
window.newProject = newProject;
window.importProject = importProject;
window.Settings = Settings;
window.download = download;
window.theme = theme;

// once dom has loaded init functions
document.addEventListener('DOMContentLoaded', function() {
  // Initialize and render components
  MenuBar.render('[data-menubar]');
  const input = document.getElementById('input');
  const output = document.getElementById('output');
  input.value = project.css;
  output.value = convert(project.convertTo);
});