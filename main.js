<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" fill="none">
  <!-- Gradient Definitions -->
  <defs>
    <linearGradient id="barGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#5B21B6;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glowGradient" cx="50%" cy="50%">
      <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFA500;stop-opacity:0" />
    </radialGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background Circle (subtle) -->
  <circle cx="200" cy="200" r="180" fill="#F5F3FF" opacity="0.3"/>
  
  <!-- Progression Bars - representing spiritual growth -->
  <g transform="translate(200, 250)">
    <!-- Bar 1 - shortest -->
    <rect x="-90" y="0" width="25" height="40" rx="5" fill="url(#barGradient)" opacity="0.6"/>
    
    <!-- Bar 2 - medium -->
    <rect x="-45" y="-30" width="25" height="70" rx="5" fill="url(#barGradient)" opacity="0.75"/>
    
    <!-- Bar 3 - tall -->
    <rect x="0" y="-60" width="25" height="100" rx="5" fill="url(#barGradient)" opacity="0.9"/>
    
    <!-- Bar 4 - tallest -->
    <rect x="45" y="-85" width="25" height="125" rx="5" fill="url(#barGradient)"/>
    
    <!-- Golden glow on top of tallest bar -->
    <circle cx="57.5" cy="-88" r="12" fill="url(#glowGradient)"/>
    <circle cx="57.5" cy="-88" r="6" fill="#FFD700"/>
  </g>
  
  <!-- Text "3ibada" with GOLDEN color matching the glow -->
  <text x="200" y="295" 
        font-family="'Cormorant Garamond', serif" 
        font-size="68" 
        font-weight="600" 
        text-anchor="middle" 
        fill="url(#goldGradient)" 
        filter="url(#shadow)">3ibada</text>
  
  <!-- Tagline "Mesurez votre progression" -->
  <text x="200" y="325" 
        font-family="'Manrope', sans-serif" 
        font-size="18" 
        font-weight="400" 
        text-anchor="middle" 
        fill="#8B5CF6" 
        opacity="0.8" 
        font-style="italic">Mesurez votre progression</text>
</svg>
