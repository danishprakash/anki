// Copyright: Ankitects Pty Ltd and contributors
// License: GNU AGPL, version 3 or later; http://www.gnu.org/licenses/agpl.html

/**
 * Code that is shared among all entry points in /ts/editor
 */
import "./legacy.css";
import "./editor-base.css";

import "../lib/register-package";
import "../sveltelib/export-runtime";

declare global {
    interface Selection {
        modify(s: string, t: string, u: string): void;
        addRange(r: Range): void;
        removeAllRanges(): void;
        getRangeAt(n: number): Range;
    }
}

import { ModuleName } from "../lib/i18n";

export const editorModules = [
    ModuleName.EDITING,
    ModuleName.KEYBOARD,
    ModuleName.ACTIONS,
    ModuleName.BROWSING,
];

export { editorToolbar } from "./EditorToolbar.svelte";

import IconButton from "../components/IconButton.svelte";
import LabelButton from "../components/LabelButton.svelte";
import WithShortcut from "../components/WithShortcut.svelte";
import WithContext from "../components/WithContext.svelte";
import WithState from "../components/WithState.svelte";

import * as contextKeys from "../components/context-keys";
import * as editorContextKeys from "./NoteEditor.svelte";

export const components = {
    IconButton,
    LabelButton,
    WithShortcut,
    WithContext,
    WithState,
    contextKeys: { ...contextKeys, ...editorContextKeys },
};
