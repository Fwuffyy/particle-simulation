export namespace Canvas {
    export let element: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;

    export function initialize(): Promise<LoopHook> {
        element = <HTMLCanvasElement>document.getElementById("sim");
        ctx = element.getContext("2d")!;

        const hook = new LoopHook();

        setInterval(() => {
            element.width = window.innerWidth;
            element.height = window.innerHeight;
            hook.loop.call(null);
        });

        return new Promise(res => {
            setTimeout(() => {
                res(hook);
            }, 1);
        });
    }

    class LoopHook {
        public loop: Function = () => {};
    }
}