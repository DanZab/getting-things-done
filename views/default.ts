import { ItemView, WorkspaceLeaf, setIcon } from 'obsidian';

// Default view
// Shows next tasks and an index of current projects

export const VIEW_TYPE_DEFAULT = 'default';

export class DefaultView extends ItemView {
  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_DEFAULT;
  }

  getDisplayText() {
    return 'GTD Launch Screen';
  }

  async onload() {
    const item = this.addStatusBarItem();
    setIcon(item, 'rat');
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl('h4', { text: 'Example view' });
  }

  async onClose() {
    // Nothing to clean up.
  }
}