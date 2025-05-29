    // Loader HTML definitions
    const loaderHTML = {
      "1-pulse": `<div class="loader-pulse"></div>`,
      "2-dots": `<div class="loader-dots"><div></div><div></div><div></div></div>`,
      "3-ring": `<div class="loader-ring"></div>`,
      "4-ripple": `<div class="loader-ripple"><div></div><div></div></div>`,
      "5-cube": `<div class="loader-cube"></div>`,
      "6-bar": `<div class="loader-bar"></div>`,
      "7-wave": `<div class="loader-wave"><div></div><div></div><div></div><div></div><div></div></div>`,
      "8-circle-spread": `<div class="loader-circle-spread"><div></div><div></div><div></div><div></div></div>`,
      "9-dual-ring": `<div class="loader-dual-ring"></div>`,
      "10-typing": `<div class="loader-typing"><div></div><div></div><div></div></div>`,
      "11-flower": `<div class="loader-flower"></div>`,
      "12-grid": `<div class="loader-grid">${'<div></div>'.repeat(9)}</div>`,
      "13-scale-out": `<div class="loader-scale-out"></div>`,
      "14-fading-circle": `<div class="loader-fading-circle">${'<div class="circle"></div>'.repeat(12)}</div>`,
      "15-spinning-square": `<div class="loader-spinning-square"></div>`,
      "16-chasing-dots": `<div class="loader-chasing-dots"><div class="dot"></div><div class="dot"></div></div>`,
      "17-three-dot-bounce": `<div class="loader-three-dot-bounce"><div></div><div></div><div></div></div>`,
      "18-cube-grid": `<div class="loader-cube-grid">${'<div class="cube"></div>'.repeat(9)}</div>`,
      "19-dot-flashing": `<div class="loader-dot-flashing"></div>`,
      "20-spinner-growing": `<div class="loader-spinner-growing"></div>`,
      "21-line-scale": `<div class="loader-line-scale"><div></div><div></div><div></div><div></div><div></div></div>`,
      "22-box-scale": `<div class="loader-box-scale"></div>`,
      "23-square-follow": `<div class="loader-square-follow"><div></div><div></div></div>`,
      "24-circle-spin": `<div class="loader-circle-spin"></div>`,
      "25-dots-stretch": `<div class="loader-dots-stretch"><div></div><div></div><div></div></div>`,
      "26-line-pulse": `<div class="loader-line-pulse"><div></div><div></div><div></div><div></div><div></div></div>`,
      "27-border-circle": `<div class="loader-border-circle"></div>`,
      "28-dots-carousel": `<div class="loader-dots-carousel"><div></div><div></div><div></div><div></div><div></div></div>`,
      "29-progress-line": `<div class="loader-progress-line"></div>`,
      "30-double-bounce": `<div class="loader-double-bounce"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>`,
      "31-cube-transition": `<div class="loader-cube-transition"><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div></div>`,
      "32-dot-typing-simple": `<div class="loader-dot-typing-simple"></div>`,
      "33-hourglass": `<div class="loader-hourglass"></div>`,
      "34-swapping-dots": `<div class="loader-swapping-dots"><div></div><div></div></div>`,
      "35-growing-spinner": `<div class="loader-growing-spinner"></div>`,
      "36-square-grid-alt": `<div class="loader-square-grid-alt"><div></div><div></div><div></div><div></div></div>`,
      "37-circle-fade": `<div class="loader-circle-fade">${'<div></div>'.repeat(8)}</div>`,
      "38-rectangular-load": `<div class="loader-rectangular"></div>`,
      "39-three-dot-scale": `<div class="loader-three-dot-scale"><div></div><div></div><div></div></div>`,
      "40-diamond-pulse": `<div class="loader-diamond-pulse"></div>`,
      "41-border-spinner-dotted": `<div class="loader-border-spinner-dotted"></div>`,
      "42-flipping-square-alt": `<div class="loader-flipping-square-alt"></div>`,
      "43-circle-bounce-spread": `<div class="loader-circle-bounce-spread"><div></div><div></div><div></div><div></div><div></div></div>`,
      "44-line-spin": `<div class="loader-line-spin">${'<div></div>'.repeat(8)}</div>`,
      "45-cube-rotate": `<div class="loader-cube-rotate"></div>`,
      "46-semi-circle": `<div class="loader-semi-circle"></div>`,
      "47-pulse-dots": `<div class="loader-pulse-dots"><div></div><div></div><div></div></div>`,
      "48-scale-square": `<div class="loader-scale-square"></div>`,
      "49-circle-outline": `<div class="loader-circle-outline"></div>`,
      "50-dots-expanding": `<div class="loader-dots-expanding"><div></div><div></div><div></div><div></div><div></div></div>`,
      "51-skew-spin": `<div class="loader-skew-spin"></div>`,
      "52-parallel-lines": `<div class="loader-parallel-lines"><div></div><div></div><div></div><div></div><div></div></div>`,
      "53-circle-bounce-stretch": `<div class="loader-circle-bounce-stretch"><div></div><div></div><div></div></div>`,
      "54-double-square": `<div class="loader-double-square"></div>`,
      "55-scaling-dots": `<div class="loader-scaling-dots"><div></div><div></div><div></div></div>`,
      "56-rotate-plane": `<div class="loader-rotate-plane"></div>`,
      "57-dot-pulse-ring": `<div class="loader-dot-pulse-ring"></div>`,
      "58-three-lines": `<div class="loader-three-lines"><div></div><div></div><div></div></div>`,
      "59-circle-orbit": `<div class="loader-circle-orbit"><div></div><div></div></div>`,
      "60-expanding-square": `<div class="loader-expanding-square"></div>`,
      "61-dot-fade": `<div class="loader-dot-fade"></div>`,
      "62-triangle-pulse": `<div class="loader-triangle-pulse"></div>`,
      "63-line-wave": `<div class="loader-line-wave"><div></div><div></div><div></div><div></div><div></div></div>`,
      "64-concentric-circles": `<div class="loader-concentric-circles"><div></div><div></div></div>`,
      "65-dot-spinner": `<div class="loader-dot-spinner"></div>`,
      "66-horizontal-progress": `<div class="loader-horizontal-progress"></div>`,
      "67-square-bounce": `<div class="loader-square-bounce"></div>`,
      "68-cube-bounce-alt": `<div class="loader-cube-bounce-alt"></div>`,
      "69-dot-grid-bounce": `<div class="loader-dot-grid-bounce">${'<div></div>'.repeat(9)}</div>`,
      "70-border-grow": `<div class="loader-border-grow"></div>`,
      "71-flip-square-diagonal": `<div class="loader-flip-square-diagonal"></div>`,
      "72-pulse-square": `<div class="loader-pulse-square"></div>`,
      "73-dot-spread-ring": `<div class="loader-dot-spread-ring">${'<div></div>'.repeat(8)}</div>`,
      "74-line-scale-pulse-out": `<div class="loader-line-scale-pulse-out"><div></div><div></div><div></div><div></div><div></div></div>`,
      "75-square-spin-alt": `<div class="loader-square-spin-alt"></div>`,
      "76-dot-circle": `<div class="loader-dot-circle">${'<div></div>'.repeat(12)}</div>`,
      "77-square-trail": `<div class="loader-square-trail">${'<div></div>'.repeat(8)}</div>`,
      "78-border-circle-bounce": `<div class="loader-border-circle-bounce"></div>`,
      "79-line-grow": `<div class="loader-line-grow"><div></div><div></div><div></div><div></div><div></div></div>`,
      "80-box-fade": `<div class="loader-box-fade">${'<div></div>'.repeat(9)}</div>`,
      "81-multi-ring": `<div class="loader-multi-ring"></div>`,
      "82-circle-swirl": `<div class="loader-circle-swirl"></div>`,
      "83-pulse-ring-alt": `<div class="loader-pulse-ring-alt"></div>`,
      "84-square-dots": `<div class="loader-square-dots"><div></div><div></div><div></div><div></div></div>`,
      "85-line-sweep": `<div class="loader-line-sweep"></div>`,
      "86-triangle-spinner": `<div class="loader-triangle-spinner"></div>`,
      "87-dual-circle": `<div class="loader-dual-circle"></div>`,
      "88-dots-orbit-v2": `<div class="loader-dots-orbit-v2"><div></div><div></div><div></div></div>`,
      "89-corner-squares": `<div class="loader-corner-squares"><div></div><div></div><div></div><div></div></div>`,
      "90-line-wobble": `<div class="loader-line-wobble"></div>`,
      "91-plus-spinner": `<div class="loader-plus-spinner"></div>`,
      "92-dots-jump": `<div class="loader-dots-jump"><div></div><div></div><div></div></div>`,
      "93-square-fade": `<div class="loader-square-fade"></div>`,
      "94-border-spinner-partial": `<div class="loader-border-spinner-partial"></div>`,
      "95-line-bend": `<div class="loader-line-bend"></div>`,
      "96-dot-expanding-ring": `<div class="loader-dot-expanding-ring"></div>`,
      "97-square-orbit": `<div class="loader-square-orbit"><div></div></div>`,
      "98-line-scale-random": `<div class="loader-line-scale-random"><div></div><div></div><div></div><div></div><div></div></div>`,
      "99-circle-paths": `<div class="loader-circle-paths"><div></div><div></div></div>`,
      "100-folding-square": `<div class="loader-folding-square"><div class="square square1"></div><div class="square square2"></div><div class="square square3"></div><div class="square square4"></div></div>`,
      "101-double-wave": `<div class="loader-double-wave"><div></div><div></div><div></div></div>`,
      "102-circle-pulse-stretch": `<div class="loader-circle-pulse-stretch"></div>`,
      "103-line-chase": `<div class="loader-line-chase"></div>`,
      "104-dot-elastic-simple": `<div class="loader-dot-elastic-simple"></div>`,
      "105-square-grid-pulse": `<div class="loader-square-grid-pulse">${'<div></div>'.repeat(9)}</div>`,
      "106-border-rotate": `<div class="loader-border-rotate"></div>`,
      "107-line-scale-up": `<div class="loader-line-scale-up"><div></div><div></div><div></div><div></div><div></div></div>`,
      "108-double-spinner": `<div class="loader-double-spinner"></div>`,
      "109-dot-flashing-smooth": `<div class="loader-dot-flashing-smooth"></div>`,
      "110-square-shrink": `<div class="loader-square-shrink"></div>`,
      "111-line-bounce-elastic": `<div class="loader-line-bounce-elastic"><div></div><div></div><div></div><div></div><div></div></div>`,

      // --- Example New Loaders (112-125) ---
      "112-windmill-spin": `<div class="loader-windmill-spin"><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div></div>`,
      "113-newtons-cradle-dots": `<div class="loader-newtons-cradle-dots"><div class="cradle-dot"></div><div class="cradle-dot"></div><div class="cradle-dot"></div><div class="cradle-dot"></div><div class="cradle-dot"></div></div>`,
      "114-checkerboard-fade": `<div class="loader-checkerboard-fade">${'<div></div>'.repeat(9)}</div>`,
      "115-dna-helix-twist": `<div class="loader-dna-helix-twist"><div class="strand">${'<div></div>'.repeat(5)}</div><div class="strand">${'<div></div>'.repeat(5)}</div></div>`,
      "116-origami-unfold": `<div class="loader-origami-unfold"><div class="fold fold1"></div><div class="fold fold2"></div><div class="fold fold3"></div><div class="fold fold4"></div></div>`,
      "117-pacman-chase": `<div class="loader-pacman-chase"><div class="pacman"></div><div class="dot-food"></div></div>`,
      "118-radar-sweep": `<div class="loader-radar-sweep"><div class="center-dot"></div><div class="sweep-arm"></div></div>`,
      "119-shutter-effect": `<div class="loader-shutter-effect"><div class="shutter-slat"></div><div class="shutter-slat"></div><div class="shutter-slat"></div><div class="shutter-slat"></div><div class="shutter-slat"></div></div>`,
      "120-binary-code-stream": `<div class="loader-binary-code-stream">
            <div class="binary-column"><span>0</span><span>1</span><span>1</span><span>0</span><span>1</span></div>
            <div class="binary-column"><span>1</span><span>0</span><span>0</span><span>1</span><span>0</span></div>
            <div class="binary-column"><span>0</span><span>0</span><span>1</span><span>1</span><span>1</span></div>
            <div class="binary-column"><span>1</span><span>1</span><span>0</span><span>0</span><span>0</span></div>
            <div class="binary-column"><span>1</span><span>0</span><span>1</span><span>0</span><span>1</span></div>
        </div>`,
      "121-atom-orbit": `<div class="loader-atom-orbit"><div class="nucleus"></div><div class="electron-path"><div class="electron"></div></div><div class="electron-path"><div class="electron"></div></div><div class="electron-path"><div class="electron"></div></div></div>`,
      "122-snake-trail": `<div class="loader-snake-trail">${'<div class="snake-segment"></div>'.repeat(5)}</div>`,
      "123-book-flip": `<div class="loader-book-flip"><div class="page"></div><div class="page"></div><div class="page"></div></div>`,
      "124-yin-yang-spin": `<div class="loader-yin-yang-spin"><div class="dot1"></div><div class="dot2"></div></div>`,
      "125-sound-wave-bars-dynamic": `<div class="loader-sound-wave-bars-dynamic"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`,

      // --- IMPLEMENTED NEW LOADERS (126-130) ---
      "126-segmented-ring-fill": `<div class="loader-segmented-ring-fill"></div>`,
      "127-hypno-wheel": `<div class="loader-hypno-wheel"></div>`,
      "128-gear-system": `<div class="loader-gear-system"></div>`,
      "129-hexagon-spinner": `<div class="loader-hexagon-spinner"></div>`,
      "130-cogwheel-turn": `<div class="loader-cogwheel-turn"></div>`,

      // --- NEXT BATCH (131-140) - NEWLY IMPLEMENTED ---
      "131-torus-knot-spin": `<div class="loader-torus-knot-spin"></div>`,
      "132-propeller-blur": `<div class="loader-propeller-blur"></div>`,
      "133-galaxy-swirl": `<div class="loader-galaxy-swirl"></div>`,
      "134-spirograph-path": `<div class="loader-spirograph-path"></div>`,
      "135-broken-ring-spin": `<div class="loader-broken-ring-spin"></div>`,
      "136-heartbeat-pulse": `<div class="loader-heartbeat-pulse"></div>`,
      "137-sonar-ping": `<div class="loader-sonar-ping"></div>`,
      "138-droplet-ripple": `<div class="loader-droplet-ripple"></div>`,
      "139-breathing-square": `<div class="loader-breathing-square"></div>`,
      "140-cell-division": `<div class="loader-cell-division"></div>`,

      // --- Placeholder Loaders (141-200) - TO BE IMPLEMENTED ---
      "141-magnetic-field": `<div class="loader-magnetic-field"></div>`,
      "142-clock-pendulum": `<div class="loader-clock-pendulum"></div>`,
      "143-square-grid-wave-pulse": `<div class="loader-square-grid-wave-pulse">${'<div></div>'.repeat(16)}</div>`,
      "144-expanding-cross": `<div class="loader-expanding-cross"></div>`,
      "145-dna-double-helix": `<div class="loader-dna-double-helix"><div class="helix-strand"></div><div class="helix-strand"></div></div>`,
      "146-plasma-ball": `<div class="loader-plasma-ball"></div>`,
      "147-fibonacci-spiral": `<div class="loader-fibonacci-spiral"></div>`,
      "148-quantum-dots": `<div class="loader-quantum-dots"><div class="quantum-dot"></div><div class="quantum-dot"></div><div class="quantum-dot"></div></div>`,
      "149-ripple-wave": `<div class="loader-ripple-wave"><div class="wave-ring"></div><div class="wave-ring"></div><div class="wave-ring"></div><div class="wave-ring"></div></div>`,
      "150-morphing-blobs": `<div class="loader-morphing-blobs"><div class="blob"></div><div class="blob"></div><div class="blob"></div><div class="blob"></div></div>`,

      // --- Placeholder Loaders (151-200) - TO BE IMPLEMENTED ---
      "151-hologram-flicker": `<div class="loader-hologram-flicker"></div>`,
      "152-neuron-network": `<div class="loader-neuron-network"><div class="neuron"></div><div class="neuron"></div><div class="neuron"></div><div class="neuron"></div><div class="neuron"></div></div>`,
      "153-stretching-line-array": `<div class="loader-stretching-line-array"><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div>`,
      "154-angled-bar-march": `<div class="loader-angled-bar-march"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>`,
      "155-binary-stream-matrix": `<div class="loader-binary-stream-matrix"><div class="binary-stream">01</div><div class="binary-stream">10</div><div class="binary-stream">11</div><div class="binary-stream">00</div></div>`,
      "156-circuit-board-trace": `<div class="loader-circuit-board-trace"></div>`,
      "157-digital-rain-effect": `<div class="loader-digital-rain-effect"><div class="rain-drop">0</div><div class="rain-drop">1</div><div class="rain-drop">0</div><div class="rain-drop">1</div><div class="rain-drop">0</div></div>`,
      "158-laser-grid-scanner": `<div class="loader-laser-grid-scanner"></div>`,
      "159-electron-beam-sweep": `<div class="loader-electron-beam-sweep"></div>`,
      "160-glitch-text-effect": `<div class="loader-glitch-text-effect"></div>`,

      // --- Nature & Organic Loaders (161-170) - TO BE IMPLEMENTED ---
      "161-tree-branch-growth": `<div class="loader-tree-branch-growth">
                <div class="branch"></div>
                <div class="branch"></div>
                <div class="branch"></div>
                <div class="branch"></div>
            </div>`,
      "162-water-ripple-pool": `<div class="loader-water-ripple-pool">
                <div class="ripple"></div>
                <div class="ripple"></div>
                <div class="ripple"></div>
                <div class="ripple"></div>
            </div>`,
      "163-lightning-strike-flash": `<div class="loader-lightning-strike-flash">
                <div class="lightning"></div>
            </div>`,
      "164-flower-bloom-open": `<div class="loader-flower-bloom-open">
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
                <div class="petal"></div>
            </div>`,
      "165-spiral-galaxy-arm": `<div class="loader-spiral-galaxy-arm">
                <div class="arm"></div>
                <div class="arm"></div>
                <div class="arm"></div>
                <div class="arm"></div>
            </div>`,
      "166-leaf-fall-animation": `<div class="loader-leaf-fall-animation">
                <div class="leaf"></div>
                <div class="leaf"></div>
                <div class="leaf"></div>
            </div>`,
      "167-ocean-wave-crest": `<div class="loader-ocean-wave-crest">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>`,
      "168-fire-flame-flicker": `<div class="loader-fire-flame-flicker">
                <div class="flame"></div>
                <div class="flame"></div>
                <div class="flame"></div>
            </div>`,
      "169-cloud-formation": `<div class="loader-cloud-formation">
                <div class="cloud-part"></div>
                <div class="cloud-part"></div>
                <div class="cloud-part"></div>
                <div class="cloud-part"></div>
            </div>`,
      "170-snowflake-descent": `<div class="loader-snowflake-descent">
                <div class="snowflake">❄</div>
                <div class="snowflake">❅</div>
                <div class="snowflake">❆</div>
                <div class="snowflake">❄</div>
                <div class="snowflake">❅</div>
            </div>`,
      "171-bauhaus-circles-squares": `<div class="loader-bauhaus-circles-squares">
                <div class="shape circle"></div>
                <div class="shape square"></div>
                <div class="shape triangle"></div>
            </div>`,
      "172-chevron-flow": `<div class="loader-chevron-flow">
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
            </div>`,
      "173-dot-wave-2d": `<div class="loader-dot-wave-2d">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>`,
      "174-pixel-sort-abstract": `<div class="loader-pixel-sort-abstract">
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
                <div class="pixel-line"></div>
            </div>`,
      "175-molecular-dots": `<div class="loader-molecular-dots">
                <div class="molecule"></div>
                <div class="molecule"></div>
                <div class="molecule"></div>
            </div>`,
      "176-tesseract-fold-2d-projection": `<div class="loader-tesseract-fold-2d-projection">
                <div class="face"></div>
                <div class="face"></div>
                <div class="face"></div>
                <div class="face"></div>
            </div>`,
      "177-mondrian-blocks": `<div class="loader-mondrian-blocks">
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
                <div class="block"></div>
            </div>`,
      "178-kaleidoscope-effect": `<div class="loader-kaleidoscope-effect">
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
                <div class="segment"></div>
            </div>`,
      "179-impossible-triangle-illusion": `<div class="loader-impossible-triangle-illusion">
                <div class="side"></div>
                <div class="side"></div>
                <div class="side"></div>
            </div>`,
      "180-morphing-shapes": `<div class="loader-morphing-shapes">
                <div class="shape"></div>
            </div>`,
      "181-matrix-code-rain": `<div class="loader-matrix-code-rain">
                <div class="code-stream">1<br>0<br>1<br>1<br>0</div>
                <div class="code-stream">0<br>1<br>0<br>1<br>1</div>
                <div class="code-stream">1<br>1<br>0<br>0<br>1</div>
                <div class="code-stream">0<br>0<br>1<br>1<br>0</div>
                <div class="code-stream">1<br>0<br>1<br>0<br>1</div>
            </div>`,
      "182-cyberpunk-grid": `<div class="loader-cyberpunk-grid">
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
                <div class="grid-cell"></div>
            </div>`,
      "183-data-stream": `<div class="loader-data-stream">
                <div class="data-packet"></div>
                <div class="data-packet"></div>
                <div class="data-packet"></div>
                <div class="data-packet"></div>
                <div class="data-packet"></div>
            </div>`,
      "184-virtual-reality-portal": `<div class="loader-virtual-reality-portal">
                <div class="portal-ring"></div>
                <div class="portal-ring"></div>
                <div class="portal-ring"></div>
                <div class="portal-ring"></div>
            </div>`,
      "185-quantum-interference": `<div class="loader-quantum-interference">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>`,
      "186-holographic-distortion": `<div class="loader-holographic-distortion">
                <div class="holo-layer"></div>
                <div class="holo-layer"></div>
                <div class="holo-layer"></div>
            </div>`,
      "187-neural-pathway": `<div class="loader-neural-pathway">
                <div class="neuron-node"></div>
                <div class="neuron-node"></div>
                <div class="neuron-node"></div>
                <div class="connection"></div>
                <div class="connection"></div>
            </div>`,
      "188-digital-glitch-grid": `<div class="loader-digital-glitch-grid">
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
                <div class="glitch-pixel"></div>
            </div>`,
      "189-laser-maze": `<div class="loader-laser-maze">
                <div class="laser-beam"></div>
                <div class="laser-beam"></div>
                <div class="laser-beam"></div>
                <div class="laser-beam"></div>
            </div>`,
      "190-particle-accelerator": `<div class="loader-particle-accelerator">
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
                <div class="particle"></div>
            </div>`,
      "191-infinity-symbol-flow": `<div class="loader-infinity-symbol-flow"><div class="infinity-path"></div></div>`,

      // 192-200: Final placeholders
      "192-phoenix-rising": `<div class="loader-phoenix-rising"><div class="phoenix-body"></div><div class="phoenix-wing"></div><div class="phoenix-wing"></div><div class="flame-trail"></div></div>`,
      "193-mandala-expansion": `<div class="loader-mandala-expansion"><div class="mandala-ring"></div><div class="mandala-ring"></div><div class="mandala-ring"></div><div class="mandala-ring"></div></div>`,
      "194-time-portal": `<div class="loader-time-portal"><div class="time-ring"></div><div class="time-ring"></div><div class="time-ring"></div><div class="time-ring"></div><div class="time-particles"></div><div class="time-particles"></div><div class="time-particles"></div><div class="time-particles"></div></div>`,
      "195-crystal-formation": `<div class="loader-crystal-formation"><div class="crystal-facet"></div><div class="crystal-facet"></div><div class="crystal-facet"></div><div class="crystal-facet"></div><div class="crystal-core"></div></div>`,
      "196-aurora-wave": `<div class="loader-aurora-wave"><div class="aurora-band"></div><div class="aurora-band"></div><div class="aurora-band"></div><div class="aurora-band"></div></div>`,
      "197-cosmic-string": `<div class="loader-cosmic-string"><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div><div class="string-segment"></div></div>`,
      "198-dimensional-rift": `<div class="loader-dimensional-rift"><div class="rift-layer"></div><div class="rift-layer"></div><div class="rift-layer"></div><div class="rift-layer"></div><div class="rift-energy"></div><div class="rift-energy"></div></div>`,
      "199-energy-sphere": `<div class="loader-energy-sphere"><div class="sphere-core"></div><div class="energy-arc"></div><div class="energy-arc"></div><div class="energy-arc"></div><div class="energy-arc"></div><div class="energy-arc"></div></div>`,
      "200-ultimate-spinner": `<div class="loader-ultimate-spinner"><div class="ultimate-ring"></div><div class="ultimate-ring"></div><div class="ultimate-ring"></div><div class="ultimate-core"></div><div class="ultimate-ray"></div><div class="ultimate-ray"></div><div class="ultimate-ray"></div><div class="ultimate-ray"></div></div>`
    };

    // Element references
    const startScreen = document.getElementById("startScreen");
    const loaderOverlay = document.getElementById("loader");
    const loaderBox = document.getElementById("loaderBox");
    const debugPanel = document.getElementById("debugPanel");
    const presetSelect = document.getElementById("preset");
    const colorPicker = document.getElementById("colorPicker");
    const sizeSlider = document.getElementById("sizeSlider");
    const sizeValueSpan = document.getElementById("sizeValue");
    const startBtn = document.getElementById("startBtn");
    const hideLoaderBtn = document.getElementById("hideLoaderBtn");


    function populateLoaderOptions() {
        presetSelect.innerHTML = ''; // Clear existing options

        const sortedKeys = Object.keys(loaderHTML).sort((a, b) => {
            const getNum = (keyStr) => {
                const leadingMatch = keyStr.match(/^(\d+)(?:[\-_]|$)/);
                if (leadingMatch) return parseInt(leadingMatch[1]);
                const anyMatch = keyStr.match(/(\d+)/);
                if (anyMatch) return parseInt(anyMatch[1]) + 10000; // Penalize to sort after initial numbers
                return Infinity; // No numbers, will be sorted alphabetically after numbered ones
            };

            const numA = getNum(a);
            const numB = getNum(b);

            if (numA !== Infinity && numB !== Infinity && numA !== numB) {
                return numA - numB;
            }
            if (numA === numB) return a.localeCompare(b);
            if (numA === Infinity) return 1;
            if (numB === Infinity) return -1;
            return a.localeCompare(b);
        });

        sortedKeys.forEach((key) => {
            const option = document.createElement('option');
            option.value = key;

            // Extract number for prefixing
            const numMatch = key.match(/^(\d+)/);
            const numPrefix = numMatch ? numMatch[1] : '?';


            let readableText = key
                .replace(/^(\d+[\-_])?/, '')
                .replace(/[\-_]/g, ' ')
                .split(' ')
                .map(word => {
                    if (word.toLowerCase() === 'v2') return 'V2';
                    if (word && (isNaN(word) || word.length > 2) ) { // Capitalize if not a number or long number
                        return word.charAt(0).toUpperCase() + word.slice(1);
                    }
                    return word;
                })
                .join(' ');
            
            if (readableText) {
                readableText = readableText.charAt(0).toUpperCase() + readableText.slice(1);
            }

            option.textContent = `${numPrefix}. ${readableText}`;
            presetSelect.appendChild(option);
        });
    }


    function applyLoaderSettings() {
        const activeLoaderElement = loaderBox.firstElementChild;
        if (activeLoaderElement) {
            if (activeLoaderElement.classList.contains('loader-placeholder') && activeLoaderElement.firstElementChild) {
                 activeLoaderElement.firstElementChild.style.color = colorPicker.value;
            } else {
                activeLoaderElement.style.setProperty('--loader-color', colorPicker.value);

                // For DNA Helix, if a secondary color variable is defined in its CSS
                if (activeLoaderElement.classList.contains('loader-dna-helix-twist')) {
                    // You could add a second color picker for this, or derive it.
                    // For now, let's just set a slightly darker version for --loader-color-alt
                    let altColor = pSBC(-0.4, colorPicker.value); // Darken by 40%
                    activeLoaderElement.style.setProperty('--loader-color-alt', altColor || '#999');

                }
            }
        }
        loaderBox.style.transform = `scale(${sizeSlider.value})`;
        updateSizeValueText();
    }

    // Function to lighten or darken a hex color
    // pSBC (c) 2011-2013 Chris Veness Generate lighter or darker hues of a color
    // Usage: pSBC ( percentage_as_float, from_color_hex_string, to_color_hex_string [optional], linear_blend [optional] )
    const pSBC=(p,c0,c1,l)=>{
        let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
        if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
        if(!this.pSBCr)this.pSBCr=(d)=>{
            let n=d.length,x={};
            if(n>9){
                [r,g,b,a]=d=d.split(","),n=d.length;
                if(n<3||n>4)return null;
                x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
            }else{
                if(n==8||n==6||n<4)return null;
                if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
                d=i(d.slice(1),16);
                if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
                else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
            }return x};
        h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
        if(!f||!t)return null;
        if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
        else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
        a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
        if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
        else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
    }


    function updateSizeValueText() {
        const value = parseFloat(sizeSlider.value);
        let sizeText = "Medium";
        if (value < 0.75) sizeText = "X-Small";
        else if (value < 1.0) sizeText = "Small";
        else if (value > 1.0 && value < 1.25) sizeText = "Medium";
        else if (value >= 1.25 && value < 1.75) sizeText = "Large";
        else if (value >= 1.75 && value < 2.25) sizeText = "X-Large";
        else if (value >= 2.25) sizeText = "XX-Large";
        sizeValueSpan.textContent = `${sizeText} (${value.toFixed(2)}x)`;
    }


    function showSelectedLoader() {
      const selectedLoaderKey = presetSelect.value;
      const loaderHtmlString = loaderHTML[selectedLoaderKey];

      if (typeof loaderHtmlString === 'undefined') {
        console.error("Unknown or undefined loader type:", selectedLoaderKey);
        loaderBox.innerHTML = `<div class="loader-placeholder"><div>Error: Loader "${selectedLoaderKey}" not found.</div></div>`;
      } else {
         loaderBox.innerHTML = loaderHtmlString;
      }
      
      startScreen.style.display = "none";
      applyLoaderSettings();
      loaderOverlay.style.display = "flex";
    }

    function hideLoader() {
      loaderOverlay.style.display = "none";
      loaderBox.innerHTML = ""; 
      startScreen.style.display = "flex";
    }

    document.addEventListener('DOMContentLoaded', () => {
        populateLoaderOptions();
        updateSizeValueText();

        startBtn.addEventListener("click", showSelectedLoader);
        hideLoaderBtn.addEventListener("click", hideLoader);

        colorPicker.addEventListener("input", () => {
            if (loaderOverlay.style.display === "flex") applyLoaderSettings();
        });
        sizeSlider.addEventListener("input", () => {
            updateSizeValueText();
            if (loaderOverlay.style.display === "flex") applyLoaderSettings();
        });

        presetSelect.addEventListener("change", () => {
            if (loaderOverlay.style.display === "flex") {
                showSelectedLoader();
            }
        });

        debugPanel.style.display = "block";

        loaderOverlay.addEventListener('click', (event) => {
            if (event.target === loaderOverlay) {
                hideLoader();
            }
        });

        const loaderContainer = document.getElementById('loaderContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const totalLoaders = 100; // Assuming 100 loaders exist based on HTML structure
        let currentIndex = 0;

        // Initially show only the first loader
        showLoader(currentIndex);

        function showLoader(index) {
            // Hide all loaders
            for (let i = 0; i < totalLoaders; i++) {
                const loader = document.querySelector(`.loader-container:nth-child(${i + 1})`);
                if (loader) {
                    loader.style.display = 'none';
                }
            }
            // Show the selected loader
            const selectedLoader = document.querySelector(`.loader-container:nth-child(${index + 1})`);
            if (selectedLoader) {
                selectedLoader.style.display = 'flex'; // Or block, depending on desired layout
            }
            // Update button states
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === totalLoaders - 1;
        }

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                showLoader(currentIndex);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalLoaders - 1) {
                currentIndex++;
                showLoader(currentIndex);
            }
        });
    }); 