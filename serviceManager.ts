export class ServiceManager {
    private readonly data: any = {};

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
        } catch (err) {
            // Ignored intentionally: this method is best-effort and returns null when serialization fails.
            console.log("Error ignorado intencionalmente", err);
            return null;
        }
    }

    public getDataFastAgain(): any {
        return this.getDataFast();
    }
}
