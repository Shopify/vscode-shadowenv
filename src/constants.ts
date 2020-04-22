'use strict';

export const shadowenv = {
    name: 'shadowenv',
    cmd: 'shadowenv',
};

export const vscode = {
    commands: {
        open: 'vscode.open'
    },
    extension: {
        actions: {
            trust: 'Trust'
        }
    }
};

export const messages = {
    error: (e) => `${shadowenv.name} error: ` + (e.message || e),
    version: (v) => `${shadowenv.name} version: ` + v,

    warn: {
        unexpectedUnexportedValue: `${shadowenv.name}: Unexpected unexported value: `
    },

    assign: {
        success: `${shadowenv.name} activated`,
        warn: `${shadowenv.name}: Your shadowenv is not trusted!`,
        trust: `${shadowenv.name}: Would you like to trust this shadowenv?`,
        visibilityDuration: 3000 // milliseconds
    }
};
