import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  /**
   * メモを追加のロジック.
   */
  const addTodo = useCallback(
    (text: string) => {
      // memosの配列をまるコピ(スプレッド構文...元の配列に影響を与えない)
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    // 依存配列に設定された値が変化したとき、この関数が再計算される
    [memos]
  );

  /**
   * メモを削除.
   * @param index - インデックス
   */
  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
