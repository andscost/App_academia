
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('canvas');
    const style = getComputedStyle(canvas)
    const ctx = canvas.getContext('2d');
    var dict = {'push':[.25,'red'], 'pull':[.15,'blue'],'perna':[.3,'green'],'abdomem':[.1,'yellow'],'cardio':[.2,'pink']}
    let comeco = 0
    let termino = 0
    let raio = 50;
    let grossura = 25;  
    let x  = raio+grossura
    let y = raio+grossura                    
    for (let modelo of Object.values(dict)) {
        ctx.beginPath();
        comeco = termino;
        termino += modelo[0]*Math.PI*2;                   
        ctx.arc(x, y, raio, comeco, termino);
        ctx.lineWidth = grossura
        ctx.strokeStyle = modelo[1];
        ctx.stroke();
    }
})

