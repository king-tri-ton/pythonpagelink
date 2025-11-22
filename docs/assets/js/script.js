// Jarvis Theme Script with Radar Detector
console.log('🤖 Jarvis theme initialized');

// Update copyright year
const yearElement = document.querySelector('.year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add focus effect on keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-nav');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-nav');
});

// ============================================
// RADAR DETECTOR SYSTEM
// ============================================

// Create canvas for radar
const canvas = document.createElement('canvas');
canvas.id = 'radar-canvas';
document.body.insertBefore(canvas, document.body.firstChild);
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Radar settings
const radar = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.6,
  sweepAngle: 0,
  sweepSpeed: 0.01,
  rings: 4
};

// Blips (detected objects)
const blips = [];
const maxBlips = 8;

class Blip {
  constructor() {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radar.maxRadius * 0.8 + radar.maxRadius * 0.1;
    
    this.x = radar.x + Math.cos(angle) * distance;
    this.y = radar.y + Math.sin(angle) * distance;
    this.radius = 3;
    this.opacity = 1;
    this.fadeSpeed = 0.015;
    this.color = Math.random() > 0.3 ? '#00d9ff' : '#ff3366'; // 70% blue, 30% red
    this.pulsePhase = Math.random() * Math.PI * 2;
  }
  
  update() {
    this.opacity -= this.fadeSpeed;
    this.pulsePhase += 0.1;
  }
  
  draw() {
    const pulse = Math.sin(this.pulsePhase) * 2 + 3;
    ctx.globalAlpha = this.opacity;
    
    // Outer glow
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulse * 3);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulse * 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner dot
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, pulse, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
  }
  
  isAlive() {
    return this.opacity > 0;
  }
}

// Add new blip randomly
function addBlip() {
  if (blips.length < maxBlips && Math.random() < 0.02) {
    blips.push(new Blip());
  }
}

// Draw radar rings
function drawRadarRings() {
  ctx.strokeStyle = 'rgba(0, 217, 255, 0.1)';
  ctx.lineWidth = 1;
  
  for (let i = 1; i <= radar.rings; i++) {
    const radius = (radar.maxRadius / radar.rings) * i;
    ctx.beginPath();
    ctx.arc(radar.x, radar.y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Crosshair
  ctx.beginPath();
  ctx.moveTo(radar.x - radar.maxRadius, radar.y);
  ctx.lineTo(radar.x + radar.maxRadius, radar.y);
  ctx.moveTo(radar.x, radar.y - radar.maxRadius);
  ctx.lineTo(radar.x, radar.y + radar.maxRadius);
  ctx.stroke();
}

// Draw radar sweep
function drawRadarSweep() {
  const gradient = ctx.createRadialGradient(
    radar.x, radar.y, 0,
    radar.x, radar.y, radar.maxRadius
  );
  
  gradient.addColorStop(0, 'rgba(0, 217, 255, 0.3)');
  gradient.addColorStop(0.5, 'rgba(0, 217, 255, 0.15)');
  gradient.addColorStop(1, 'transparent');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(radar.x, radar.y);
  ctx.arc(radar.x, radar.y, radar.maxRadius, radar.sweepAngle - 0.3, radar.sweepAngle);
  ctx.lineTo(radar.x, radar.y);
  ctx.fill();
}

// Animation loop
function animate() {
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Update radar position (center of screen)
  radar.x = canvas.width / 2;
  radar.y = canvas.height / 2;
  
  // Draw radar elements
  drawRadarRings();
  drawRadarSweep();
  
  // Update and draw blips
  addBlip();
  for (let i = blips.length - 1; i >= 0; i--) {
    blips[i].update();
    blips[i].draw();
    
    if (!blips[i].isAlive()) {
      blips.splice(i, 1);
    }
  }
  
  // Update sweep angle
  radar.sweepAngle += radar.sweepSpeed;
  if (radar.sweepAngle > Math.PI * 2) {
    radar.sweepAngle = 0;
  }
  
  requestAnimationFrame(animate);
}

// Start animation
animate();