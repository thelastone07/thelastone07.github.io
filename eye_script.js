const canvas = document.getElementById('pixelCanvas');
const ctx = canvas.getContext('2d');
const img = document.getElementById('sourceImg');

const pixelSize = 50;
const maxVelocity = 30;
let mouse = { x: -1000, y: -1000 };
let velocity = { x: 0, y: 0 };
let originalData, pixelGrid = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}


function drawPixelatedImage() {
    
    const scale = Math.max(
        canvas.width / img.naturalWidth,
        canvas.height / img.naturalHeight
    );

    const scaledWidth = img.naturalWidth * scale;
    const scaledHeight = img.naturalHeight * scale;
    
 
    ctx.drawImage(
        img,
        0, 0, img.naturalWidth, img.naturalHeight,
        (canvas.width - scaledWidth) / 2,
        (canvas.height - scaledHeight) / 2,
        scaledWidth,
        scaledHeight
    );

   
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            const sampleX = Math.min(x + pixelSize/2, canvas.width-1);
            const sampleY = Math.min(y + pixelSize/2, canvas.height-1);
            const i = ((sampleY * canvas.width) + sampleX) * 4;
            
            ctx.fillStyle = `rgb(${imgData.data[i]},${imgData.data[i+1]},${imgData.data[i+2]})`;
            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
}

function initPixelGrid() {
    pixelGrid = [];
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    for (let y = 0; y < canvas.height; y += pixelSize) {
        for (let x = 0; x < canvas.width; x += pixelSize) {
            const i = ((y + pixelSize/2) * canvas.width + (x + pixelSize/2)) * 4;
            pixelGrid.push({
                x, y,
                r: imgData.data[i],
                g: imgData.data[i+1],
                b: imgData.data[i+2],
                dx: 0, dy: 0
            });
        }
    }
    originalData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;
    
    velocity.x = Math.min(maxVelocity, Math.max(-maxVelocity, newX - mouse.x));
    velocity.y = Math.min(maxVelocity, Math.max(-maxVelocity, newY - mouse.y));
    mouse = { x: newX, y: newY };
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawPixelatedImage();
    
    pixelGrid.forEach(pixel => {
        const dx = pixel.x - mouse.x;
        const dy = pixel.y - mouse.y;
        const distSq = dx*dx + dy*dy;
        
        if (distSq < 10000) { 
            const force = 1 - (distSq / 10000);
            const amp = force * force * 0.4;
            
            pixel.dx += velocity.x * amp;
            pixel.dy += velocity.y * amp;
        }
        
        pixel.dx *= 0.85;
        pixel.dy *= 0.85;
        
        ctx.fillStyle = `rgb(${pixel.r},${pixel.g},${pixel.b})`;
        ctx.fillRect(
            pixel.x + pixel.dx,
            pixel.y + pixel.dy,
            pixelSize,
            pixelSize
        );
    });

    requestAnimationFrame(animate);
}

img.onload = () => {
    resizeCanvas();
    drawPixelatedImage();
    initPixelGrid();
    animate();
};

window.addEventListener('resize', () => {
    resizeCanvas();
    drawPixelatedImage();
    initPixelGrid();
});
