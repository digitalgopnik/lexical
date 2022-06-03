import {
  $getRoot,
  createEditor,
  LineBreakNode,
  ParagraphNode,
  TextNode,
} from '../../lexical/dist/Lexical';
import {CodeHighlightNode, CodeNode} from '../../lexical-code/dist/LexicalCode';
import {HashtagNode} from '../../lexical-hashtag/dist/LexicalHashtag';
import {AutoLinkNode, LinkNode} from '../../lexical-link/dist/LexicalLink';
import {ListItemNode, ListNode} from '../../lexical-list/dist/LexicalList';
import {MarkNode} from '../../lexical-mark/dist/LexicalMark';
import {
  $convertToMarkdownString,
  registerMarkdownShortcuts,
  TRANSFORMERS,
} from '../../lexical-markdown/dist/LexicalMarkdown';
import {OverflowNode} from '../../lexical-overflow/dist/LexicalOverflow';
import {registerPlainText} from '../../lexical-plain-text/dist/LexicalPlainText';
import {
  HeadingNode,
  QuoteNode,
} from '../../lexical-rich-text/dist/LexicalRichText';
import {
  TableCellNode,
  TableNode,
  TableRowNode,
} from '../../lexical-table/dist/LexicalTable';

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
