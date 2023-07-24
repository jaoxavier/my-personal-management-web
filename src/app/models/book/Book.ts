export interface Book{
    id: number;
    name: string;
    pages: number;
    read: number;
    finished: boolean;
    start_reading: Date;
    end_reading: Date;
    observation: string;
    opinion: "TERRIBLE" | "BAD" | "MEH" | "COOL" | "AWESOME";
    difficulty: "EASY" | "MEDIUM" | "HARD";
}
