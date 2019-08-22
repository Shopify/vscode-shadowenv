'use strict';

import * as vscode from 'vscode';
import * as constants from './constants';
import { Command } from './command';

let shadowenvData = "";
let command = new Command(vscode.workspace.rootPath);
let watcher = vscode.workspace.createFileSystemWatcher(command.shadowlispGlob);

let displayError = (e: any) =>
    vscode.window.showErrorMessage(constants.messages.error(e));

let version = () =>
    command.version().then(v => vscode.window.showInformationMessage(constants.messages.version(v)), displayError);

let trust = () => command.trust().then(
    ()    => visiblyLoadShadowenv(),
    (err) => displayError(err));

let quietlyLoadShadowenv = () => loadShadowenv({ showSuccess: false });
let visiblyLoadShadowenv = () => loadShadowenv({ showSuccess: true });

let loadShadowenv = (options: { showSuccess: boolean }) => {
    command.hook(shadowenvData).then((json) => {
        if (json == "") return;
        let parsed = JSON.parse(json);

        let exported = parsed['exported'];
        for (let name in exported) {
            process.env[name] = exported[name];
        }

        let unexported = parsed['unexported'];
        for (let name in unexported) {
            let value = unexported[name];
            if (name == constants.shadowenv.shadowenvData) {
                shadowenvData = unexported[name];
            } else {
                vscode.window.showWarningMessage(constants.messages.warn.unexpectedUnexportedValue + name);
            }
        }
    }).then(() => {
        if (options.showSuccess) {
            return vscode.window.showInformationMessage(constants.messages.assign.success);
        }
    }, (err) => {
        if (err.message.indexOf(`untrusted`) !== -1) {
            return vscode.window.showWarningMessage(constants.messages.assign.warn,
                constants.vscode.extension.actions.trust);
        } else {
            return displayError(err);
        }
    }).then((option) => {
        if (option === constants.vscode.extension.actions.trust) {
            return trust();
        }
    });
};

watcher.onDidCreate((e) => quietlyLoadShadowenv());
watcher.onDidChange((e) => quietlyLoadShadowenv());
watcher.onDidDelete((e) => quietlyLoadShadowenv());

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('shadowenv.version', version));
    context.subscriptions.push(vscode.commands.registerCommand('shadowenv.trust', trust));
    visiblyLoadShadowenv();
}
