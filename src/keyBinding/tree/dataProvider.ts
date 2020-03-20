import { TreeItem, TreeDataProvider } from 'vscode';
import KeyBindingTreeItem from './item';

export default class KeyBindingTreeDataProvider
  implements TreeDataProvider<TreeItem> {
  getTreeItem(spaceTreeItem: KeyBindingTreeItem): TreeItem {
    return spaceTreeItem;
  }

  getChildren(
    _spaceTreeItem?: KeyBindingTreeItem
  ): Thenable<KeyBindingTreeItem[]> {
    return Promise.resolve([new KeyBindingTreeItem('spaceVScode')]);
  }
}
