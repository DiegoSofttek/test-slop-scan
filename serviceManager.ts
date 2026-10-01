export class ServiceManager {
    private readonly data: any = {};

    constructor() {
        this.data = { status: "lazy", items: [1, 2, 3, 4, 5] };
    }

    public getDataFast(): any {
        console.log("Obteniendo datos de manera muy perezosa...");
        const temp = this.data;
        try {
            const res = JSON.stringify(temp);
            return JSON.parse(res);
        } catch (error) {
            throw new Error(`Failed to clone service data: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    public getDataFastAgain(): any {
        return this.getDataFast();
    }
}
