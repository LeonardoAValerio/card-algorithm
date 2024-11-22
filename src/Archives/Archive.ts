import { PathLike, PathOrFileDescriptor, writeFileSync } from 'node:fs';
import * as fs from 'node:fs/promises';
import { Extensions } from './Extensions';

export interface FileAttributes {
    name: string;
    path: string;
    extension: Extensions;
}

export class Archive implements FileAttributes {
    name: string;
    path: string;
    extension: Extensions;

    constructor(attributes: FileAttributes) {
        this.name = attributes.name;
        this.extension = attributes.extension;
        this.path = attributes.path;
    }

    private constructStringFile(): string {
        const path = "./" + this.path;
        const archive = this.name + "." + this.extension;
        return (path + archive);
    }

    private async runFile(type: string, run: Function) {
        let fileHandle
        try {
            fileHandle = await fs.open(this.constructStringFile(), type);
            run();
        } catch(e) {
            console.log(e);
        } finally {
            await fileHandle?.close();
        } 
    }

    public startFile(): void {
        fs.writeFile(this.constructStringFile(), "");
    }

    public appendData(data: string): void {
        const append = () => {
            fs.appendFile(this.constructStringFile(), data);
        }

        this.runFile("a", append);
    }

    public writeData(data: string): void {
        const write = () => {
            fs.writeFile(this.constructStringFile(), data);
        }

        this.runFile("w", write);
    }

    public static create(attributes: FileAttributes): Archive {
        const newFile = new Archive(attributes);
        newFile.startFile();
        return newFile;
    }
}