<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>IRONPS GTPS v8</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap');
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;
    background: black !important;
    overflow-x: hidden;
}
canvas { position: fixed; top:0; left:0; width:100%; height:100%; z-index:-2; }
.aurora {
    position: fixed; top:0; left:0; width:100%; height:100%;
    background: radial-gradient(circle at 50% 50%, rgba(0,255,255,0.15), transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(255,0,255,0.15), transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(0,255,0,0.15), transparent 60%);
    animation: auroraMove 10s ease-in-out infinite alternate;
    z-index: -1;
}
@keyframes auroraMove { 0%{transform:translateY(0px);} 100%{transform:translateY(-30px);} }
h1 {
    font-size: 3em;
    background: linear-gradient(270deg, red, lime, cyan, magenta, red);
    background-size: 800% 800%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: rgbMove 8s ease infinite, pulseGlow 2s infinite;
    margin-top: 50px;
}
@keyframes rgbMove {0%{background-position:0% 50%;}50%{background-position:100% 50%;}100%{background-position:0% 50%;}}
@keyframes pulseGlow {0%,100%{text-shadow:0 0 10px white;}50%{text-shadow:0 0 25px white;}}
.status {
    background: rgba(0,255,0,0.15);
    padding: 10px 25px;
    display: inline-block;
    border-radius: 15px;
    font-weight: bold;
    margin: 20px 0;
    box-shadow: 0 0 15px rgba(0,255,0,0.5);
    border: 1px solid lime;
    animation: pulse 1.5s infinite;
}
@keyframes pulse {0%{box-shadow:0 0 10px rgba(0,255,0,0.4);}50%{box-shadow:0 0 20px rgba(0,255,0,1);}100%{box-shadow:0 0 10px rgba(0,255,0,0.4);}}
.download-btn {
    display: block; margin: 10px auto; padding: 12px 25px;
    background: rgba(0,255,255,0.15); border: 1px solid cyan; color: cyan;
    font-weight: bold; border-radius: 8px; text-decoration: none; width: 250px;
}
.download-btn:hover {background: cyan; color: black;}
pre {
    background: rgba(20,20,20,0.8);
    padding: 12px; border-radius: 8px; text-align: left; display: inline-block;
    color: #0ff; border: 1px solid rgba(0,255,255,0.3);
}
.event-box {
    margin: 20px auto; padding: 20px; max-width: 500px;
    background: rgba(255,255,255,0.05); border-radius: 15px;
    box-shadow: 0 0 15px rgba(0,255,255,0.3);
}
button {
    padding: 10px 15px; font-size: 1.1em; border: none;
    background: cyan; color: black; font-weight: bold;
    border-radius: 8px; cursor: pointer; box-shadow: 0 0 10px cyan;
}
</style>
</head>
<body>

<canvas id="stars"></canvas>
<div class="aurora"></div>

<h1>IRONPS GTPS</h1>
<div class="status">🟢 Server Status: Online | 👥 152 Players</div>

<a href="https://www.mediafire.com/file/s85a1d9m5byepy1/IRONPS.txt/file" class="download-btn">📥 Download Vhost</a>
<a href="https://growsoft.cc/android.txt" class="download-btn">📥 Download Ptunnel (Android)</a>

<h3>📋 Copy Host untuk Windows</h3>
<pre id="hostText">
91.134.85.13 growtopia1.com
91.134.85.13 growtopia2.com
91.134.85.13 www.growtopia1.com
91.134.85.13 www.growtopia2.com
</pre><br>
<button onclick="copyHost()">Salin Host</button>

<!-- 🎰 Gacha Angka -->
<div class="event-box">
<h2>🎰 Gacha Angka</h2>
<p>Menang jika dapat angka <b>0</b> (Peluang: 10%)</p>
<div id="gachaResult" style="font-size:2em; font-weight:bold; margin:15px 0; color:yellow;">-</div>
<button onclick="playGacha()">Main Gacha</button>
<p id="gachaMessage"></p>
</div>

<!-- 🔢 Tebak Angka -->
<div class="event-box">
<h2>🔢 Tebak Angka</h2>
<p>Masukkan angka 0–9. Jika benar, kamu menang! (Peluang: 10%)</p>
<input type="number" id="guessInput" min="0" max="9" style="width:80px; text-align:center;">
<button onclick="guessNumber()">Tebak</button>
<p id="guessMessage"></p>
</div>

<!-- ⚡ Klik Cepat -->
<div class="event-box">
<h2>⚡ Klik Cepat</h2>
<p>Klik tombol sebelum waktu habis untuk menang! (Peluang: 10%)</p>
<button onclick="startClickGame()">Mulai Game</button>
<p id="clickMessage"></p>
</div>

<!-- 📖 Petunjuk Main -->
<div class="event-box">
<h2>📖 Petunjuk Cara Main</h2>
<p><b>🇮🇩 Indonesia:</b></p>
<ol style="text-align:left; display:inline-block;">
<li>Download Vhost & Ptunnel.</li>
<li>Pasang IP Host di file host perangkat.</li>
<li>Buka Growtopia.</li>
<li>Selamat bermain di IRONPS GTPS!</li>
</ol>
<p><b>🇺🇸 English:</b></p>
<ol style="text-align:left; display:inline-block;">
<li>Download Vhost & Ptunnel.</li>
<li>Set the Host IP in your device's hosts file.</li>
<li>Open Growtopia.</li>
<li>Enjoy playing on IRONPS GTPS!</li>
</ol>
</div>

<!-- Footer -->
<footer style="margin-top:40px; padding:15px; background:rgba(255,255,255,0.05); border-top:1px solid rgba(255,255,255,0.1); color:cyan;">
📌 Owner & Website Creator: <b>@Alvin</b> | 📞 WA: 6288279073491
</footer>

<script>
function copyHost() {
    navigator.clipboard.writeText(document.getElementById("hostText").innerText);
    alert("Host berhasil disalin!");
}
function playGacha() {
    let res = document.getElementById('gachaResult');
    let msg = document.getElementById('gachaMessage');
    res.style.color = "yellow"; msg.textContent = "";
    let count = 0;
    let spin = setInterval(()=>{
        res.textContent = Math.floor(Math.random()*10);
        if(count++>15){ clearInterval(spin);
            if(Math.random()<0.10){
                res.textContent="0"; res.style.color="lime";
                msg.style.color="lime";
                msg.innerHTML="🎉 Menang! Screenshot & hubungi Owner WA: <b>6288279073491</b>";
            } else {
                res.textContent=Math.floor(Math.random()*9)+1; res.style.color="red";
                msg.style.color="red"; msg.textContent="😢 Coba lagi!";
            }
        }
    },80);
}
function guessNumber(){
    let input=document.getElementById('guessInput').value;
    let msg=document.getElementById('guessMessage');
    if(input===""){ msg.textContent="Masukkan angka!"; return; }
    if(Math.random()<0.10){
        msg.style.color="lime";
        msg.innerHTML="🎉 Benar! Screenshot & hubungi Owner WA: <b>6288279073491</b>";
    } else {
        msg.style.color="red"; msg.textContent="😢 Salah, coba lagi!";
    }
}
function startClickGame(){
    let msg=document.getElementById('clickMessage');
    msg.textContent="Tunggu..."; msg.style.color="yellow";
    setTimeout(()=>{
        msg.innerHTML='<button onclick="winClickGame()">Klik Sekarang!</button>';
        setTimeout(()=>{
            msg.style.color="red"; msg.textContent="😢 Terlambat!";
        },1000);
    },Math.random()*2000+1000);
}
function winClickGame(){
    let msg=document.getElementById('clickMessage');
    if(Math.random()<0.10){
        msg.style.color="lime";
        msg.innerHTML="🎉 Menang! Screenshot & hubungi Owner WA: <b>6288279073491</b>";
    } else {
        msg.style.color="red"; msg.textContent="😢 Sayang sekali, coba lagi!";
    }
}

// Background Stars
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
function resizeCanvas(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
resizeCanvas(); window.addEventListener('resize', resizeCanvas);
let stars = [];
function createStars(){
    stars=[]; 
    for(let i=0;i<150;i++){
        stars.push({
            x:Math.random()*canvas.width, y:Math.random()*canvas.height,
            radius:Math.random()*1.5, color:`hsl(${Math.random()*360},100%,80%)`,
            speed:Math.random()*0.5
        });
    }
}
function drawStars(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(star=>{
        ctx.beginPath(); ctx.fillStyle=star.color;
        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2); ctx.fill();
    });
}
function moveStars(){
    stars.forEach(star=>{
        star.y+=star.speed;
        if(star.y>canvas.height){ star.y=0; star.x=Math.random()*canvas.width; }
    });
}
function animate(){ drawStars(); moveStars(); requestAnimationFrame(animate); }
createStars(); animate();
</script>
</body>
</html>
