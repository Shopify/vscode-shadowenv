'use strict';

import * as path from 'path';
import { execFile, ExecOptions } from 'child_process';
import * as constants from './constants';

interface CommandExecOptions {
    argv: Array<string>;
    cwd?: boolean;
}

export class Command {
    rootPath: string;
    shadowlispGlob: string;
    constructor(rootPath: string) {
        this.rootPath = rootPath;
        this.shadowlispGlob = path.join(rootPath, ".shadowenv.d", "*.lisp");
    }
    // Private
    private exec(options: CommandExecOptions): Thenable<string> {
        let execOptions: ExecOptions = {};
        if (options.cwd == null || options.cwd) {
            execOptions.cwd = this.rootPath;
        }
        return new Promise((resolve, reject) => {
            execFile(constants.shadowenv.cmd, options.argv, execOptions, (err, stdout, stderr) => {
                if (err) {
                    err.message = stderr;
                    reject(err);
                } else {
                    resolve(stdout);
                }
            });
        });
    }
    // Public
    version = () => this.exec({ argv: ['--version'] });
    trust = () => this.exec({ argv: ['trust'] });
    hook = () => this.exec({ argv: ['hook', '--json'] });
}
