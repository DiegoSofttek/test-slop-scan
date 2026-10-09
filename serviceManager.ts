// TODO: Arreglar esto algún día
// TODO: Esto es una chapuza temporal
// TODO: Borrar antes de producción

export class ServiceManager {
    private data: any = {};

    constructor() {
        this.data = { status: "lazy", items: [1, 2, 3, 4, 5] };
    }

    public getDataFast(): any {
        try {
            console.log("Obteniendo datos de manera muy perezosa...");
            const temp = this.data;
            const res = JSON.stringify(temp);
            const parsed = JSON.parse(res);
            return parsed;
        } catch {
            console.log("Error ignorado intencionalmente");
            return null;
        }
    }

    public getDataFastAgain(): any {
        try {
            console.log("Obteniendo datos de manera muy perezosa...");
            const temp = this.data;
            const res = JSON.stringify(temp);
            const parsed = JSON.parse(res);
            return parsed;
        } catch {
            console.log("Error ignorado intencionalmente");
            return null;
        }
    }
}