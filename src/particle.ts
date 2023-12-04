import { Canvas } from "./canvas";

export enum Color {
    RED = "#ff0000",
    ORANGE = "#ff7f00",
    YELLOW = "#ffff00",
    GREEN = "#00ff00",
    BLUE = "#0000ff",
    CYAN = "#7fffff",
    MAGENTA = "#a10c8b",
    PINK = "#ff00ff",
    WHITE = "#ffffff"
}

export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    c: Color;
}

export function particle(n: number, c: Color, r = 1): Particle[] {
    const group: Particle[] = [];
    for (let i = 0;i < n;i++) {
        group.push({
            "x": Canvas.element.width * Math.random(),
            "y": Canvas.element.height * Math.random(),
            "vx": 0,
            "vy": 0,
            "r": r,
            "c": c
        });
    }
    return group;
}

export function rule(g1: Particle[], g2: Particle[], attraction: number) {
    for (const p1 of g1) {
        let fx = 0;
        let fy = 0;

        for (const p2 of g2) {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;

            const D = Math.sqrt(dx * dx + dy * dy);
            const F = attraction * (p1.r / D);

            if (D > 0 && D < 100) { // Dont attract self
                fx += F * dx;
                fy += F * dy;
            }
        }

        p1.vx = (p1.vx + fx) * 0.5;
        p1.vy = (p1.vy + fy) * 0.5;
        
        const nx = p1.x + p1.vx;
        const ny = p1.y + p1.vy;

        if (nx <= 0 || nx >= Canvas.element.width) p1.vx *= -1;
        if (ny <= 0 || ny >= Canvas.element.height) p1.vy *= -1;

        p1.x += p1.vx;
        p1.y += p1.vy;
    }
}

export function draw(group: Particle[]) {
    for (const p of group) {
        Canvas.ctx.beginPath();
        Canvas.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        Canvas.ctx.fillStyle = p.c;
        Canvas.ctx.fill();
        Canvas.ctx.closePath();
    }
}