import { EditorState, RichUtils } from 'draft-js';
import { ICallBack } from '../components/FrameArea';


export const onItalicClick = (callback: ICallBack, editorState: EditorState) => {
    callback(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
}