import { Canvas } from "./canvas";
import { Color, draw, particle, rule } from "./particle";

const RANDOM_SETTINGS = true;



if (RANDOM_SETTINGS) {
    let la = new Map();

    window.addEventListener("keydown", event => {
        if (event.key == " ") {
            const exportCode = prompt("Enter export code:");
            
            try {
                alert(JSON.stringify(Object.fromEntries(la.entries())))
                const data = JSON.parse(window.atob(exportCode || ""));
                la = new Map(Object.entries(data));
                alert(JSON.stringify(Object.fromEntries(la.entries())))
            } catch {
                try {
                    const data = JSON.parse(exportCode || "");
                    la = new Map(Object.entries(data));
                } catch {
                    alert("Invalid export code");
                }
            }
        } else if (event.key == "Escape") {
            const exportCode = JSON.stringify(Object.fromEntries(la.entries()));
            prompt("Here is your export code:", btoa(exportCode));
        }
    });

    Canvas.initialize().then(h => {
        const options = new URL(location.href).searchParams;
        const C = Number.parseInt(options.get("count") || "500") || 500;
    
        const l = [
            particle(C, Color.RED),
            particle(C, Color.ORANGE),
            particle(C, Color.YELLOW),
            particle(C, Color.GREEN),
            particle(C, Color.BLUE),
            particle(C, Color.CYAN),
            particle(C, Color.MAGENTA),
            particle(C, Color.PINK),
            particle(C, Color.WHITE)
        ];
    
        for (let i = 0;i < l.length;i++) {
            for (let j = 0;j < l.length;j++) {
                la.set(i * j, Math.random() * 2 - 1);
            }
        }
    
        h.loop = () => {
            for (let i = 0;i < l.length;i++) {
                for (let j = 0;j < l.length;j++) {
                    rule(l[i], l[j], la.get(i * j));
                }
            }
    
            for (const g of l) {
                draw(g);
            }
        }
    });
} else {
    Canvas.initialize().then(h => {
        /**
          Import: {"0":0.6514019036576775,"1":-0.14316369606702883,"2":-0.3718822408554452,"3":0.9498503627813495,"4":0.3207100570104142,"5":0.6637177038531363,"6":-0.9859556933145965,"8":0.4817846331317117,"9":0.8041424124054206,"10":0.14655102359478134,"12":-0.18656117217419155,"15":-0.7316912669873652,"16":0.3897251385541276,"18":0.797672882475676,"20":0.2960636815439228,"24":0.14313247458829048,"25":0.08224338210321491,"30":-0.2717489809751692,"36":0.13866171134105}
          Import: {"0":-0.11995010414718132,"1":0.6556664042752307,"2":-0.6130955199886912,"3":-0.26164438037944393,"4":-0.6298570395102221,"5":0.3616344702716634,"6":0.003501408279497298,"8":0.8038106323561052,"9":-0.6862222811648078,"10":0.46248846090632334,"12":0.4004157219002398,"15":-0.01464166180480353,"16":-0.19276089124884033,"18":0.15371838270032612,"20":-0.822059434066297,"24":-0.3833657670762807,"25":0.41075690822894373,"30":-0.7999449327040136,"36":0.49312017150846854}
          IMport: {"0":0.03231780573593834,"1":-0.06549051344709511,"2":0.3883775128673377,"3":0.5558618290620618,"4":-0.3354543141161521,"5":0.4717788593000751,"6":0.023461889155243387,"8":0.7841141108998126,"9":-0.33639460809087574,"10":-0.28960763359128494,"12":-0.9148027768622407,"15":-0.19008719814032338,"16":-0.6943056728773249,"18":0.5095635139090136,"20":-0.4558807677796275,"24":0.18608387937689352,"25":-0.03872793420106824,"30":0.7978758074172005,"36":0.3086566538091331}
         */


        const proton = particle(1000, Color.RED);
        const neutron = particle(1000, Color.WHITE);
        const electron = particle(1000, Color.BLUE);

        h.loop = () => {
            rule(proton, electron, -10);
            rule(electron, proton, -10);

            rule(electron, neutron, -10);
            rule(neutron, electron, -10);

            rule(proton, neutron, -10);
            rule(neutron, proton, 10);

            draw(proton);
            draw(neutron);
            draw(electron);
        }
    });
}