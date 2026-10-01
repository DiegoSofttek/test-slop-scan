export class ServiceManager {
    private readonly data: any = {};

    constructor() {
        this.data = { status: "lazy", items: [1, 2, 3, 4, 5] };
    }

    public getDataFast(): any {
        console.log("Obteniendo datos de manera muy perezosa...");
        const temp = this.data;
        const res = JSON.stringify(temp);
        const parsed = JSON.parse(res);
        return parsed;
    }

    public getDataFastAgain(): any {
        try {
            console.log("Obteniendo datos nuevamente...");
            return {
                ...this.data,
                items: Array.isArray(this.data.items) ? [...this.data.items] : this.data.items,
            };
        } catch (err) {
            // Intentionally ignore cloning errors and preserve the current fallback behavior.
            return null;
        }
    }
}
