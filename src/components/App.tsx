import { MemoList } from "./memoList";
import { ChangeEvent, FC, useCallback, useState } from "react";
import { useMemoList } from "../hooks/useMemoList";

export const App: FC = () => {
  const [text, setText] = useState<string>("");
  const { memos, addTodo, deleteTodo } = useMemoList();

  // inputの入力値を取得する方法
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  /**
   * メモを追加.
   */
  const addMemo = () => {
    // カスタムフックの実行
    addTodo(text);
  };

  /**
   * メモを削除.
   * @param index - インデックス
   */
  const onClickDelete = useCallback(
    (index: number) => {
      // カスタムフックの実行
      deleteTodo(index);
    },
    [deleteTodo]
  );

  return (
    <div>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText} />
      <button onClick={addMemo}>追加</button>

      {/* propsで値を渡す */}
      <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
    </div>
  );
};
