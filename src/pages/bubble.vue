<template>
 
  <div class="fond">
    <p  v-if="showCanvas" style="font-size:xx-large;">Cliquez sur la bulle {{ randomColorName }}</p>
    <canvas 
      ref="canvasRef" 
      width="350" 
      height="350" 
      style="border: 1px solid black;" 
      @click="handleClick"
      v-if="showCanvas"
    ></canvas>
    <div v-if="!showCanvas" class="finish">
    <img  src="/src/assets/je-valide.gif">
    <ComponentButton  title="Validation" type="submit" id="validerQuestionnaire" />
    </div>
  </div>

</template>
  
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import ComponentButton from "../components/Button.vue";
  
  const canvasRef = ref<HTMLCanvasElement | null>(null);
  const randomColorName = ref<string>('');
  const isValidated = ref(false);
  const showCanvas = ref(true);
  interface Bubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  angle: number;
  colorIndex: number;
}
const bubbles = ref<Bubble[]>(createInitialBubbles());

  // Liste des couleurs pour les bulles
 const colors = [
    { name: "Rouge", light: 'rgba(255, 100, 100, 0.8)', medium: 'rgba(255, 0, 0, 0.5)', dark: 'rgba(139, 0, 0, 0.2)' }, 
    { name: "Vert", light: 'rgba(100, 255, 100, 0.8)', medium: 'rgba(0, 255, 0, 0.5)', dark: 'rgba(0, 100, 0, 0.2)' },  
    { name: "Bleu", light: 'rgba(100, 100, 255, 0.8)', medium: 'rgba(0, 0, 255, 0.5)', dark: 'rgba(0, 0, 139, 0.2)' }   
  ];
 
   // Paramètres des bulles
   function createInitialBubbles(): Bubble[] {return [
    { x: 150, y: 150, radius: 50, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 0 }, 
    { x: 250, y: 250, radius: 40, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 1 }, 
    { x: 250, y: 100, radius: 45, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 2 }  
  ]}

  //fonction qui permet de donner une coueleur aleatoire de bulle 
  function getRandomColorName() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex].name;
  }
 
  // Dessine les bulles
  function drawBubble(context: CanvasRenderingContext2D, bubble: any) {
    const bubbleColor = colors[bubble.colorIndex];
  
    const gradient = context.createRadialGradient(
      bubble.x - 20, bubble.y - 20, 10, 
      bubble.x, bubble.y, bubble.radius
    );

    gradient.addColorStop(0, bubbleColor.light);  
    gradient.addColorStop(0.4, bubbleColor.medium); 
    gradient.addColorStop(1, bubbleColor.dark);     
  
    context.beginPath();
    context.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
    context.fillStyle = gradient;
    context.fill();

  }
  
  // Fonction pour mettre à jour la position des bulles
  function updateBubbles() {
    bubbles.value.forEach((bubble) => {
      bubble.x += bubble.speed * Math.cos(bubble.angle);
      bubble.y += bubble.speed * Math.sin(bubble.angle);

       // Collisions avec les bords du canvas
      if (bubble.x + bubble.radius > 350 || bubble.x - bubble.radius < 0) {
        bubble.angle = Math.PI - bubble.angle; 
        bubble.angle += Math.random() * 0.2 - 0.1; 
      }
      if (bubble.y + bubble.radius > 350 || bubble.y - bubble.radius < 0) {
        bubble.angle = -bubble.angle;
        bubble.angle += Math.random() * 0.2 - 0.1; 
      }
    });
  }

  function handleClick(event: MouseEvent) {
    if (!canvasRef.value) return;

    const canvas = canvasRef.value;
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Vérifier si le clic est dans une bulle
    bubbles.value = bubbles.value.filter((bubble) => {
      const distance = Math.sqrt((bubble.x - clickX) ** 2 + (bubble.y - clickY) ** 2);
      if (distance <= bubble.radius) {
      // Vérifier si la couleur de la bulle correspond à randomColorName
      const bubbleColor = colors[bubble.colorIndex].name;
      if (bubbleColor === randomColorName.value) {
        isValidated.value = true;  
        showCanvas.value = false; 
        localStorage.setItem('response', 'true')
        return false; 
      } else {
        resetCanvas();  
        return true; 
      }
    }
    return true; 
    });
  }

  function resetCanvas() {
    bubbles.value = [
      { x: 150, y: 150, radius: 50, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 0 },
      { x: 350, y: 350, radius: 40, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 1 },
      { x: 250, y: 100, radius: 45, speed: 0.5, angle: Math.random() * Math.PI * 2, colorIndex: 2 }
    ];
    animateBubbles();
  }
  
  function animateBubbles() {
    if (!showCanvas.value) return;
    const canvas = canvasRef.value;
    if (!canvas) return;  
    const context = canvas.getContext('2d');
    if (!context) return;
    context.clearRect(0, 0, 500, 500); 
    
    bubbles.value.forEach((bubble) => drawBubble(context, bubble));
    updateBubbles();
    
    requestAnimationFrame(animateBubbles); 
  }
 
  onMounted(() => {
    randomColorName.value = getRandomColorName();
    if (canvasRef.value) {
      animateBubbles();
    } else {
      console.error("Canvas introuvable !");
    }
  });
</script>
  
<style scoped>
  .fond {
    display: flex;
    padding: 25px;
    flex-direction: column;
    gap: 20px;
    border-radius: 12px;
    align-items: center;
    width: 700px;
    background-color: #4da1a938;
  }

  canvas {
    display: block;
    max-width: 50%;
    background: #fff;
  }
</style>
  