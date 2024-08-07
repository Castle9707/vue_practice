import { defineStore } from "pinia";

export const useNoteStore = defineStore("notes", {
  state: () => ({
    // 儲存狀態的各個變數
    notes: [
      {
        id: 1,
        title: "寫code啊",
        content: "好吧好吧",
        isPinned: false,
      },
      {
        id: 2,
        title: "掃地了喔",
        content: "好吧好吧",
        isPinned: true,
      },
      {
        id: 3,
        title: "我想回家",
        content: "好吧好吧",
        isPinned: false,
      },
      {
        id: 4,
        title: "游泳",
        content: "好吧好吧",
        isPinned: false,
      },
      {
        id: 5,
        title: "吃晚餐",
        content: "好吧好吧",
        isPinned: false,
      },
    ],
  }),
  getters: {
    // 需要被讀取的資料函式
    pinnedNotes(state) {
      return state.notes.filter((note) => note.isPinned);
    },
  },
  actions: {
    // 變更資料狀態的函式區
    addNote(title, content) {
      if (!title) return;
      const last_id = this.notes[this.notes.length - 1].id;
      this.notes.push({
        id: last_id + 1,
        title,
        content,
        isPinned: false,
      });
    },
    markedPinned(id) {
      const index = this.notes.findIndex((v) => v.id === id);
      this.notes[index].isPinned = !this.notes[index].isPinned;
    },
  },
});
