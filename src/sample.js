"use strict";

const {
	mouse,
	screen,
	singleWord,
	sleep,
	useConsoleLogger,
	ConsoleLogLevel,
	straightTo,
	centerOf,
	Button,
	getActiveWindow,
} = require("@nut-tree/nut-js");
const {
	preloadLanguages,
	Language,
	LanguageModelType,
	configure,
} = require("@nut-tree/plugin-ocr");

configure({ languageModelType: LanguageModelType.BEST });

useConsoleLogger({ logLevel: ConsoleLogLevel.DEBUG });

screen.config.autoHighlight = true;
screen.config.ocrConfidence = 0.8;

function activeWindowRegion() {
	return getActiveWindow().then((activeWindow) => activeWindow.region);
}

(async () => {
	await preloadLanguages([Language.English], [LanguageModelType.BEST]);
	await sleep(5000);
	const result = await screen.find(singleWord("@nut-tree/nut-js"));
	await mouse.move(straightTo(centerOf(result)));
	await mouse.click(Button.LEFT);
	await screen.waitFor(singleWord("Native"), 15000, 1000, {
		providerData: { partialMatch: true },
	});
	const content = await screen.read({ searchRegion: activeWindowRegion() });
	console.log(content);
})();
