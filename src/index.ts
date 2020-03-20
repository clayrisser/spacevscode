import { commands, window, ExtensionContext } from 'vscode';
import { KeyBindingTreeDataProvider } from './keyBinding';

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('spaceVScode.open', () => {
      window.registerTreeDataProvider(
        'spaceVScode',
        new KeyBindingTreeDataProvider()
      );
    })
  );
}

export function deactivate() {
  console.log('deactivated');
}
