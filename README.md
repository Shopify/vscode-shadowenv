# [Shadowenv](https://github.com/Shopify/shadowenv) for Visual Studio Code

This extension adds support for Shadowenv to VS Code, including:

* Auto-load the environment if the directory is trusted
* Prompt to trust the directory if not already trusted
* Auto-detect creation, change, and deletion of Shadowlisp, reloading the environment.

## Prerequisites

This extension needs Shadowenv installed to work. Please see the [Shadowenv
documentation](https://shopify.github.io/shadowenv/getting-started/#installation) for more details.

## Install

Via Quick Open:

1. [Download](https://code.visualstudio.com/download), install and open VS Code 
2. Press `cmd+p` to open the Quick Open dialog
3. Type `ext install shadowenv`
4. Click the *Install* button, then the *Enable* button

Via the Extensions tab:

1. Click the extensions tab or press `cmd+shift+x`
2. Search for *shadowenv*
3. Click the *Install* button, then the *Enable* button

Via the command line:

1. Open a command-line prompt
2. Run `code --install-extension Shopify.vscode-shadowenv`

## Usage

The following describes the usage of this extension that is automatically enabled each time you open
up VS Code.

### Commands

In order to run a command press `cmd+shift+p` to view the Command Palette. There type:

* `shadowenv trust` to trust and load the local Shadowenv
* `shadowenv --version` to view the current `shadowenv` version

## Contribute

For any bugs and feature requests please open an issue. For code contributions please create a pull
request. Enjoy!

## Releasing

1. Make sure you bump the version in [`package.json`](https://github.com/Shopify/vscode-shadowenv/blob/master/package.json#L5), update the [`CHANGELOG.md`](https://github.com/Shopify/vscode-shadowenv/blob/master/CHANGELOG.md)
1. [Tag the new version](https://github.com/Shopify/vscode-shadowenv/releases/new)
1. log in to or create account on dev.azure.com
1. Get @burke or someone else who has done a release to add you to the Shopify publisher
   (https://marketplace.visualstudio.com/manage/publishers/Shopify)
1. Click the "I already have an account" button; don't go to portal.azure.com
1. Click the settings icon right next to your avatar after logged in; Personal Access Tokens
1. New Token > All Accessible Organizations, Full access
1. `npm config set prefix ~/nodewhatever`
1. `npm install -g vsce`
1. `~/nodewhatever/bin/vsce package`
1. `vsce login Shopify` (then paste token)
1. `vsce publish`
