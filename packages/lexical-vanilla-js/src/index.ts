import {CodeHighlightNode, CodeNode} from '@lexical/code';
import {HashtagNode} from '@lexical/hashtag';
import {AutoLinkNode, LinkNode} from '@lexical/link';
import {ListItemNode, ListNode} from '@lexical/list';
import {MarkNode} from '@lexical/mark';
import {
  $convertToMarkdownString,
  registerMarkdownShortcuts,
  TRANSFORMERS,
} from '@lexical/markdown';
import {OverflowNode} from '@lexical/overflow';
import {registerPlainText} from '@lexical/plain-text';
import {HeadingNode, QuoteNode} from '@lexical/rich-text';
import {TableCellNode, TableNode, TableRowNode} from '@lexical/table';
import {
  $getRoot,
  createEditor,
  LineBreakNode,
  ParagraphNode,
  TextNode,
} from 'lexical';

function initPlainText(editor, initialEditorState?) {
  return registerPlainText(editor);
}

function initMarkdownShortCuts(editor, transformers = TRANSFORMERS) {
  return registerMarkdownShortcuts(editor, transformers);
}

document.addEventListener('DOMContentLoaded', function (event) {
  const editor = createEditor({
    nodes: [
      LineBreakNode,
      ParagraphNode,
      TextNode,
      LinkNode,
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      CodeHighlightNode,
      CodeNode,
      HashtagNode,
      MarkNode,
      OverflowNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
    ],
    onError: console.error,
  });

  editor.setRootElement(document.getElementById('editor'));

  initMarkdownShortCuts(editor);
  initPlainText(editor);

  editor.registerUpdateListener(({editorState}) => {
    editorState.read(() => {
      console.log('heftig');
      const toMarkdownString = $convertToMarkdownString(TRANSFORMERS);
      console.log(toMarkdownString);
      const root = $getRoot();
      console.log(root.getTextContent());
    });
  });
});
