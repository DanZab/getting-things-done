import { 
  App, 
  Plugin, 
  PluginSettingTab,
  Setting
} from 'obsidian';
import GTD from './main'

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

export class Settings extends Plugin {
  settings: PluginSettings;

  async onload() {
    await this.loadSettings();

    this.addSettingTab(new SampleSettingTab(this.app, this));
  }

	// This adds a settings tab so the user can configure various aspects of the plugin
    
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class SampleSettingTab extends PluginSettingTab {
	plugin: GTD;

	constructor(app: App, plugin: GTD) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Setting #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
