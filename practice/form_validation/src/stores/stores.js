import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    // 儲存狀態的各個變數
    todos: [
      {
        id: 1,
        text: "寫code啊",
        isFinished: true,
      },
      {
        id: 2,
        text: "掃地了喔",
        isFinished: false,
      },
      {
        id: 3,
        text: "我想回家",
        isFinished: true,
      },
      {
        id: 4,
        text: "游泳",
        isFinished: false,
      },
      {
        id: 5,
        text: "吃晚餐",
        isFinished: false,
      },
    ],
  }),
  getters: {
    // 需要被讀取的資料函式
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
  },
  actions: {
    // 變更資料狀態的函式區
    addTodo(text) {
      if (text.length == 0) return;
      this.todos.push({
        id: Math.floor(Math.random() * 100000),
        text: text,
        isFinished: false,
      });
      text = "";
    },
  },
});
