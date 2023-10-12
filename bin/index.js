"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//
//	IMPORTS
//
const NutJS = __importStar(require("@nut-tree/nut-js"));
// import * as OpenCV from "opencv4nodejs-prebuilt";
let file = "@nut-tree/template-matcher/node_modules/opencv4nodejs-prebuilt/lib/cv.js";
//
//	FUNCTIONS
//
function getScreenCenter() {
    return __awaiter(this, void 0, void 0, function* () {
        let x = yield NutJS.screen.width();
        let y = yield NutJS.screen.height();
        x = Math.floor(x / 2);
        y = Math.floor(y / 2);
        return new NutJS.Point(x, y);
    });
}
function setToScreenCenter() {
    return __awaiter(this, void 0, void 0, function* () {
        const screenCenter = yield getScreenCenter();
        yield NutJS.mouse.setPosition(screenCenter);
    });
}
function ersterMausTest() {
    return __awaiter(this, void 0, void 0, function* () {
        const radius = 200;
        //
        //	Maus im Quadrat bewegen
        //
        yield setToScreenCenter();
        yield NutJS.mouse.move(NutJS.up(radius));
        yield NutJS.mouse.move(NutJS.right(radius));
        yield NutJS.mouse.move(NutJS.down(radius));
        yield NutJS.mouse.move(NutJS.left(radius));
        yield NutJS.mouse.move(NutJS.up(radius));
        //
        //	Maus im Kreis bewegen
        //
        const circle = yield getScreenCenter();
        let mx = circle.x;
        let my = circle.y;
        for (let deg = 0; deg < 360; deg++) {
            let rad = (deg - 90) * Math.PI / 180;
            let rx = radius * Math.cos(rad);
            let ry = radius * Math.sin(rad);
            circle.x = mx + rx;
            circle.y = my + ry;
            yield NutJS.mouse.setPosition(circle);
            yield NutJS.sleep(2);
        }
    });
}
function ersterTastaturTest() {
    return __awaiter(this, void 0, void 0, function* () {
        //
        //	Ruf den Windows-Tastenrechner auf:
        //
        yield NutJS.keyboard.pressKey(NutJS.Key.LeftWin, NutJS.Key.R);
        yield NutJS.keyboard.releaseKey(NutJS.Key.LeftWin, NutJS.Key.R);
        yield NutJS.keyboard.type("calc.exe\n");
    });
}
function verschiedeneTests() {
    return __awaiter(this, void 0, void 0, function* () {
        const DEFAULT_SPEED = yield NutJS.mouse.config.mouseSpeed;
        const linksOben = new NutJS.Point(0, 0);
        const mitte = getScreenCenter();
        yield NutJS.mouse.move(NutJS.straightTo(linksOben));
        yield NutJS.mouse.move(NutJS.straightTo(mitte));
        // let image = await NutJS.imageResource("assets/images/async.png");
        // let word = NutJS.singleWord("async");
        // let img = await OpenCV.imread("../assets/images/async.png");
        // console.log(img);
        // TemplateMatcher;
        // console.log(NutJS.providerRegistry.getTextFinder());
        // console.log(NutJS.providerRegistry.getTextFinder);
        // console.log(NutJS.providerRegistry.registerTextFinder);
        // console.log(NutJS.providerRegistry.getTextFinder());
        // let result = await NutJS.screen.find(word);
        // let result = await NutJS.screen.find(image);
        // console.log(result);
    });
}
//
//	MAIN
//
(() => __awaiter(void 0, void 0, void 0, function* () {
    // await ersterMausTest();
    // await ersterTastaturTest();
    yield verschiedeneTests();
}))();
