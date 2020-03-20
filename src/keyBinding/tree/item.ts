import { TreeItem, TreeItemCollapsibleState } from 'vscode';

export default class KeyBindingTreeItem extends TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: TreeItemCollapsibleState = TreeItemCollapsibleState.Collapsed
  ) {
    super(label, collapsibleState);
  }

  get tooltip(): string {
    return this.label;
  }

  get description(): string {
    return this.label;
  }
}
