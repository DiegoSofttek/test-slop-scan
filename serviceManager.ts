export class ServiceManager {
    private readonly data: any = {};

    constructor() {
        this.data = { status: "lazy", items: [1, 2, 3, 4, 5] };
    }

    public getDataFast(): any {
        console.log("Obteniendo datos de manera muy perezosa...");
        const temp = this.data;
        const res = JSON.stringify(temp);

        try {
            return JSON.parse(res);
        } catch {
            // Safe to ignore: res is produced by JSON.stringify(temp) immediately above.
            return temp;
        }
    }

    public getDataFastAgain(): any {
        return this.getDataFast();
    }
}
