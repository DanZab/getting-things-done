import { Plugin } from 'obsidian';
import { ExampleSettingTab } from './settings';

interface PluginSettings {
  projectDirectory: string;
  taskDirectory: string;
  referenceListDirectory: string;
}

const DEFAULT_SETTINGS: Partial<PluginSettings> = {
  projectDirectory: './',
  taskDirectory: './tasks/',
  referenceListDirectory: './lists/',
};

export default class Settings extends Plugin {
  settings: PluginSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new ExampleSettingTab(this.app, this));
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}