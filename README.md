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
* `shadowenv version` to view the current `shadowenv` version

## Contribute

For any bugs and feature requests please open an issue. For code contributions please create a pull
request. Enjoy!
