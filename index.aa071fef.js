const t=new class{constructor(t){this.defaultState=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],this.board=t||JSON.parse(JSON.stringify(this.defaultState)),this.score=0,this.status="idle"}arraysEqual(t,e){if(t.length!==e.length)return!1;for(let s=0;s<t.length;s++)if(t[s]!==e[s])return!1;return!0}moveLeft(){let t=!1;for(let e=0;e<4;e++){let s=this.board[e].filter(t=>0!==t);for(let e=0;e<s.length-1;e++)s[e]===s[e+1]&&(s[e]*=2,this.score+=s[e],s[e+1]=0,t=!0);for(s=s.filter(t=>0!==t);s.length<4;)s.push(0);this.arraysEqual(this.board[e],s)||(t=!0),this.board[e]=s}"playing"===this.status&&t&&this.addRandomTile()}moveRight(){let t=!1;for(let e=0;e<4;e++){let s=this.board[e].slice().reverse().filter(t=>0!==t);for(let e=0;e<s.length-1;e++)s[e]===s[e+1]&&(s[e]*=2,this.score+=s[e],s[e+1]=0,t=!0);for(s=s.filter(t=>0!==t);s.length<4;)s.push(0);s.reverse(),this.arraysEqual(this.board[e],s)||(t=!0),this.board[e]=s}"playing"===this.status&&t&&this.addRandomTile()}moveUp(){let t=!1;for(let e=0;e<4;e++){let s=[];for(let t=0;t<4;t++)0!==this.board[t][e]&&s.push(this.board[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,this.score+=s[e],s[e+1]=0,t=!0);for(s=s.filter(t=>0!==t);s.length<4;)s.push(0);this.arraysEqual(this.board.map(t=>t[e]),s)||(t=!0);for(let t=0;t<4;t++)this.board[t][e]=s[t]}"playing"===this.status&&t&&this.addRandomTile()}moveDown(){let t=!1;for(let e=0;e<4;e++){let s=[];s.reverse();for(let t=0;t<4;t++)0!==this.board[t][e]&&s.push(this.board[t][e]);for(let e=0;e<s.length;e++)s[e]===s[e+1]&&(s[e]*=2,this.score+=s[e],s[e+1]=0,t=!0);for((s=s.filter(t=>0!==t)).reverse();s.length<4;)s.push(0);for(let t=0;t<4;t++)this.board[t][e]=s[3-t]}"playing"===this.status&&t&&this.addRandomTile()}getScore(){return this.score}getState(){return this.board}getStatus(){return"idle"===this.status?"idle":this.checkWin()?"win":this.checkLose()?"lose":"playing"}checkWin(){return this.board.some(t=>t.includes(2048))}checkLose(){if(this.board.some(t=>t.includes(0)))return!1;for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(e<3&&this.board[t][e]===this.board[t][e+1]||t<3&&this.board[t][e]===this.board[t+1][e])return!1;return!0}start(){this.board=JSON.parse(JSON.stringify(this.defaultState)),this.score=0,this.status="playing",this.addRandomTile(),this.addRandomTile()}addRandomTile(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.board[e][s]&&t.push({row:e,col:s});if(t.length>0){let{row:e,col:s}=t[Math.floor(Math.random()*t.length)];this.board[e][s]=.9>Math.random()?2:4}}restart(){return this.start()}};function e(){let e=t.getState();document.querySelectorAll(".field-row").forEach((t,s)=>{t.querySelectorAll(".field-cell").forEach((t,r)=>{let a=e[s][r];t.textContent=0===a?"":a,t.className="field-cell",0!==a&&t.classList.add(`field-cell--${a}`)})}),document.querySelector(".game-score").textContent=t.getScore(),function(){let e=t.getStatus(),s=document.querySelector(".message-start"),r=document.querySelector(".message-win"),a=document.querySelector(".message-lose");s.classList.add("hidden"),r.classList.add("hidden"),a.classList.add("hidden"),"idle"===e?s.classList.remove("hidden"):"win"===e?r.classList.remove("hidden"):"lose"===e&&a.classList.remove("hidden")}()}document.addEventListener("keydown",s=>{switch(s.key){case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown();break;case"ArrowLeft":t.moveLeft();break;case"ArrowRight":t.moveRight();break;default:return 0}e()});const s=document.querySelector(".start");s.addEventListener("click",()=>{s.classList.contains("start")&&(s.classList.replace("start","restart"),s.textContent="Restart"),t.start(),e()});
//# sourceMappingURL=index.aa071fef.js.map